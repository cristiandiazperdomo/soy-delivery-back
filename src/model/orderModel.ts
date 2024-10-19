import {Order} from "../interfaces/orderInterface";

let orders: Order[] = [];

export const OrderModel = {
    createOrder: (order: Order) => {
        orders.push(order);
    },
    getAllOrders: () => orders,
};
