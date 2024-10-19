import {Request, Response} from "express";
import {userService} from "../services/userService";

export const userController = {
    getAllUsers: (_req: Request, res: Response) => {
        try {
            res.json(userService.getAllUser());
        } catch (error) {
            if (error instanceof Error) res.send(error.message);
        }
    },
};
