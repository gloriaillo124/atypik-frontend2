import { UserModel } from "./user.models";

export interface AuthModel {
    status: string;
    message: string;
    user?: UserModel;
}

export interface AuthEntity {
    email: string;
    password: string;
}