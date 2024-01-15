import { AccountBuilder } from "../../domain/builders/AccountBuilder";
import { AccountRepository } from "../../domain/repositories/AccountRepository";
import { Publisher } from "../../infra/queues/Publisher";
import { CreditCommand } from "../commands/CreditCommand";
import { DebitCommand } from "../commands/DebitCommand";
import { TransferCommand } from "../commands/TransferCommand";

export class AccountApplicationService {
  constructor(
    private publisher: Publisher,
    private accountRepository: AccountRepository
  ) {}

  create(documet: string) {
    const account = new AccountBuilder(documet).build();
    this.accountRepository.save(account);
  }

  credit(accountDocument: string, amount: number) {
    const creditCommand = new CreditCommand(accountDocument, amount);
    this.publisher.publish(creditCommand);
  }

  debit(accountDocument: string, amount: number) {
    const debitCommand = new DebitCommand(accountDocument, amount);

    this.publisher.publish(debitCommand);
  }

  transfer(
    accountFromDocument: string,
    accountToDocument: string,
    amount: number
  ) {
    const transferCommand = new TransferCommand(
      accountFromDocument,
      accountToDocument,
      amount
    );
    this.publisher.publish(transferCommand);
  }

  get(accountDocument: string) {
    return this.accountRepository.get(accountDocument);
  }
}
