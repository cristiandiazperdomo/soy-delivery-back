import express from "express";
import {jwtController} from "../../controllers/jwtController";
import {authMiddleware} from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/valid-token", authMiddleware, jwtController.getUserFromToken);

export default router;
