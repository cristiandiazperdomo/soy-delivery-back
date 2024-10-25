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
exports.orderService = void 0;
const orderModel_1 = require("../model/orderModel");
const orderValidation_1 = require("../validations/orderValidation");
exports.orderService = {
    createOrder: (order) => {
        const result = orderValidation_1.orderSchema.safeParse({
            id: crypto.randomUUID().slice(0, 8),
            order,
        });
        if (!result.success) {
            throw new Error(`Validation Error: ${result.error.message}`);
        }
        orderModel_1.OrderModel.createOrder(result.data);
    },
    getAllOrders: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield orderModel_1.OrderModel.getAllOrders();
    }),
    filterByStatus: (desiredStatus) => __awaiter(void 0, void 0, void 0, function* () {
        return yield orderModel_1.OrderModel.filterByStatus(desiredStatus);
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield orderModel_1.OrderModel.filterById(id);
    }),
};
