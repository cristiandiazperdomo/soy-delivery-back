import dotenv from "dotenv";
import {createPool, Pool} from "mysql2/promise";
import {ConnectionOptions} from "mysql2";

dotenv.config();

const access: ConnectionOptions = {
    host: "localhost",
    user: "root",
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
};

export const pool: Pool = createPool(access);
