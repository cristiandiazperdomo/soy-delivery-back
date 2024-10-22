import {User} from "../interfaces/userInteface";
import bcrypt from "bcrypt";
let users: User[] = [
    {
        id: "d227a3a3-484a-4e90-b621-781b5d8928b5",
        name: "cristian",
        address: "Praza Iván, 78, 3º",
        role: "business",
        email: "cristian@gmail.com",
        password: "123456",
    },
    {
        id: "a07ef452-9080-4059-81b1-ce809fb743a4",
        name: "danubio",
        address: "Avenida Ander, 5, 24º B",
        role: "dealer",
        email: "danubio@gmail.com",
        password: "123456",
    },
];

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