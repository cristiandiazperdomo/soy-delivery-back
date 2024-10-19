"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const registerRoutes_1 = __importDefault(require("./routes/auth/registerRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/auth/loginRoutes"));
const jwtRoutes_1 = __importDefault(require("./routes/auth/jwtRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const allowedOrigins = ["http://localhost:5173"];
const options = {
    origin: allowedOrigins,
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(options));
app.use("/api/users", userRoutes_1.default);
app.use("/api/orders", orderRoutes_1.default);
app.use("/api/auth/register", registerRoutes_1.default);
app.use("/api/auth/login", loginRoutes_1.default);
app.use("/api/auth/jwt", jwtRoutes_1.default);
app.get("/ping", (_req, res) => {
    res.send("pong");
});
app.listen(3000, () => {
    console.log("Server is ready, PORT: " + 3000);
});
