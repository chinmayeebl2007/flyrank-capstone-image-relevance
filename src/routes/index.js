import { Router } from "express";

import imageRoutes from "./imageRoutes.js";
import blogRoutes from "./blogRoutes.js";
import metadataRoutes from "./metadataRoutes.js";
import matchingRoutes from "./matchingRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import backgroundJobRoutes from "./backgroundJobRoutes.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Image Understanding & Content Matching Engine API",
    version: "1.0.0",
    status: "Running",
  });
});

router.use("/images", imageRoutes);
router.use("/posts", blogRoutes);
router.use("/metadata", metadataRoutes);
router.use("/match", matchingRoutes);
router.use("/review", reviewRoutes);
router.use("/jobs", backgroundJobRoutes);

export default router;