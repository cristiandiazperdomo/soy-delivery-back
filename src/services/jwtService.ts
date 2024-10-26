import jwt from "jsonwebtoken";
import {JwtResponse} from "../interfaces/jwt";

console.log(process.env.JWT_SIGNATURE);

export const jwtService = {
    createToken: (email: string): JwtResponse => {
        const token = jwt.sign(
            {data: {email}},
            process.env.JWT_SIGNATURE + "",
            {
                algorithm: "HS256",
                expiresIn: "1h",
            }
        );

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

        jwt.verify(
            token,
            process.env.JWT_SIGNATURE + "",
            (error: jwt.VerifyErrors | null, decoded) => {
                if (error && error instanceof Error) {
                    throw error;
                }

                if (decoded !== undefined && typeof decoded != "string")
                    emailAndTokenInfo.info = decoded;
            }
        );

        return emailAndTokenInfo;
    },
};
