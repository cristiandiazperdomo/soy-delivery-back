import {Request, Response} from "express";
import {jwtService} from "../services/jwtService";

export const jwtController = {
    getUserFromToken: (req: Request, res: Response) => {
        const token = req.headers.authorization?.replace("Bearer ", "");

        try {
            if (token === undefined) {
                throw new Error("Token is undefined");
            }

            res.json(jwtService.getUserFromToken(token));
        } catch (error) {
            if (error instanceof Error) res.status(400).send(error.message);
        }
    },
};
