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
exports.userController = void 0;
const userService_1 = require("../services/userService");
exports.userController = {
    getAllUsers: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.json(yield userService_1.userService.getAllUser());
        }
        catch (error) {
            if (error instanceof Error)
                res.send(error.message);
        }
    }),
    createCustomer: (req, res) => {
        try {
            userService_1.userService.createCustomer(req.body);
        }
        catch (error) {
            if (error instanceof Error)
                throw new Error(error.message);
        }
        res.status(201).json(req.body);
    },
    getAllUsersByRole: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield userService_1.userService.getAllUsersByRole(req.params.role));
    }),
    findByEmail: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield userService_1.userService.findByEmail(req.params.email));
    }),
    findById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield userService_1.userService.findById(req.params.id));
    }),
};
