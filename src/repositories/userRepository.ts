import { pool } from "../config/db.js";

export interface User {
    id: number
    name: string
    email: string
    password: string
    created_at: Date
}

export const findByEmail = async (email: string): Promise<User | null> => {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );

    if (result.rows.length === 0) return null;

    return result.rows[0];
}

export const createUser = async (name: string, email: string, password: string): Promise<User> => {
    const result = await pool.query(
        `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
        [name, email, password]
    );

    return result.rows[0];
};
