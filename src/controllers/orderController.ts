import {Request, Response} from "express";
import {orderService} from "../services/orderService";

export const orderController = {
    getAllOrders: (_req: Request, res: Response) => {
        res.json(orderService.getAllOrders());
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
};
