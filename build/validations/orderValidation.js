"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const zod_1 = require("zod");
const orderInterface_1 = require("../interfaces/orderInterface");
exports.orderSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    customerName: zod_1.z
        .string()
        .min(2, "Customer name must be longer than 1 character"),
    name: zod_1.z.string().min(2, "Order name must be longer than 1 character"),
    status: zod_1.z.enum(orderInterface_1.Status),
    address: zod_1.z.string().min(5, "Address must be longer than 4 characters"),
});
