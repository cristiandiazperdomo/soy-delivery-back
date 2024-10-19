import {User} from "../interfaces/userInteface";
import bcrypt from "bcrypt";
let users: User[] = [];

export const UserModel = {
    getAll: () => users,
    findByEmail: (email: string): User | undefined =>
        users.find((user) => user.email === email),
    create: (user: User) => {
        bcrypt.hash(user.password, 10, (_error, hash) => {
            users.push({
                ...user,
                password: hash,
            });
        });
    },
};
