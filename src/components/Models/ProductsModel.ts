import { IProduct } from '../../types';

export class ProductsModel {
  protected productsList: IProduct[];
  protected selectedProduct: IProduct | null;

  constructor() {
    this.productsList = [];
    this.selectedProduct = null;
  }

  setItems(products: IProduct[]): void {
    this.productsList = products;
  }

  getItems(): IProduct[] {
    return this.productsList;
  }

  getItemById(id: string): IProduct | undefined {
    return this.productsList.find(product => product.id === id) || undefined;
  }

  setSelectedItem(product: IProduct): void {
    this.selectedProduct = product;
  }

  getSelectedItem(): IProduct | null {
    return this.selectedProduct;
  }
}