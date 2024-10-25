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
exports.customerService = void 0;
const customerModel_1 = require("../model/customerModel");
const customerValidation_1 = require("../validations/customerValidation");
exports.customerService = {
    getAllCustomers: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield customerModel_1.CustomerModel.getAllCustomers();
    }),
    createCustomer: (customer) => {
        const result = customerValidation_1.customerSchema.safeParse(Object.assign(Object.assign({}, customer), { id: crypto.randomUUID() }));
        if (!result.success) {
            throw new Error("Validation error: " + result.error.message);
        }
        customerModel_1.CustomerModel.create(result.data);
    },
};
