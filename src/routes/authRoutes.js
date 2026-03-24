import { Router } from "express";
import * as authController from "../controllers/authController.js";

const router = Router();

router.post("/registrer", authController.registrer);
router.post("/logginn", authController.logginn);

export default router;