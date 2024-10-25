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
exports.OrderModel = void 0;
const connection_1 = require("../connection");
exports.OrderModel = {
    createOrder: (order) => __awaiter(void 0, void 0, void 0, function* () {
        const sql = "INSERT INTO `order` (id, productName, customerId, providerId, driverId, payMethod, price, status, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
        connection_1.pool.execute(sql, [
            order.id,
            order.productName,
            order.customerId,
            order.providerId,
            order.driverId,
            order.payMethod,
            order.price,
            order.status,
            order.address,
        ]);
    }),
    getAllOrders: () => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection_1.pool.query("SELECT * FROM `order`;");
        return rows;
    }),
    filterById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection_1.pool.query(`SELECT
                o.id,
                o.productName,
                o.price,
                o.payMethod,
                o.address,
                o.status,
                provider.name AS providerName, 
                driver.name AS driverName,
                customer.name AS customerName
            FROM ` +
            "`order`" +
            ` AS o 
            LEFT JOIN 
                user AS provider
                    ON o.providerId = provider.id 
            LEFT JOIN 
                user AS driver 
                    ON o.driverId = driver.id 
            LEFT JOIN 
                customer
                    ON o.customerId = customer.id 
            WHERE 
                o.id = ?;`, [id]);
        return rows[0];
    }),
    filterByStatus: (desiredStatus) => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection_1.pool.query("SELECT * FROM `order` WHERE status = ?;", [desiredStatus]);
        return rows;
    }),
};
