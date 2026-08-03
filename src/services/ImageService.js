import { v4 as uuid } from "uuid";

import Image from "../models/Image.js";
import ImageProcessingQueue from "../jobs/ImageProcessingQueue.js";

class ImageService {
  static async uploadImage(file) {
    const image = {
      id: uuid(),
      filename: file.filename,
      filepath: file.path,
      status: "PENDING",
    };

    const savedImage = await Image.create(image);

    ImageProcessingQueue.add(savedImage);

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