"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
let orders = [];
exports.OrderModel = {
    createOrder: (order) => {
        orders.push(order);
    },
    getAllOrders: () => orders,
};
