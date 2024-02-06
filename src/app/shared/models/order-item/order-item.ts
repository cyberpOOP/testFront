import { IProduct } from "../product/product";

export interface IOrderItem {
    productId: number;
    quantity: number;
}

export interface IOrderItemWithProduct {
    product: IProduct;
    quantity: number;
}