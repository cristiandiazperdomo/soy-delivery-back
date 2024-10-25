import {Request, Response} from "express";
import {userService} from "../services/userService";

export const userController = {
    getAllUsers: async (_req: Request, res: Response) => {
        try {
            res.json(await userService.getAllUser());
        } catch (error) {
            if (error instanceof Error) res.send(error.message);
        }
    },
    createCustomer: (req: Request, res: Response) => {
        try {
            userService.createCustomer(req.body);
        } catch (error) {
            if (error instanceof Error) throw new Error(error.message);
        }

        res.status(201).json(req.body);
    },
    getAllUsersByRole: async (req: Request, res: Response) => {
        res.json(await userService.getAllUsersByRole(req.params.role));
    },
    findByEmail: async (req: Request, res: Response) => {
        res.json(await userService.findByEmail(req.params.email));
    },
    findById: async (req: Request, res: Response) => {
        res.json(await userService.findById(req.params.id));
    },
};
