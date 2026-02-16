import { Router } from "express";
import { login, register, getProfile } from "../controllers/authController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import { authLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.use(authLimiter);

router.post("/register", register);
router.post("/login", login)
router.get("/profile", authenticateToken, getProfile)
export default router;