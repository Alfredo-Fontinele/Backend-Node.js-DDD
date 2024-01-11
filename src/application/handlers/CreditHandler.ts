import { CreditCommand } from "@application/commands/CreditCommand";
import { Observer } from "@domain/Observer";
import { AccountRepository } from "@domain/repositories/AccountRepository";

export class CreditHandler implements Observer {
  operation = "credit";

  constructor(readonly accountRepository: AccountRepository) {}

  notify(command: CreditCommand): void {
    const account = this.accountRepository.get(command.accountDocument);
    if (account) {
      account.credit(command.amount);
    }
  }
}
