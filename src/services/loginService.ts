import {LoginRequest} from "../interfaces/loginInterface";
import {userService} from "./userService";

import bcrypt from "bcrypt";

export const loginService = {
    login: async (loginRequest: LoginRequest): Promise<boolean> => {
        const {email, password} = loginRequest;

        const user = await userService.findByEmail(email);

        if (
            user &&
            typeof user.email === "string" &&
            typeof user.password === "string"
        ) {
            return await bcrypt.compare(password, user.password);
        }

        throw new Error("This email doesn't exist");
    },
};
