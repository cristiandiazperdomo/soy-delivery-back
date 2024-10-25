import {RowDataPacket} from "mysql2";
import {pool} from "../connection";
import {Order} from "../interfaces/orderInterface";

export const OrderModel = {
    createOrder: async (order: Order) => {
        const sql =
            "INSERT INTO `order` (id, productName, customerId, providerId, driverId, payMethod, price, status, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";

        pool.execute(sql, [
            order.id,
            order.productName,
            order.customerId,
            order.providerId,
            order.driverId,
            order.payMethod,
            order.price,
            order.status,
            order.address,
        ]);
    },
    getAllOrders: async () => {
        const [rows] = await pool.query(
            `SELECT
                o.id,
                o.productName,
                o.price,
                o.payMethod,
                o.address,
                o.status,
                provider.name AS providerName, 
                driver.name AS driverName,
                customer.name AS customerName
            FROM ` +
                "`order`" +
                ` AS o 
                LEFT JOIN user provider
                    ON o.providerId = provider.id
                LEFT JOIN user customer
                    ON o.customerId = customer.id
                LEFT JOIN user driver
                    ON o.driverId = driver.id
                ;`
        );
        return rows;
    },
    filterById: async (id: string) => {
        const [rows] = await pool.query<RowDataPacket[]>(
            `SELECT
                o.id,
                o.productName,
                o.price,
                o.payMethod,
                o.address,
                o.status,
                provider.name AS providerName, 
                driver.name AS driverName,
                customer.name AS customerName
            FROM ` +
                "`order`" +
                ` AS o 
            LEFT JOIN 
                user AS provider
                    ON o.providerId = provider.id 
            LEFT JOIN 
                user AS driver 
                    ON o.driverId = driver.id 
            LEFT JOIN 
                user AS customer
                    ON o.customerId = customer.id 
            WHERE 
                o.id = ?;`,
            [id]
        );

        return rows[0];
    },
    filterByStatus: async (desiredStatus: string) => {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM `order` WHERE status = ?;",
            [desiredStatus]
        );

        return rows;
    },
};
