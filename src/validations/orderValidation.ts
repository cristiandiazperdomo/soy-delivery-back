import {z} from "zod";
import {Status} from "../interfaces/orderInterface";

export const orderSchema = z.object({
    id: z.string().uuid(),
    customerName: z
        .string()
        .min(2, "Customer name must be longer than 1 character"),
    name: z.string().min(2, "Order name must be longer than 1 character"),
    status: z.enum(Status),
    address: z.string().min(5, "Address must be longer than 4 characters"),
});
