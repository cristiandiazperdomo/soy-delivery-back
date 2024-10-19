import {LoginRequest} from "../interfaces/loginInterface";
import {userService} from "./userService";

import bcrypt from "bcrypt";

export const loginService = {
    login: (loginRequest: LoginRequest): Promise<boolean> => {
        const {email, password} = loginRequest;

        const user = userService.findByEmail(email);

        if (user === undefined) throw new Error("This email doesn't exist");

        return bcrypt.compare(password, user.password);
    },
};
