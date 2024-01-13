import { Command } from "./Command";

export class TransferCommand implements Command {
  operation = "transfer";

  constructor(
    readonly accountFromDocument: string,
    readonly accountToDocument: string,
    readonly amount: number
  ) {}
}
