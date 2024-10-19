"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerService = void 0;
const userModel_1 = require("../model/userModel");
const userValidation_1 = require("../validations/userValidation");
exports.registerService = {
    createUser: (user) => {
        const { name, email, password, role } = user;
        const result = userValidation_1.UserSchema.safeParse({
            id: crypto.randomUUID(),
            name,
            email,
            password,
            role,
        });
        if (!result.success) {
            throw new Error(`Validation error: ${result.error.message}`);
        }
        userModel_1.UserModel.create(result.data);
    },
};
