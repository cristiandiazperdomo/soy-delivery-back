"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
const registerRoutes_1 = __importDefault(require("./routes/auth/registerRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/auth/loginRoutes"));
const jwtRoutes_1 = __importDefault(require("./routes/auth/jwtRoutes"));
const connection_1 = require("./connection");
const app = (0, express_1.default)();
dotenv_1.default.config();
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
app.use("/api/customers", customerRoutes_1.default);
app.get("/ping", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield connection_1.pool.query("SELECT * FROM `order` LIMIT 20;");
        res.send(rows);
    }
    catch (error) {
        if (error instanceof Error)
            res.send(error.message);
    }
}));
app.listen(3000, () => {
    console.log("Server is ready, PORT: " + 3000);
});
