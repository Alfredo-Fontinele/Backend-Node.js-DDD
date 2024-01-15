import { Customer } from "../entities/Customer";

export class CustomerBuilder {
  name: string;
  email: string;
  address?: string;
  phoneNumber?: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setAddress(address: string) {
    this.address = address;
    return this;
  }

  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
    return this;
  }

  build() {
    const customer = new Customer(this);
    return customer;
  }
}
