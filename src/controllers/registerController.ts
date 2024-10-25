import {Request, Response} from "express";
import {registerService} from "../services/registerService";
import {jwtService} from "../services/jwtService";

export const registerController = {
    createUser: async (req: Request, res: Response) => {
        try {
            await registerService.createUser(req.body);
            res.status(201).json(await jwtService.createToken(req.body.email));
        } catch (error) {
            if (error instanceof Error) res.status(400).send(error.message);
        }
    },
};
