import { OrderStatus } from "../enums/order.enum";

export interface OrderItem {
    _id: string;
    itemQuantity: number;
    itemPrice: number;
    productId: string;
    orderId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Order {
    _id: string;
    orderTotal: number;
    orderDelivery: number;
    orderStatus: OrderStatus;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    // From aggrigations
    orderItems: OrderItem[];
}

export interface OrderItemInput {
    itemQuantity: number;
    itemPrice: number;
    productId: string;
    orderId?: string;
}

export interface OrderInquiry {
    page: number;
    limit: number;
    orderStatus: OrderStatus;
}

export interface OrderUpdateInput {
    orderId: string;
    orderStatus: OrderStatus;
}