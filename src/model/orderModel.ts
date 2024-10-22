import {Order} from "../interfaces/orderInterface";

let orders: Order[] = [
    {
        id: "fe52540f",
        productName: "Apple Macbook M1 Pro",
        customerId: "a37c743d-7b7e-4e30-998e-4d85070cb943",
        providerId: "d227a3a3-484a-4e90-b621-781b5d8928b5",
        driverId: "a07ef452-9080-4059-81b1-ce809fb743a4",
        payMethod: "cash",
        price: 1200,
        status: "waiting",
        address: "Ronda Biel, 89, Entre suelo 2º",
    },
    {
        id: "a1b2c3d4",
        productName: "Samsung Galaxy S21",
        customerId: "a37c743d-7b7e-4e30-998e-4d85070cb943",
        providerId: "d227a3a3-484a-4e90-b621-781b5d8928b5",
        driverId: "a07ef452-9080-4059-81b1-ce809fb743a4",
        payMethod: "card",
        price: 799,
        status: "delivered",
        address: "Calle Mayor, 123, 4º A",
    },
    {
        id: "c1d2e3f4",
        productName: "Sony WH-1000XM4",
        customerId: "a37c743d-7b7e-4e30-998e-4d85070cb943",
        providerId: "d227a3a3-484a-4e90-b621-781b5d8928b5",
        driverId: "a07ef452-9080-4059-81b1-ce809fb743a4",
        payMethod: "cash",
        price: 349,
        status: "in progress",
        address: "Avenida de la Paz, 15, Bajo",
    },
    {
        id: "d1e2f3g4",
        productName: "Dell XPS 13",
        customerId: "a37c743d-7b7e-4e30-998e-4d85070cb943",
        providerId: "d227a3a3-484a-4e90-b621-781b5d8928b5",
        driverId: "a07ef452-9080-4059-81b1-ce809fb743a4",
        payMethod: "card",
        price: 999,
        status: "cancelled",
        address: "Calle San Fernando, 22, 1º B",
    },
    {
        id: "e1f2g3h4",
        productName: "Google Pixel 5",
        customerId: "a37c743d-7b7e-4e30-998e-4d85070cb943",
        providerId: "d227a3a3-484a-4e90-b621-781b5d8928b5",
        driverId: "a07ef452-9080-4059-81b1-ce809fb743a4",
        payMethod: "cash",
        price: 699,
        status: "refund",
        address: "Plaza del Sol, 3, 3º C",
    },
    {
        id: "f1g2h3i4",
        productName: "Apple AirPods Pro",
        customerId: "a37c743d-7b7e-4e30-998e-4d85070cb943",
        providerId: "d227a3a3-484a-4e90-b621-781b5d8928b5",
        driverId: "a07ef452-9080-4059-81b1-ce809fb743a4",
        payMethod: "card",
        price: 249,
        status: "reported",
        address: "Calle del Comercio, 45, 2º D",
    },
    {
        id: "g1h2i3j4",
        productName: "OnePlus 9",
        customerId: "a37c743d-7b7e-4e30-998e-4d85070cb943",
        providerId: "d227a3a3-484a-4e90-b621-781b5d8928b5",
        driverId: "a07ef452-9080-4059-81b1-ce809fb743a4",
        payMethod: "cash",
        price: 699,
        status: "pending",
        address: "Calle del Río, 10, 1º A",
    },
];

export const OrderModel = {
    createOrder: (order: Order) => {
        orders.push(order);
    },
    getAllOrders: () => orders,
};
