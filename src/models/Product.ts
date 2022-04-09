export default class Product {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly imageLink: string;

  constructor({ id, title, description, price, imageLink }: Product) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageLink = imageLink;
  }
}
