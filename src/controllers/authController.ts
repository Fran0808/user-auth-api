import type { Request, Response } from "express";

export const register = (req: Request, res: Response) => {

    if (!req.body) {
        return res.status(400).json({
            message: "No data sent"
        });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    res.json({
        message: "Register endpoint working",
        data: { name, email }
    });
};

