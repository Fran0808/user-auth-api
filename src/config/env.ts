import dotenv from "dotenv";

//Load file contents into process.env by default
dotenv.config();

function getEnvVariable(key: string): string {
    const value = process.env[key];

    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }

    return value;
}

export const config = {
    port: process.env.PORT || 3000,

    db: {
        host: getEnvVariable("DB_HOST"),
        port: Number(getEnvVariable("DB_PORT")),
        user: getEnvVariable("DB_USER"),
        password: getEnvVariable("DB_PASSWORD"),
        name: getEnvVariable("DB_NAME"),
    },

    jwt: {
        secret: getEnvVariable("JWT_SECRET"),
        expiresIn: getEnvVariable("JWT_EXPIRES_IN"),
    },

    externalApi: {
        baseUrl: getEnvVariable("EXTERNAL_API_URL"),
    },

}