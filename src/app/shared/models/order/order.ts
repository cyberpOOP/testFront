import { OrderStatus } from "@shared/enums/order-status";
import { IOrderItem, IOrderItemWithProduct } from "../order-item/order-item";
import { IUser } from "../user/user";

export interface IOrder {
    id: number;
    orderItems: IOrderItem[];
}

export interface ICreateOrder {
    userEmail: string;
    orderItems: IOrderItem[];
}

export interface IUserOrder {
    id: number;
    orderItems: IOrderItemWithProduct[];
    user: IUser;
    orderStatus: OrderStatus;
}