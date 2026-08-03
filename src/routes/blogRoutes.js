import { Router } from "express";

import upload from "../middleware/upload.js";
import ImageController from "../controllers/ImageController.js";

const router = Router();

router.post(
  "/upload",
  upload.single("image"),
  ImageController.uploadImage
);

router.get(
  "/",
  ImageController.getAllImages
);

router.get(
  "/:id",
  ImageController.getImageById
);

router.delete(
  "/:id",
  ImageController.deleteImage
);

export default router;