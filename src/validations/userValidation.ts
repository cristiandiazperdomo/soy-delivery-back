import {z} from "zod";
import {Roles} from "../interfaces/userInteface";

export const UserSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, "Name cannot be empty"),
    email: z.string().email("Email is not valid"),
    role: z.enum(Roles),
    password: z.string().min(6, "Password must contain at least 6 characters"),
});
