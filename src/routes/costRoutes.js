import { Router } from "express";

import AICostController from "../controllers/AICostController.js";

const router = Router();

router.get(
  "/",
  AICostController.getLogs
);

export default router;