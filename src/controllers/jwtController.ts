import {Request, Response} from "express";
import {jwtService} from "../services/jwtService";
import {TokenExpiredError} from "jsonwebtoken";

export const jwtController = {
    getUserFromToken: (req: Request, res: Response) => {
        const token = req.headers.authorization?.replace("Bearer ", "");

        try {
            if (!token) {
                throw new Error("Token is undefined");
            }
            res.json(jwtService.getUserFromToken(token));
        } catch (error) {
            if (error instanceof Error) {
                let errorInfo: string = error.name + ": " + error.message;
                if (error instanceof TokenExpiredError) {
                    errorInfo += " " + error.expiredAt.toLocaleString();
                    res.status(401).send(errorInfo);
                } else {
                    res.status(400).send(errorInfo);
                }
            }
        }
    },
};
