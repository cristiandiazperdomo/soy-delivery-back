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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const connection_1 = require("../connection");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.UserModel = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection_1.pool.query("SELECT * FROM user;");
        return rows;
    }),
    getAllUsersByRole: (role) => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection_1.pool.query("SELECT * FROM user WHERE role = ?;", role);
        return rows;
    }),
    findByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection_1.pool.query("SELECT * FROM user WHERE email = ?;", email);
        return rows[0];
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection_1.pool.query("SELECT * FROM user WHERE id = ?;", id);
        return rows[0];
    }),
    create: (user) => __awaiter(void 0, void 0, void 0, function* () {
        const sql = "INSERT INTO user (id, name, address, email, phoneNumber, role, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
        if (user.role === "customer") {
            yield connection_1.pool.execute(sql, [
                user.id,
                user.name,
                user.address,
                user.email,
                null,
                user.role,
                null,
            ]);
        }
        else {
            yield bcrypt_1.default.hash(user.password, 10, (error, hash) => {
                if (error)
                    throw new Error(error.message);
                const values = [
                    user.id,
                    user.name,
                    user.address,
                    user.email,
                    null,
                    user.role,
                    hash,
                ];
                connection_1.pool.execute(sql, values);
            });
        }
    }),
};
