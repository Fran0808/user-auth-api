import type { Request, Response, NextFunction } from "express";
import { registerUser } from "../services/authServices.js";
import { loginUser } from "../services/authServices.js";
import { loginSchema, registerSchema } from "../schemas/authSchema.js";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validation = registerSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: "Validation failed",
                errors: validation.error.issues
            });
        }

        const { name, email, password } = validation.data;

        const user = await registerUser(name, email, password);

        res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (error: any) {
        if (error.message === "User already exists") {
            error.status = 409;
        }
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validation = loginSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: "Login failed",
                errors: validation.error.issues
            });
        }
        const { email, password } = validation.data;

        const result = await loginUser(email, password);

        res.status(200).json(result);

    } catch (error: any) {
        if (error.message === "Invalid credentials") {
            error.status = 401;
        }
        next(error);
    }
};

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;

        res.status(200).json({
            message: "Profile data fetched successfully",
            user
        });
    } catch (error) {
        next(error);
    }
}