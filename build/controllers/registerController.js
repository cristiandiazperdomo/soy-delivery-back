"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const registerService_1 = require("../services/registerService");
const jwtService_1 = require("../services/jwtService");
exports.registerController = {
    createUser: (req, res) => {
        try {
            registerService_1.registerService.createUser(req.body);
            res.status(201).json(jwtService_1.jwtService.createToken(req.body.email));
        }
        catch (error) {
            if (error instanceof Error)
                res.status(400).send(error.message);
        }
    },
};
