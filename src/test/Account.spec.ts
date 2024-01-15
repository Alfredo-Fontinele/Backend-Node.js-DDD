import { CreditHandler } from "../application/handlers/CreditHandler";
import { DebitHandler } from "../application/handlers/DebitHandler";
import { TransferHandler } from "../application/handlers/TransferHandler";
import { AccountApplicationService } from "../application/services/AccountAplicationService";
import { Publisher } from "../infra/queues/Publisher";
import { AccountRepositoryMemory } from "../infra/repositories/AccountRepositoryMemory";

let service: AccountApplicationService;

describe("Account Entity", () => {
  beforeEach(() => {
    const publisher = new Publisher();
    const accountRepositoryMemory = new AccountRepositoryMemory();

    publisher.register(new CreditHandler(accountRepositoryMemory));
    publisher.register(new DebitHandler(accountRepositoryMemory));
    publisher.register(new TransferHandler(accountRepositoryMemory));

    service = new AccountApplicationService(publisher, accountRepositoryMemory);
  });

  it("Deve criar um conta", () => {
    service.create("111.111.111-11");

    const account = service.get("111.111.111-11");
    expect(account.getBalance()).toBe(0);
  });

  it("Deve criar um conta e fazer um crédito", () => {
    service.create("111.111.111-11");
    service.credit("111.111.111-11", 500);

    const account = service.get("111.111.111-11");
    expect(account.getBalance()).toBe(500);
  });

  it("Deve criar um conta e fazer um débito", () => {
    service.create("111.111.111-11");

    service.credit("111.111.111-11", 1000);
    service.debit("111.111.111-11", 500);

    const account = service.get("111.111.111-11");
    expect(account.getBalance()).toBe(500);
  });

  it("Deve criar duas contas e fazer uma transferência", () => {
    service.create("111.111.111-11");
    service.create("222.222.222-22");

    service.credit("111.111.111-11", 1000);
    service.credit("222.222.222-22", 1000);

    service.transfer("111.111.111-11", "222.222.222-22", 400);

    const accountFrom = service.get("111.111.111-11");
    const accountTo = service.get("222.222.222-22");

    expect(accountFrom.getBalance()).toStrictEqual(600);
    expect(accountTo.getBalance()).toStrictEqual(1400);
  });

  it("Deve criar duas contas e não fazer uma transferência sem saldo", () => {
    service.create("111.111.111-11");
    service.create("222.222.222-22");

    try {
      service.transfer("111.111.111-11", "222.222.222-22", 1000);
    } catch (err: any) {
      expect(err.message).toBe("money insuficienty to transfer");
    }
  });
});
