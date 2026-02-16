import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "The name must have at least 3 characters"),
    email: z.email("Invalid email format"),
    password: z.string().min(6, "The password must have at least 6 characters"),
});
export const loginSchema = z.object({
    email: z.email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
});
