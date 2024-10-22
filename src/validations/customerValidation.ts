import {z} from "zod";

export const customerSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    address: z.string().min(4, "Address must have at least 4 characters"),
    phoneNumber: z.string().min(6, "Address must have at least 4 characters"),
});
