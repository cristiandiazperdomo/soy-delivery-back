import express from "express";
import {orderController} from "../controllers/orderController";

const router = express.Router();

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/status/:status", orderController.filterByStatus);
router.get("/:id", orderController.findById);

export default router;
