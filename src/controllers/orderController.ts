import {Request, Response} from "express";
import {orderService} from "../services/orderService";

export const orderController = {
    getAllOrders: async (_req: Request, res: Response) => {
        res.json(await orderService.getAllOrders());
    },
    createOrder: (req: Request, res: Response) => {
        try {
            orderService.createOrder(req.body);
            res.json(req.body);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message);
            }
        }
    },
    filterByStatus: async (req: Request, res: Response) => {
        try {
            res.json(await orderService.filterByStatus(req.params.status));
        } catch (error) {
            if (error instanceof Error) res.send(error);
        }
    },
    findById: async (req: Request, res: Response) => {
        try {
            res.json(await orderService.findById(req.params.id));
        } catch (error) {
            if (error instanceof Error) res.send(error);
        }
    },
};
