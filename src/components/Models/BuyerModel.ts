import { IBuyer, TPayment } from "../../types";

export class BuyerModel {
  protected payment: TPayment | null;
  protected email: string;
  protected phone: string;
  protected address: string;

  constructor() {
    this.payment = null;
    this.email = "";
    this.phone = "";
    this.address = "";
  }

  setPayment(payment: TPayment): void {
    this.payment = payment;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setPhone(phone: string): void {
    this.phone = phone;
  }
  setAddress(address: string): void {
    this.address = address;
  }

  getData(): IBuyer {
    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address
    };
  }

  clearData(): void {
    this.payment = null;
    this.email = "";
    this.phone = "";
    this.address = "";
  }

  validatePayment(): { isValid: boolean, error?: string } {
    if (!this.payment) {
      return { isValid: false, error: "Выберите способ оплаты" };
    }
    return { isValid: true };
  }
  validateAddress(): { isValid: boolean, error?: string } {
    if (!this.address && this.address.trim() === "") {
      return { isValid: false, error: "Введите адрес доставки" };
    }
    return { isValid: true };
  }
  validateEmail(): { isValid: boolean, error?: string } {
    if (!this.email && this.email.trim() === "") {
      return { isValid: false, error: "Введите электронную почту" };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      return { isValid: false, error: "Электронная почта заполнена некорректно" };
    }
    return { isValid: true };
  }
  validatePhone(): { isValid: boolean, error?: string } {
    if (!this.phone && this.phone.trim() === "") {
      return { isValid: false, error: "Введите номер телефона" };
    } else if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(this.phone)) {
      return { isValid: false, error: "Номер телефона заполнен некорректно" };
    }
    return { isValid: true };
  }
}