"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
exports.Status = [
    "pendent",
    "in preparation",
    "delivered",
    "cancelled",
];
// EXPLICACÓN DE PORQUE OMIT ES UN TYPE Y NO UNA INTERFACE.
/* La manipulación avanzada de tipos (como omitir propiedades) requiere el uso de type.
ESTO SE DEBE a que LAS INTERFACES NO SOPORTAN TRANSFORMACIONES DINÁMICAS. */
