import { TransferService } from "@application/services/TransferService";
import { Account } from "@domain/entities/Account";
import { Command } from "./Command";

export class TransferCommand implements Command {
  operation = "transfer";

  constructor(
    readonly accountFrom: Account,
    readonly accountTo: Account,
    readonly amount: number
  ) {}

  execute(): void {
    const transferService = new TransferService();
    transferService.transfer(this.accountFrom, this.accountTo, this.amount);
  }
}
