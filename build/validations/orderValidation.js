"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const zod_1 = require("zod");
const orderInterface_1 = require("../interfaces/orderInterface");
exports.orderSchema = zod_1.z.object({
    id: zod_1.z.string(),
    productName: zod_1.z
        .string()
        .min(2, "Product name must be longer than 1 character"),
    customerId: zod_1.z.string().uuid(),
    providerId: zod_1.z.string().uuid(),
    driverId: zod_1.z.string().uuid(),
    status: zod_1.z.enum(orderInterface_1.Status),
    price: zod_1.z.number(),
    payMethod: zod_1.z.enum(orderInterface_1.PayMethod),
    address: zod_1.z.string().min(5, "Address must be longer than 4 characters"),
});
