import {Order, OrderWithoutId} from "../interfaces/orderInterface";
import {OrderModel} from "../model/orderModel";
import {orderSchema} from "../validations/orderValidation";

export const orderService = {
    createOrder: (order: OrderWithoutId) => {
        const {name, customerName, address, status} = order;

        const newOrder = {
            id: crypto.randomUUID(),
            name,
            customerName,
            address,
            status,
        };

        const result = orderSchema.safeParse(newOrder);

        if (!result.success) {
            throw new Error(`Validation Error: ${result.error.message}`);
        }

        OrderModel.createOrder(result.data);
    },
    getAllOrders: (): Order[] => {
        return OrderModel.getAllOrders();
    },
};
