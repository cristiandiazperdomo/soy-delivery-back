import {UserModel} from "../model/userModel";

export const userService = {
    getAllUser: () => {
        const allUsers = UserModel.getAll();
        if (allUsers.length === 0) throw new Error("No users");

        return allUsers;
    },
    findByEmail: (email: string) => {
        return UserModel.findByEmail(email);
    },
};
