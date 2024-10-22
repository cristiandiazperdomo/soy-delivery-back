import {JwtResponse} from "../interfaces/jwtResponse";
import jwt, {JsonWebTokenError, TokenExpiredError} from "jsonwebtoken";

export const secretSignature = "mymostsecurepasswordisthisone";

export const jwtService = {
    createToken: (email: string): JwtResponse => {
        const token = jwt.sign({data: {email}}, secretSignature, {
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
    getUserFromToken: (token: string): JwtResponse => {
        let emailAndTokenInfo: JwtResponse = {
            token,
            info: {
                data: {
                    email: "",
                },
                iat: 0,
                exp: 0,
            },
        };

        jwt.verify(token, secretSignature, (error: any, decoded) => {
            if (error && error instanceof Error) {
                if (error instanceof JsonWebTokenError) {
                    throw new Error(error.message);
                } else if (error instanceof TokenExpiredError) {
                    throw new Error(
                        error.message +
                            ", expiredAt: " +
                            new Date(error.expiredAt)
                    );
                } else {
                    throw new Error(
                        "Error desconocido durante la verificación del token."
                    );
                }
            }

            if (decoded != undefined && typeof decoded != "string")
                emailAndTokenInfo.info = decoded;
        });

        return emailAndTokenInfo;
    },
};
