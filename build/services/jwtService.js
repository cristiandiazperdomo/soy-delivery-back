"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtService = exports.secretSignature = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
exports.secretSignature = "mymostsecurepasswordisthisone";
exports.jwtService = {
    createToken: (email) => {
        const token = jsonwebtoken_1.default.sign({ data: { email } }, exports.secretSignature, {
            algorithm: "HS256",
            expiresIn: "1h",
        });
        const issuedAt = Math.floor(Date.now() / 1000);
        const ONEHOURSINSECONDS = 3600;
        return {
            token,
            info: {
                data: {
                    email,
                },
                iat: issuedAt,
                exp: issuedAt + ONEHOURSINSECONDS,
            },
        };
    },
    getUserFromToken: (token) => {
        let emailAndTokenInfo = {
            token,
            info: {
                data: {
                    email: "",
                },
                iat: 0,
                exp: 0,
            },
        };
        jsonwebtoken_1.default.verify(token, exports.secretSignature, (error, decoded) => {
            if (error && error instanceof Error) {
                if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
                    throw new Error(error.message);
                }
                else if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                    throw new Error(error.message +
                        ", expiredAt: " +
                        new Date(error.expiredAt));
                }
                else {
                    throw new Error("Error desconocido durante la verificación del token.");
                }
            }
            if (decoded != undefined && typeof decoded != "string")
                emailAndTokenInfo.info = decoded;
        });
        console.log("emailAndTokenInfo", emailAndTokenInfo);
        return emailAndTokenInfo;
    },
};
