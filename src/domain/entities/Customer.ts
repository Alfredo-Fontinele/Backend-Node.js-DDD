import { CustomerBuilder } from "@domain/builders/CustomerBuilder";
import { Account } from "./Account";
import { Entity } from "./_Entity";

export class Customer extends Entity {
  private name: string;
  private email: string;
  private address?: string;
  private phoneNumber?: string;
  private accounts: Account[];

  constructor(customerBuilder: CustomerBuilder) {
    super();
    this.name = customerBuilder.name;
    this.email = customerBuilder.email;
    this.address = customerBuilder.address;
    this.phoneNumber = customerBuilder.phoneNumber;
  }
}
