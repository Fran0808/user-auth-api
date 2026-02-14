import type { Request, Response } from "express";
import { registerUser } from "../services/authServices.js";
import { loginUser } from "../services/authServices.js";

export const register = async (req: Request, res: Response) => {
    try {

        if (!req.body) {
            return res.status(400).json({
                message: "No data sent",
            });
        }

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const user = await registerUser(name, email, password);

        res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (error: any) {
        console.error("Error in register controller:", error);

        if (error.message === "User already exists") {
            return res.status(409).json({
                message: error.message,
            });
        }

        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const result = await loginUser(email, password);

        res.status(200).json(result);

    } catch (error: any) {
        console.error("Error in login controller:", error);

        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

export const getProfile = async (req: Request, res: Response) => {
    const user = (req as any).user;

    return res.status(200).json({
        message: "Profile data fetched successfully",
        user
    });
}