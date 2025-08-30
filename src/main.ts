import { LarekApi } from './components/api/LarekApi';
import { BuyerModel } from './components/Models/BuyerModel';
import { CartModel } from './components/Models/CartModel';
import { ProductsModel } from './components/Models/ProductsModel';
import './scss/styles.scss';
import { apiProducts } from './utils/data';
import { Api } from './components/base/Api';
import { IApi } from './types';
import { API_URL } from './utils/constants';

const products = new ProductsModel();
products.setItems(apiProducts.items);
console.log('--- Товары ---');
console.log(products.getItems());
console.log('--- Товар по ID ---');
console.log(products.getItemById(apiProducts.items[0].id));
products.setSelectedItem(apiProducts.items[0]);
console.log('--- Выбранный товар ---');
console.log(products.getSelectedItem());

const cart = new CartModel();
const selectedProduct = products.getSelectedItem();
if (selectedProduct) {
  cart.addItem(selectedProduct);
}
console.log('--- Корзина с выбранным товаром ---');
console.log(cart.getItems());
console.log('Сумма корзины:');
console.log(cart.getTotal());
console.log('Количество товаров в корзине:');
console.log(cart.getCount());
console.log('Проверка наличия товара в корзине:');
console.log(cart.hasItem(selectedProduct ? selectedProduct.id : ''));
if (selectedProduct) {
  cart.addItem(selectedProduct);
}
console.log('--- Корзина с повторно добавленным товаром ---');
console.log(cart.getItems());
console.log('Сумма корзины:');
console.log(cart.getTotal());
console.log('Количество товаров в корзине:');
console.log(cart.getCount());
console.log('Проверка наличия товара в корзине:');
cart.addItem(products.getItems()[1]);
console.log('--- Корзина с двумя товарами ---');
console.log(cart.getItems());
console.log('Сумма корзины:');
console.log(cart.getTotal());
console.log('Количество товаров в корзине:');
console.log(cart.getCount());
console.log('Проверка наличия товара в корзине:');
console.log(cart.hasItem(products.getItems()[1] ? products.getItems()[1].id : ''));
if (selectedProduct) {
  cart.deleteItem(selectedProduct);
}
console.log('--- Корзина после удаления одного товара ---');
console.log(cart.getItems());
console.log('Сумма корзины:');
console.log(cart.getTotal());
console.log('Количество товаров в корзине:');
console.log(cart.getCount());
console.log('Проверка наличия товара в корзине:');
console.log(cart.hasItem(selectedProduct ? selectedProduct.id : ''));
cart.clear();
console.log('--- Корзина очищена ---');
console.log(cart.getItems());
console.log('Сумма корзины:');
console.log(cart.getTotal());
console.log('Количество товаров в корзине:');
console.log(cart.getCount());
console.log('Проверка наличия товара в корзине:');

const buyer = new BuyerModel();
buyer.setPayment('card');
buyer.setEmail('buyer@example.com');
buyer.setPhone('+7 (999) 123-45-67');
buyer.setAddress('Ростов-на-Дону, ул. Ленина, 1');
console.log('--- Данные покупателя ---');
console.log(buyer.getData());
console.log('--- Проверка данных покупателя ---');
console.log(buyer.validatePayment());
console.log(buyer.validateEmail());
console.log(buyer.validatePhone());
console.log(buyer.validateAddress());

buyer.clearData();

console.log('--- Данные покупателя ---');
console.log(buyer.getData());
console.log('--- Проверка данных покупателя ---');
console.log(buyer.validatePayment());
console.log(buyer.validateEmail());
console.log(buyer.validatePhone());
console.log(buyer.validateAddress());

buyer.setEmail('buyerexamplecom');
buyer.setPhone('89991234567');
console.log('--- Данные покупателя ---');
console.log(buyer.getData());
console.log('--- Проверка данных покупателя ---');
console.log(buyer.validatePayment());
console.log(buyer.validateEmail());
console.log(buyer.validatePhone());
console.log(buyer.validateAddress());

const api: IApi = new Api(API_URL);
const larekApi = new LarekApi(api);
try {
  const productsList = await larekApi.getProducts();
  products.setItems(productsList);
} catch (error) {
  console.error('Ошибка при получении товаров:', error);
}
console.log('--- Товары с сервера ---');
console.log(products.getItems());
