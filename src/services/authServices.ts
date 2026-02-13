import bcrypt from "bcrypt";
import { findByEmail, createUser } from "../repositories/userRepository.js";

export const registerUser = async (name: string, email: string, password: string) => {
    const existingUser = await findByEmail(email);

    if (existingUser) {
        throw new Error("User already exists");
    }

    const salRounds = 10;
    const hashedPassword = await bcrypt.hash(password, salRounds);

    const newUser = await createUser(name, email, hashedPassword);

    const { password: _, ...userWithoutPassword } = newUser;

    return userWithoutPassword;
}
