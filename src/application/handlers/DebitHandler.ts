import { AccountRepository } from "../../domain/repositories/AccountRepository";
import { Observer } from "../../infra/queues/Observer";
import { DebitCommand } from "../commands/DebitCommand";

export class DebitHandler implements Observer {
  operation = "debit";

  constructor(private accountRepository: AccountRepository) {}

  notify(command: DebitCommand): void {
    const account = this.accountRepository.get(command.accountDocument);
    if (account) {
      account.debit(command.amount);
    }
  }
}
