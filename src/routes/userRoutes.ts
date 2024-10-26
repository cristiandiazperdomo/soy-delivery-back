import {userController} from "../controllers/userController";
import express from "express";
import {authMiddleware} from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, userController.getAllUsers);
router.post("/", authMiddleware, userController.createCustomer);
router.get("/:id", authMiddleware, userController.findById);
router.get("/email/:email", authMiddleware, userController.findByEmail);
router.get("/role/:role", authMiddleware, userController.getAllUsersByRole);

export default router;
