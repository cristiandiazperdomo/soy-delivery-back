import {RowDataPacket} from "mysql2";
import {pool} from "../connection";
import {Customer, UserWithPassword} from "../interfaces/userInteface";
import bcrypt from "bcrypt";

export const UserModel = {
    getAll: async () => {
        const [rows] = await pool.query("SELECT id, name, email FROM user;");
        return rows;
    },
    getAllUsersByRole: async (role: string) => {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT id, name, email FROM user WHERE role = ?;",
            role
        );

        return rows;
    },
    findByEmail: async (email: string) => {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT id, name, email FROM user WHERE email = ?;",
            email
        );

        return rows[0];
    },
    findUserByEmailWithPassword: async (email: string) => {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT email, password FROM user WHERE email = ?;",
            email
        );

        return rows[0];
    },
    findById: async (id: string) => {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT id, name, email FROM user WHERE id = ?;",
            id
        );

        return rows[0];
    },
    create: async (user: UserWithPassword | Customer) => {
        const sql =
            "INSERT INTO user (id, name, address, email, phoneNumber, role, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
        if (user.role === "customer") {
            await pool.execute(sql, [
                user.id,
                user.name,
                user.address,
                user.email,
                null,
                user.role,
                null,
            ]);
        } else {
            await bcrypt.hash(user.password, 10, (error, hash) => {
                if (error) throw new Error(error.message);

                const values = [
                    user.id,
                    user.name,
                    user.address ? user.address : null,
                    user.email,
                    null,
                    user.role,
                    hash,
                ];

                pool.execute(sql, values);
            });
        }
    },
};
