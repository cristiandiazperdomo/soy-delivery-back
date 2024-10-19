"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userModel_1 = require("../model/userModel");
exports.userService = {
    getAllUser: () => {
        const allUsers = userModel_1.UserModel.getAll();
        if (allUsers.length === 0)
            throw new Error("No users");
        return allUsers;
    },
    findByEmail: (email) => {
        return userModel_1.UserModel.findByEmail(email);
    },
};
