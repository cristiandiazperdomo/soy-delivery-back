import express from "express";
import {orderController} from "../controllers/orderController";
import {authMiddleware} from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, orderController.createOrder);
router.get("/", authMiddleware, orderController.getAllOrders);
router.get("/status/:status", authMiddleware, orderController.filterByStatus);
router.get("/:id", orderController.findById);

export default router;
