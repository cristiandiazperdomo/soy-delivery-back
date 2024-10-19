import express from "express";
import {jwtController} from "../../controllers/jwtController";

const router = express.Router();

router.get("/valid-token", jwtController.getUserFromToken);

export default router;
