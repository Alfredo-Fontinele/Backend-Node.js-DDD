type TransactionType = "credit" | "debit";

export class Transaction {
  constructor(readonly type: TransactionType, readonly amount: number) {}
}
