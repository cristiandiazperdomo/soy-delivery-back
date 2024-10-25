"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerService = void 0;
const userModel_1 = require("../model/userModel");
const userValidation_1 = require("../validations/userValidation");
exports.registerService = {
    createUser: (user) => {
        const result = userValidation_1.UserSchema.safeParse(Object.assign(Object.assign({}, user), { id: crypto.randomUUID() }));
        if (!result.success) {
            throw new Error(`Validation error: ${result.error.message}`);
        }
        userModel_1.UserModel.create(result.data);
    },
};
