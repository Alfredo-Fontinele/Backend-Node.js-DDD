import { Account } from "@domain/entities/Account";

export interface AccountRepository {
  save(account: Account): void;
  get(accountDocument: string): Account;
}
