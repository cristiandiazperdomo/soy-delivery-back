"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const orderService_1 = require("../services/orderService");
exports.orderController = {
    getAllOrders: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield orderService_1.orderService.getAllOrders());
    }),
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
    filterByStatus: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.json(yield orderService_1.orderService.filterByStatus(req.params.status));
        }
        catch (error) {
            if (error instanceof Error)
                res.send(error);
        }
    }),
    findById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.json(yield orderService_1.orderService.findById(req.params.id));
        }
        catch (error) {
            if (error instanceof Error)
                res.send(error);
        }
    }),
};
