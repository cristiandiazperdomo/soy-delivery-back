"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayMethod = exports.Status = void 0;
exports.Status = [
    "waiting",
    "pending",
    "in progress",
    "delivered",
    "cancelled",
    "refund",
    "reported",
];
exports.PayMethod = ["cash", "card"];
// EXPLICACÓN DE PORQUE OMIT ES UN TYPE Y NO UNA INTERFACE.
// LAS INTERFACES NO SOPORTAN TRANSFORMACIONES DINÁMICAS.
