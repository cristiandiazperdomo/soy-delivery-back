export const Status = [
    "waiting",
    "pendent",
    "in progress",
    "delivered",
    "cancelled",
    "refund",
    "reported",
] as const;

export interface Order {
    id: string;
    customerName: string;
    name: string;
    status: (typeof Status)[number];
    address: string;
}

export type OrderWithoutId = Omit<Order, "id">;
// EXPLICACÓN DE PORQUE OMIT ES UN TYPE Y NO UNA INTERFACE.
/* La manipulación avanzada de tipos (como omitir propiedades) requiere el uso de type. 
ESTO SE DEBE a que LAS INTERFACES NO SOPORTAN TRANSFORMACIONES DINÁMICAS. */
