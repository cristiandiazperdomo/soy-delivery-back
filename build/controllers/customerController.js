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
exports.customerController = void 0;
const customerService_1 = require("../services/customerService");
exports.customerController = {
    getAllCustomers: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.send(yield customerService_1.customerService.getAllCustomers());
    }),
    createCustomer: (req, res) => {
        try {
            customerService_1.customerService.createCustomer(req.body);
        }
        catch (error) {
            if (error instanceof Error)
                throw new Error(error.message);
        }
        res.status(201).send(req.body);
    },
};
