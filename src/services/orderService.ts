import {OrderWithoutId} from "../interfaces/orderInterface";
import {OrderModel} from "../model/orderModel";
import {orderSchema} from "../validations/orderValidation";

export const orderService = {
    createOrder: async (order: OrderWithoutId) => {
        const result = orderSchema.safeParse({
            ...order,
            id: crypto.randomUUID().slice(0, 8),
        });

        if (!result.success) {
            throw new Error(`Validation Error: ${result.error.message}`);
        }

        await OrderModel.createOrder(result.data);
    },
    getAllOrders: async (email: string) => {
        return await OrderModel.getAllOrders(email);
    },
    filterByStatus: async (desiredStatus: string) => {
        return await OrderModel.filterByStatus(desiredStatus);
    },
    findById: async (id: string) => {
        return await OrderModel.filterById(id);
    },
};
