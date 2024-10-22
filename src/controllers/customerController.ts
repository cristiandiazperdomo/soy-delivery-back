import {Request, Response} from "express";
import {customerService} from "../services/customerService";

export const customerController = {
    getAllCustomers: (_req: Request, res: Response) => {
        res.send(customerService.getAllCustomers());
    },
    createCustomer: (req: Request, res: Response) => {
        try {
            customerService.createCustomer(req.body);
        } catch (error) {
            if (error instanceof Error) throw new Error(error.message);
        }

        res.status(201).send(req.body);
    },
};
