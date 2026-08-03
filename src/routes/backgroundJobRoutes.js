import { Router } from "express";

import BackgroundJobController from "../controllers/BackgroundJobController.js";

const router = Router();

router.post(
  "/process-images",
  BackgroundJobController.processImages
);

router.get(
  "/status",
  BackgroundJobController.status
);

export default router;