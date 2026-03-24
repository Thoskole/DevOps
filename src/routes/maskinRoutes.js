import { Router } from "express";
import * as maskinController from "../controllers/maskinController.js";

const router = Router();

router.post("/regMaskin", maskinController.regMaskin);

router.post("/listMaskin", maskinController.listMaskin);

export default router;