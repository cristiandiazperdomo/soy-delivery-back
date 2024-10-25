import {z} from "zod";
import {PayMethod, Status} from "../interfaces/orderInterface";

export const orderSchema = z.object({
    id: z.string(),
    productName: z
        .string()
        .min(2, "Product name must be longer than 1 character"),
    customerId: z.string().uuid(),
    providerId: z.string().uuid(),
    driverId: z.string().uuid(),
    status: z.enum(Status),
    price: z.number(),
    payMethod: z.enum(PayMethod),
    address: z.string().min(5, "Address must be longer than 4 characters"),
});