import {CustomerModel} from "../model/customerModel";
import {CustomerWithoutId} from "../interfaces/customerInterface";
import {customerSchema} from "../validations/customerValidation";

export const customerService = {
    getAllCustomers: () => {
        return CustomerModel.getAllCustomers();
    },
    createCustomer: (customer: CustomerWithoutId) => {
        const result = customerSchema.safeParse(customer);

        if (!result.success) {
            throw new Error("Validation error: " + result.error.message);
        }

        CustomerModel.create(result.data);
    },
};
