import { Router } from "express";

import BlogPostController from "../controllers/BlogPostController.js";

const router = Router();

router.post(
  "/",
  BlogPostController.createPost
);

router.get(
  "/",
  BlogPostController.getAllPosts
);

router.get(
  "/:id",
  BlogPostController.getPostById
);

export default router;