import {Request, Response} from "express";
import {jwtService} from "../services/jwtService";
import {JsonWebTokenError, TokenExpiredError} from "jsonwebtoken";

export const jwtController = {
    getUserFromToken: (req: Request, res: Response) => {
        const token = req.headers.authorization?.replace("Bearer ", "");

        try {
            if (token === undefined) {
                throw new Error("Token is undefined");
            }
            res.json(jwtService.getUserFromToken(token));
        } catch (error) {
            if (error instanceof Error) {
                if (error instanceof TokenExpiredError) {
                    res.status(401).send(
                        error.name +
                            ": " +
                            error.message +
                            " " +
                            error.expiredAt.toLocaleString()
                    );
                } else if (error instanceof JsonWebTokenError) {
                    res.status(400).send(error.name + ": " + error.message);
                }
            }
        }
    },
};
