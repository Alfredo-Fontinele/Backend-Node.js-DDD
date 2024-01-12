import { Transaction } from "@domain/entities/Transaction";
import { AccountBuilder } from "../builders/AccountBuilder";

export class Account {
  private bank?: string;
  private branch?: string;
  private account?: string;
  document: string;
  private transactions: Transaction[];

  constructor(accountBuilder: AccountBuilder) {
    this.bank = accountBuilder.bank;
    this.branch = accountBuilder.branch;
    this.account = accountBuilder.account;
    this.document = accountBuilder.document;
    this.transactions = [];
  }

  credit(amount: number) {
    this.transactions.push(new Transaction("credit", amount));
  }

  debit(amount: number) {
    this.transactions.push(new Transaction("debit", amount));
  }

  getBalance() {
    return this.transactions.reduce(
      (acc, transaction) =>
        transaction.type === "credit"
          ? (acc += transaction.amount)
          : (acc -= transaction.amount),
      0
    );
  }
}
