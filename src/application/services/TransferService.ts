import { Account } from "@domain/entities/Account";

export class TransferService {
  transfer(accountFrom: Account, accountTo: Account, amount: number) {
    accountFrom.debit(amount);
    accountTo.credit(amount);
  }
}
