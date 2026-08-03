import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Image Understanding & Content Matching Engine API",
    version: "1.0.0",
    status: "Running",
  });
});

export default router;