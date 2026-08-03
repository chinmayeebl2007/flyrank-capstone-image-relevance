import { Router } from "express";

import ImageMetadataController from "../controllers/ImageMetadataController.js";

const router = Router();

router.get("/", ImageMetadataController.getAll);

router.get("/:imageId", ImageMetadataController.getByImageId);

export default router;