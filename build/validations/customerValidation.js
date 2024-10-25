"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerSchema = void 0;
const zod_1 = require("zod");
exports.customerSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string(),
    address: zod_1.z.string().min(4, "Address must have at least 4 characters"),
    phoneNumber: zod_1.z.string().min(6, "Address must have at least 4 characters"),
});
