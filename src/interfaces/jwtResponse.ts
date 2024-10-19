import {JwtPayload} from "jsonwebtoken";

export interface JwtResponse {
    token: string;
    info: JwtPayload;
}
