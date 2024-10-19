import express, {Request, Response} from "express";
import userRoutes from "./routes/userRoutes";
import orderRoutes from "./routes/orderRoutes";
import registerRoutes from "./routes/auth/registerRoutes";
import loginRoutes from "./routes/auth/loginRoutes";
import jwtRoutes from "./routes/auth/jwtRoutes";
import cors from "cors";

const app = express();

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

app.get("/ping", (_req: Request, res: Response) => {
    res.send("pong");
});

app.listen(3000, () => {
    console.log("Server is ready, PORT: " + 3000);
});
