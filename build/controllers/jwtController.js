"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtController = void 0;
const jwtService_1 = require("../services/jwtService");
exports.jwtController = {
    getUserFromToken: (req, res) => {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        try {
            if (token === undefined) {
                throw new Error("Token is undefined");
            }
            res.json(jwtService_1.jwtService.getUserFromToken(token));
        }
        catch (error) {
            if (error instanceof Error)
                res.status(400).send(error.message);
        }
    },
};
