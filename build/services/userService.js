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
exports.userService = void 0;
const userModel_1 = require("../model/userModel");
const userValidation_1 = require("../validations/userValidation");
exports.userService = {
    createCustomer: (customer) => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = Object.assign(Object.assign({}, customer), { id: crypto.randomUUID() });
        const result = userValidation_1.CustomerSchema.safeParse(newCustomer);
        if (!result.success) {
            throw new Error("Validation error: " + result.error.message);
        }
        userModel_1.UserModel.create(result.data);
    }),
    getAllUsersByRole: (role) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.UserModel.getAllUsersByRole(role);
    }),
    getAllUser: () => __awaiter(void 0, void 0, void 0, function* () {
        const allUsers = yield userModel_1.UserModel.getAll();
        if (!allUsers)
            throw new Error("No users");
        return allUsers;
    }),
    findByEmail: (email) => {
        return userModel_1.UserModel.findByEmail(email);
    },
    findById: (id) => {
        return userModel_1.UserModel.findById(id);
    },
};
