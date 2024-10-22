import {Customer} from "../interfaces/customerInterface";

let customers: Customer[] = [
    {
        id: "a37c743d-7b7e-4e30-998e-4d85070cb943",
        name: "Perdomo",
        address: "Praza Nuria, 2, Bajo 1º",
        phoneNumber: "092234234",
    },
];

export const CustomerModel = {
    getAllCustomers: () => customers,
    create: (customer: Customer) => {
        customers.push(customer);
    },
};

// const minutes = 5 * (60 * 1000);

// let counter = 0;

// const idInterval = setTimeout(() => {
//     customerService.createCustomer({
//         name: NAMES[counter],
//         address: "Avenida siempre viva 287",
//         phoneNumber: "464 23 423",
//     });

//     counter++;
//     if (counter === NAMES.length) clearTimeout(idInterval);
// }, minutes);
