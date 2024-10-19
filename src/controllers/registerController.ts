import {Request, Response} from "express";
import {registerService} from "../services/registerService";
import {jwtService} from "../services/jwtService";

export const registerController = {
    createUser: (req: Request, res: Response) => {
        try {
            registerService.createUser(req.body);
        } catch (error) {
            if (error instanceof Error) res.status(400).send(error.message);
            return;
        }

        res.status(201).json(jwtService.createToken(req.body.email));
    },
};
