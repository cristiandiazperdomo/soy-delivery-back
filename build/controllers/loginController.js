"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const loginService_1 = require("../services/loginService");
const jwtService_1 = require("../services/jwtService");
exports.loginController = {
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const passwordIsValid = yield loginService_1.loginService.login(req.body);
            if (passwordIsValid) {
                res.send(jwtService_1.jwtService.createToken(req.body.email));
                return;
            }
            res.status(400).send("The password is incorrect");
        }
        catch (error) {
            if (error instanceof Error)
                res.status(400).send(error.message);
        }
    }),
};
