import {userController} from "../controllers/userController";
import express from "express";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createCustomer);
router.get("/:id", userController.findById);
router.get("/email/:email", userController.findByEmail);
router.get("/role/:role", userController.getAllUsersByRole);

export default router;
