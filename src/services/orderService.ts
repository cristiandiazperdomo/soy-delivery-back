import {Order, OrderWithoutId} from "../interfaces/orderInterface";
import {OrderModel} from "../model/orderModel";
import {orderSchema} from "../validations/orderValidation";

export const orderService = {
    createOrder: (order: OrderWithoutId) => {
        const {
            productName,
            customerId,
            providerId,
            driverId,
            price,
            payMethod,
            address,
            status,
        } = order;

        const newOrder = {
            id: crypto.randomUUID().slice(0, 6),
            productName,
            customerId,
            providerId,
            driverId,
            price,
            payMethod,
            status,
            address,
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
    filterByStatus: (desiredStatus: string) => {
        const allOrders = OrderModel.getAllOrders();

        return allOrders.filter((order) =>
            desiredStatus.includes(order.status)
        );
    },
    findById: (id: string) => {
        const allOrders = OrderModel.getAllOrders();

        return allOrders.find((order) => order.id === id.toLowerCase());
    },
};
