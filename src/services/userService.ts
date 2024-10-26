import {CustomerWithoutId} from "../interfaces/userInteface";
import {UserModel} from "../model/userModel";
import {CustomerSchema} from "../validations/userValidation";

export const userService = {
    createCustomer: async (customer: CustomerWithoutId) => {
        const newCustomer = {
            ...customer,
            id: crypto.randomUUID(),
        };

        const result = CustomerSchema.safeParse(newCustomer);

        if (!result.success) {
            throw new Error("Validation error: " + result.error.message);
        }

        UserModel.create(result.data);
    },
    getAllUsersByRole: async (role: string) => {
        return await UserModel.getAllUsersByRole(role);
    },
    getAllUser: async () => {
        const allUsers = await UserModel.getAll();
        if (!allUsers) throw new Error("No users");

        return allUsers;
    },
    findByEmail: (email: string) => {
        return UserModel.findByEmail(email);
    },
    findUserByEmailWithPassword: (email: string) => {
        return UserModel.findUserByEmailWithPassword(email);
    },
    findById: (id: string) => {
        return UserModel.findById(id);
    },
};
