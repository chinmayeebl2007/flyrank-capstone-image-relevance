import { Router } from "express";

import ReviewController from "../controllers/ReviewController.js";

const router = Router();

router.post("/approve", ReviewController.approve);

router.post("/reject", ReviewController.reject);

router.get("/history", ReviewController.history);

export default router;