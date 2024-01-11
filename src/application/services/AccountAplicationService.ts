import { Publisher } from "@application/Publisher";
import { CreditCommand } from "@application/commands/CreditCommand";
import { DebitCommand } from "@application/commands/DebitCommand";
import { AccountBuilder } from "@domain/entities/AccountBuilder";
import { AccountRepository } from "@domain/repositories/AccountRepository";

export class AccountApplicationService {
  constructor(
    readonly publisher: Publisher,
    readonly accountRepository: AccountRepository
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

  get(accountDocument: string) {
    return this.accountRepository.get(accountDocument);
  }
}
