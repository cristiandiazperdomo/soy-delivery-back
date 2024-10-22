import express, {Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {ResultSetHeader} from "mysql2/promise";
import userRoutes from "./routes/userRoutes";
import orderRoutes from "./routes/orderRoutes";
import customerRoutes from "./routes/customerRoutes";
import registerRoutes from "./routes/auth/registerRoutes";
import loginRoutes from "./routes/auth/loginRoutes";
import jwtRoutes from "./routes/auth/jwtRoutes";
import {pool} from "./connection";

const app = express();
dotenv.config();

const allowedOrigins: string[] = ["http://localhost:5173"];

const options = {
    origin: allowedOrigins,
};

app.use(express.json());
app.use(cors(options));

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth/register", registerRoutes);
app.use("/api/auth/login", loginRoutes);
app.use("/api/auth/jwt", jwtRoutes);
app.use("/api/customers", customerRoutes);

app.get("/ping", async (_req: Request, res: Response) => {
    try {
        const [rows] = await pool.query<ResultSetHeader>(
            "SELECT * FROM `order` LIMIT 20;"
        );
        res.send(rows);
    } catch (error) {
        if (error instanceof Error) res.send(error.message);
    }
});

app.listen(3000, () => {
    console.log("Server is ready, PORT: " + 3000);
});
