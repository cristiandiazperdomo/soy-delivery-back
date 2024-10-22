export const Status = [
    "waiting",
    "pending",
    "in progress",
    "delivered",
    "cancelled",
    "refund",
    "reported",
] as const;

export const PayMethod = ["cash", "card"] as const;

export interface Order {
    id: string;
    productName: string;
    customerId: string;
    providerId: string;
    driverId: string;
    status: (typeof Status)[number];
    price: number;
    payMethod: (typeof PayMethod)[number];
    address: string;
}

export type OrderWithoutId = Omit<Order, "id">;

// EXPLICACÓN DE PORQUE OMIT ES UN TYPE Y NO UNA INTERFACE.
// LAS INTERFACES NO SOPORTAN TRANSFORMACIONES DINÁMICAS.
