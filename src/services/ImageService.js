import { v4 as uuid } from "uuid";

import Image from "../models/Image.js";
import VisionService from "./VisionService.js";
import ImageMetadataService from "./ImageMetadataService.js";
import ImageEmbeddingService from "./ImageEmbeddingService.js";

class ImageService {
  static async uploadImage(file) {
    const image = {
      id: uuid(),
      filename: file.filename,
      filepath: file.path,
      status: "PENDING",
    };

    const savedImage = await Image.create(image);

    try {
      const metadata = await VisionService.analyzeImage(savedImage.filepath);

      await ImageMetadataService.save(
        savedImage.id,
        metadata
      );

      await ImageEmbeddingService.create(
        savedImage.id,
        metadata.caption
      );

      await Image.updateStatus(
        savedImage.id,
        "COMPLETED"
      );

      savedImage.status = "COMPLETED";
    } catch (error) {
      console.error(error);

      await Image.updateStatus(
        savedImage.id,
        "FAILED"
      );

      savedImage.status = "FAILED";
    }

    return savedImage;
  }

  static async getAllImages() {
    return await Image.findAll();
  }

  static async getImageById(id) {
    return await Image.findById(id);
  }

  static async updateImageStatus(id, status) {
    return await Image.updateStatus(id, status);
  }

  static async deleteImage(id) {
    await Image.delete(id);
  }
}

export default ImageService;