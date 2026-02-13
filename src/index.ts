import express from "express";
import { config } from "./config/env.js"

const app = express();
const PORT = config.port;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API User Auth OK");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
