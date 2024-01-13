import { Account } from "@domain/entities/Account";

export class TransferService {
  transfer(accountFrom: Account, accountTo: Account, amount: number) {
    this.validTransfer(accountFrom, amount);
    accountFrom.debit(amount);
    accountTo.credit(amount);
  }

  validTransfer(accountFrom: Account, amount: number) {
    const accountFromBalance = accountFrom.getBalance();
    if (accountFromBalance < amount) {
      throw new Error("money insuficienty to transfer");
    }
  }
}
