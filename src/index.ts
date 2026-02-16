import express from "express";
import { config } from "./config/env.js"
import { pool } from "./config/db.js"
import authRoutes from "./routes/authRoutes.js";
import { apiLimiter } from "./middlewares/rateLimiter.js";

const app = express();
const PORT = config.port;

app.use(apiLimiter);
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API User Auth OK");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

pool.connect()
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB error:", err));
