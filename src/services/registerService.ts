import {NewUser} from "../interfaces/userInteface";
import {UserModel} from "../model/userModel";
import {UserWithPasswordSchema} from "../validations/userValidation";

export const registerService = {
    createUser: (user: NewUser) => {
        const result = UserWithPasswordSchema.safeParse({
            ...user,
            id: crypto.randomUUID(),
        });

        if (!result.success) {
            throw new Error(`Validation error: ${result.error.message}`);
        }

        UserModel.create(result.data);
    },
};
