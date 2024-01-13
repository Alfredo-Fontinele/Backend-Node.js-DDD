import { TransferCommand } from "@application/commands/TransferCommand";
import { AccountRepository } from "@domain/repositories/AccountRepository";
import { TransferService } from "@domain/services/TransferService";
import { Observer } from "@infra/queues/Observer";

export class TransferHandler implements Observer {
  operation = "transfer";

  constructor(private accountRepository: AccountRepository) {}

  notify(command: TransferCommand): void {
    const accountFrom = this.accountRepository.get(command.accountFromDocument);
    const accountTo = this.accountRepository.get(command.accountToDocument);
    const transferService = new TransferService();
    transferService.transfer(accountFrom, accountTo, command.amount);
  }
}
