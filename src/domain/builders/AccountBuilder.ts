import { Account } from "../entities/Account";

export class AccountBuilder {
  bank?: string;
  branch?: string;
  account?: string;
  document: string;

  constructor(document: string) {
    this.document = document;
  }

  setBank(bank: string) {
    this.bank = bank;
    return this;
  }

  setBranch(branch: string) {
    this.branch = branch;
    return this;
  }

  setAccount(account: string) {
    this.account = account;
    return this;
  }

  build() {
    const account = new Account(this);
    return account;
  }
}
