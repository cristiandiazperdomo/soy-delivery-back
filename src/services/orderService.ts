import {OrderWithoutId} from "../interfaces/orderInterface";
import {OrderModel} from "../model/orderModel";
import {orderSchema} from "../validations/orderValidation";

export const orderService = {
    createOrder: (order: OrderWithoutId) => {
        const result = orderSchema.safeParse({
            id: crypto.randomUUID().slice(0, 8),
            order,
        });

        if (!result.success) {
            throw new Error(`Validation Error: ${result.error.message}`);
        }

        OrderModel.createOrder(result.data);
    },
    getAllOrders: async () => {
        return await OrderModel.getAllOrders();
    },
    filterByStatus: async (desiredStatus: string) => {
        return await OrderModel.filterByStatus(desiredStatus);
    },
    findById: async (id: string) => {
        return await OrderModel.filterById(id);
    },
};
