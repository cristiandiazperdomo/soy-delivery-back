import {Request, Response} from "express";
import {loginService} from "../services/loginService";
import {jwtService} from "../services/jwtService";

export const loginController = {
    login: async (req: Request, res: Response) => {
        try {
            const passwordIsValid: boolean = await loginService.login(req.body);

            if (passwordIsValid) {
                res.send(jwtService.createToken(req.body.email));
                return;
            }
            res.status(400).send("The password is incorrect");
        } catch (error) {
            if (error instanceof Error) res.status(400).send(error.message);
        }
    },
};
