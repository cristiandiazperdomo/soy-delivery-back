"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
let users = [];
exports.UserModel = {
    getAll: () => users,
    findByEmail: (email) => users.find((user) => user.email === email),
    create: (user) => {
        bcrypt_1.default.hash(user.password, 10, (_error, hash) => {
            users.push(Object.assign(Object.assign({}, user), { password: hash }));
        });
    },
};
