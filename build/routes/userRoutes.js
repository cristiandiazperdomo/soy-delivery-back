"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", userController_1.userController.getAllUsers);
router.get("/:id", userController_1.userController.findById);
router.get("/email/:email", userController_1.userController.findByEmail);
exports.default = router;
