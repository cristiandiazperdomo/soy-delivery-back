"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = exports.UserWithPasswordSchema = void 0;
const zod_1 = require("zod");
const userInteface_1 = require("../interfaces/userInteface");
exports.UserWithPasswordSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(1, "Name cannot be empty"),
    email: zod_1.z.string().email("Email is not valid"),
    address: zod_1.z.string(),
    role: zod_1.z.nativeEnum(userInteface_1.RolesWithPassword),
    password: zod_1.z.string().min(6, "Password must contain at least 6 characters"),
});
exports.CustomerSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(1, "Name cannot be empty"),
    email: zod_1.z.string().email("Email is not valid"),
    address: zod_1.z.string(),
    role: zod_1.z.nativeEnum(userInteface_1.RolesWithoutPassword),
});
