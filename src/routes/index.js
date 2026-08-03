import { Router } from "express";

import imageRoutes from "./imageRoutes.js";
import blogRoutes from "./blogRoutes.js";

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

export default router;