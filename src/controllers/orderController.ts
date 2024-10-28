import {Request, Response} from "express";
import {orderService} from "../services/orderService";
import {AuthenticatedRequest} from "../interfaces/jwt";

export const orderController = {
    getAllOrders: async (req: AuthenticatedRequest, res: Response) => {
        res.json(await orderService.getAllOrders(req.user?.info.data.email));
    },
    createOrder: async (req: Request, res: Response) => {
        try {
            await orderService.createOrder(req.body);
            res.send(req.body);
        } catch (error: any) {
            if (error.code === "ER_NO_REFERENCED_ROW_2") {
                res.status(400).send(
                    "The customerId, providerId, or driverId does not exist. Please verify that the entered values are correct."
                );
            } else {
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
            if (error instanceof Error) {
                if (error.message === "There is not an order with that id") {
                    res.status(404).json(error.message);
                    return;
                }
                if (error instanceof Error) res.json(error);
            }
        }
    },
};
