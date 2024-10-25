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
exports.registerService = void 0;
const userModel_1 = require("../model/userModel");
const userValidation_1 = require("../validations/userValidation");
exports.registerService = {
    createUser: (user) => __awaiter(void 0, void 0, void 0, function* () {
        const result = userValidation_1.UserWithPasswordSchema.safeParse(Object.assign(Object.assign({}, user), { id: crypto.randomUUID() }));
        if (!result.success) {
            throw new Error(`Validation error: ${result.error.message}`);
        }
        yield userModel_1.UserModel.create(result.data);
    }),
};
