"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
const userService_1 = require("./userService");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.loginService = {
    login: (loginRequest) => {
        const { email, password } = loginRequest;
        const user = userService_1.userService.findByEmail(email);
        if (user === undefined)
            throw new Error("This email doesn't exist");
        return bcrypt_1.default.compare(password, user.password);
    },
};
