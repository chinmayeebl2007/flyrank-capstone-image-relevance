import { Router } from "express";

import MatchingController from "../controllers/MatchingController.js";

const router = Router();

router.get(
  "/:postId",
  MatchingController.findBestMatch
);

export default router;