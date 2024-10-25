import {z} from "zod";
import {
    RolesWithPassword,
    RolesWithoutPassword,
} from "../interfaces/userInteface";

export const UserWithPasswordSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, "Name cannot be empty"),
    email: z.string().email("Email is not valid"),
    address: z.string(),
    role: z.nativeEnum(RolesWithPassword),
    password: z.string().min(6, "Password must contain at least 6 characters"),
});

export const CustomerSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, "Name cannot be empty"),
    email: z.string().email("Email is not valid"),
    address: z.string(),
    role: z.nativeEnum(RolesWithoutPassword),
});
