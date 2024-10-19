import {NewUser} from "../interfaces/userInteface";
import {UserModel} from "../model/userModel";
import {UserSchema} from "../validations/userValidation";

export const registerService = {
    createUser: (user: NewUser) => {
        const {name, email, password, role} = user;
        const result = UserSchema.safeParse({
            id: crypto.randomUUID(),
            name,
            email,
            password,
            role,
        });

        if (!result.success) {
            throw new Error(`Validation error: ${result.error.message}`);
        }

        UserModel.create(result.data);
    },
};
