import { IProduct } from "../../types";

export class CartModel {
  protected cart: IProduct[];

  constructor() {
    this.cart = [];
  }

  getItems(): IProduct[] {
    return this.cart;
  }

  addItem(product: IProduct): void {
    if (!this.hasItem(product.id)) {
      this.cart.push(product);
    }
  }

  deleteItem(product: IProduct): void {
    this.cart = this.cart.filter(item => item.id !== product.id);
  }

  clear(): void {
    this.cart = [];
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + (item.price || 0), 0);
  }

  getCount(): number {
    return this.cart.length;
  }

  hasItem(id: string): boolean {
    return this.cart.some(item => item.id === id);
  }
}