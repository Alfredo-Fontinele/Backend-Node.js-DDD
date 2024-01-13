import { CreditCommand } from "@application/commands/CreditCommand";
import { AccountRepository } from "@domain/repositories/AccountRepository";
import { Observer } from "@infra/queues/Observer";

export class CreditHandler implements Observer {
  operation = "credit";

  constructor(private accountRepository: AccountRepository) {}

  notify(command: CreditCommand): void {
    const account = this.accountRepository.get(command.accountDocument);
    if (account) {
      account.credit(command.amount);
    }
  }
}
