import { DebitCommand } from "@application/commands/DebitCommand";
import { Observer } from "@domain/Observer";
import { AccountRepository } from "@domain/repositories/AccountRepository";

export class DebitHandler implements Observer {
  operation = "debit";

  constructor(readonly accountRepository: AccountRepository) {}

  notify(command: DebitCommand): void {
    const account = this.accountRepository.get(command.accountDocument);
    if (account) {
      account.debit(command.amount);
    }
  }
}
