import {userController} from "../controllers/userController";
import express from "express";

const router = express.Router();

router.get("/", userController.getAllUsers);

export default router;
