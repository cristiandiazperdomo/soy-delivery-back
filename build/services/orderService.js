"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const orderModel_1 = require("../model/orderModel");
const orderValidation_1 = require("../validations/orderValidation");
exports.orderService = {
    createOrder: (order) => {
        const { name, customerName, address, status } = order;
        const newOrder = {
            id: crypto.randomUUID(),
            name,
            customerName,
            address,
            status,
        };
        const result = orderValidation_1.orderSchema.safeParse(newOrder);
        if (!result.success) {
            throw new Error(`Validation Error: ${result.error.message}`);
        }
        orderModel_1.OrderModel.createOrder(result.data);
    },
    getAllOrders: () => {
        return orderModel_1.OrderModel.getAllOrders();
    },
};
