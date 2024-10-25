"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = require("mysql2/promise");
dotenv_1.default.config();
const access = {
    host: "localhost",
    user: "root",
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
};
exports.pool = (0, promise_1.createPool)(access);
