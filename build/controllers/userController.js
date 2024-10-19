"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../services/userService");
exports.userController = {
    getAllUsers: (_req, res) => {
        try {
            res.json(userService_1.userService.getAllUser());
        }
        catch (error) {
            if (error instanceof Error)
                res.send(error.message);
        }
    },
};
