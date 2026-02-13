import type { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
    console.log(req.body);
    res.json({ message: "Register endpoint working" });
};
