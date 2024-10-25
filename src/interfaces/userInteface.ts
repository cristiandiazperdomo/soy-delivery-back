export enum RolesWithPassword {
    Admin = "admin",
    Dealer = "dealer",
    Business = "business",
}

export enum RolesWithoutPassword {
    Customer = "customer",
}

export interface BaseUser {
    id: string;
    name: string;
    email: string;
    address?: string;
    phoneNumber?: string;
}

export interface UserWithPassword extends BaseUser {
    role: RolesWithPassword;
    password: string;
}

export interface Customer extends BaseUser {
    role: RolesWithoutPassword;
    password?: never;
}

export type NewUser = Omit<UserWithPassword, "id">;
export type NonSensitiveUserInfo = Omit<UserWithPassword, "password">;

export type CustomerWithoutId = Omit<Customer, "id">;
