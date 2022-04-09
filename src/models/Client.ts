export class Client {
  readonly id?: string;
  readonly name: string;
  readonly email: string;
  readonly address: string;
  readonly password?: string;

  constructor({ id, address, email, name, password }: Client) {
    this.id = id;
    this.address = address;
    this.email = email;
    this.name = name;
    this.password = password;
  }
}
