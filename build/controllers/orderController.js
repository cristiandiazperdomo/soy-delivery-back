"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const orderService_1 = require("../services/orderService");
exports.orderController = {
    getAllOrders: (_req, res) => {
        res.json(orderService_1.orderService.getAllOrders());
    },
    createOrder: (req, res) => {
        try {
            orderService_1.orderService.createOrder(req.body);
            res.json(req.body);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message);
            }
        }
    },
};
