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
exports.CustomerModel = void 0;
const connection_1 = require("../connection");
exports.CustomerModel = {
    getAllCustomers: () => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection_1.pool.query("SELECT * FROM customer;");
        return rows;
    }),
    create: (customer) => __awaiter(void 0, void 0, void 0, function* () {
        const sql = "INSERT INTO customer (id, name, address, phoneNumber) VALUES (?, ?, ?, ?)";
        const arr = [
            customer.id,
            customer.name,
            customer.address,
            customer.phoneNumber,
        ];
        connection_1.pool.execute(sql, arr);
    }),
};
// const minutes = 5 * (60 * 1000);
// let counter = 0;
// const idInterval = setTimeout(() => {
//     customerService.createCustomer({
//         name: NAMES[counter],
//         address: "Avenida siempre viva 287",
//         phoneNumber: "464 23 423",
//     });
//     counter++;
//     if (counter === NAMES.length) clearTimeout(idInterval);
// }, minutes);
