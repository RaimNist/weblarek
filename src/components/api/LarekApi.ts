import { IApi, IOrderRequest, IOrderResponse, IProduct } from "../../types";

export class LarekApi {
    protected api: IApi;
    
    constructor(api: IApi) {
        this.api = api;
    }

    async getProducts(): Promise<IProduct[]> {
        return this.api.get<IProduct[]>('/product');
    }

    async postOrder(order: IOrderRequest): Promise<IOrderResponse> {
        return this.api.post<IOrderResponse>('/order', order);
    }
}
