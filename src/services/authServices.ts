import bcrypt from "bcrypt";
import { findByEmail, createUser } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";

export const registerUser = async (name: string, email: string, password: string) => {
    const existingUser = await findByEmail(email);

    if (existingUser) {
        throw new Error("User already exists");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await createUser(name, email, hashedPassword);

    const { password: _, ...userWithoutPassword } = newUser;

    return userWithoutPassword;
}

export const loginUser = async (email: string, password: string) => {
    const user = await findByEmail(email);

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

    const { password: _, ...userWithoutPassword } = user;

    return {
        message: "Login succesfully",
        token,
        user: userWithoutPassword
    };
}