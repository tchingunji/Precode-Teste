export default class Order {
  readonly id: string;
  readonly totalPrice: number;

  constructor({ id, totalPrice }: Order) {
    this.id = id;
    this.totalPrice = totalPrice;
  }
}
