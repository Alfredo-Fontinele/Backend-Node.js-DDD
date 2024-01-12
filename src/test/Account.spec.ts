import { CreditHandler } from "@application/handlers/CreditHandler";
import { DebitHandler } from "@application/handlers/DebitHandler";
import { AccountApplicationService } from "@application/services/AccountAplicationService";
import { Publisher } from "@infra/queues/Publisher";
import { AccountRepositoryMemory } from "@infra/repositories/AccountRepositoryMemory";

let service: AccountApplicationService;

beforeEach(() => {
  const publisher = new Publisher();
  const accountRepositoryMemory = new AccountRepositoryMemory();

  publisher.register(new CreditHandler(accountRepositoryMemory));
  publisher.register(new DebitHandler(accountRepositoryMemory));

  service = new AccountApplicationService(publisher, accountRepositoryMemory);
});

test("Deve criar um conta ", () => {
  service.create("111.111.111-11");

  const account = service.get("111.111.111-11");
  expect(account.getBalance()).toBe(0);
});

test("Deve criar um conta e fazer um crédito", () => {
  service.create("111.111.111-11");
  service.credit("111.111.111-11", 500);

  const account = service.get("111.111.111-11");
  expect(account.getBalance()).toBe(500);
});

test("Deve criar um conta e fazer um débito", () => {
  service.create("111.111.111-11");

  service.credit("111.111.111-11", 1000);
  service.debit("111.111.111-11", 500);

  const account = service.get("111.111.111-11");
  expect(account.getBalance()).toBe(500);
});

// test("Deve criar duas contas e fazer uma transferência", () => {
//   const accountFrom = new AccountBuilder("111.111.111-11")
//     .setBank("033")
//     .setBranch("0001")
//     .setAccount("123456-7")
//     .build();

//   const accountTo = new AccountBuilder("222.222.222-22")
//     .setBank("033")
//     .setBranch("0001")
//     .setAccount("123456-7")
//     .build();

//   const creditCommandAccountFrom = new CreditCommand(accountFrom, 1000);
//   creditCommandAccountFrom.execute();

//   const creditCommandAccountTo = new CreditCommand(accountTo, 500);
//   creditCommandAccountTo.execute();

//   const transferCommand = new TransferCommand(accountFrom, accountTo, 700);
//   transferCommand.execute();

//   expect(accountFrom.getBalance()).toBe(300);
//   expect(accountTo.getBalance()).toBe(1200);
// });
