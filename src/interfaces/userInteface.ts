export const Roles = ["admin", "dealer", "business", "customer"] as const;

/* as const: tipo literal inmutable - PORQUE SON READ-ONLY */

/* UN TIPADO LITERAL SIGNIFICA QUE SE RESTRINGEN LOS VALORES POSIBLES */

export interface User {
    id: string;
    name: string;
    address?: string;
    email: string;
    role: (typeof Roles)[number]; // number le dice que puede acceder a cada una de las posiciones
    password: string;
}

export type NewUser = Omit<User, "id">;
export type NonSensitiveUserInfo = Omit<User, "password">;
