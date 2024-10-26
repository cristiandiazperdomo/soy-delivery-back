import {NextFunction, Response} from "express";
import {AuthenticatedRequest, JwtError} from "../interfaces/jwt";
import {jwtService} from "../services/jwtService";
import {TokenExpiredError} from "jsonwebtoken";

export const authMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const authorizationHeader = req.headers.authorization;

    const jwtError: JwtError = {
        success: false,
        message: "",
    };

    const token = authorizationHeader?.replace("Bearer ", "");

    if (
        !authorizationHeader ||
        !authorizationHeader.startsWith("Bearer ") ||
        !token
    ) {
        (jwtError.message =
            "Invalid Authorization header: Missing 'Bearer' or undefined"),
            res.status(401).json(jwtError);
        return;
    }

    try {
        const decoded = jwtService.getUserFromToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        if (error instanceof Error) {
            jwtError.message = error.name + ": " + error.message;
            if (error instanceof TokenExpiredError) {
                (jwtError.message += " " + error.expiredAt.toLocaleString()),
                    res.status(401).send(jwtError);
            } else {
                res.status(400).json(jwtError);
            }
        }
    }
};
