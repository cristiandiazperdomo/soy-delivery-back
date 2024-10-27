import {Request} from "express";
import {JwtPayload} from "jsonwebtoken";

export interface JwtResponse {
    token: string;
    info: JwtPayload;
}

export interface JwtError {
    success: boolean;
    message: string;
}

export interface AuthenticatedRequest extends Request {
    user?: JwtResponse;
}
