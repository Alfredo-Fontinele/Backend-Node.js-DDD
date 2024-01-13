import { TransferCommand } from "@application/commands/TransferCommand";
import { CreditHandler } from "@application/handlers/CreditHandler";
import { DebitHandler } from "@application/handlers/DebitHandler";
import { AccountApplicationService } from "@application/services/AccountAplicationService";
import { Publisher } from "@infra/queues/Publisher";
import { AccountRepositoryMemory } from "@infra/repositories/AccountRepositoryMemory";

let service: AccountApplicationService;

describe("Account Case", () => {
  beforeEach(() => {
    const publisher = new Publisher();
    const accountRepositoryMemory = new AccountRepositoryMemory();

    publisher.register(new CreditHandler(accountRepositoryMemory));
    publisher.register(new DebitHandler(accountRepositoryMemory));

    service = new AccountApplicationService(publisher, accountRepositoryMemory);
  });

  it("Deve criar um conta ", () => {
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

    const accountFrom = service.get("111.111.111-11");
    const accountTo = service.get("222.222.222-22");

    accountFrom.credit(1000);
    accountTo.credit(1000);

    const transfer = new TransferCommand(accountFrom, accountTo, 400);
    transfer.execute();

    expect(accountFrom.getBalance()).toStrictEqual(600);
    expect(accountTo.getBalance()).toStrictEqual(1400);
  });

  it("Deve criar duas contas e fazer uma transferência sem saldo", () => {
    service.create("111.111.111-11");
    service.create("222.222.222-22");

    const accountFrom = service.get("111.111.111-11");
    const accountTo = service.get("222.222.222-22");

    try {
      const transfer = new TransferCommand(accountFrom, accountTo, 400);
      transfer.execute();
    } catch (err: any) {
      expect(err.message).toBe("money insuficienty to transfer");
    }
  });
});
