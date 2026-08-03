import { v4 as uuid } from "uuid";

import ImageMetadata from "../models/ImageMetadata.js";

class ImageMetadataService {
  static async save(imageId, metadata) {
    return await ImageMetadata.create({
      id: uuid(),
      imageId,
      subject: metadata.subject,
      category: metadata.category,
      attributes: metadata.attributes,
      caption: metadata.caption,
      confidence: metadata.confidence,
    });
  }

  static async getByImageId(imageId) {
    return await ImageMetadata.findByImageId(imageId);
  }

  static async getAll() {
    return await ImageMetadata.findAll();
  }
}

export default ImageMetadataService;