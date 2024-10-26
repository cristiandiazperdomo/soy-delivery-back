import {Response} from "express";
import {AuthenticatedRequest} from "../interfaces/jwt";

export const jwtController = {
    getUserFromToken: (req: AuthenticatedRequest, res: Response) => {
        res.json(req.user);
    },
};
