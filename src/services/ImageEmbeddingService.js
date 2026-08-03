import { v4 as uuid } from "uuid";

import EmbeddingService from "./EmbeddingService.js";
import ImageEmbedding from "../models/ImageEmbedding.js";

class ImageEmbeddingService {
  static async create(imageId, caption) {
    const embedding = await EmbeddingService.generateEmbedding(caption);

    return await ImageEmbedding.create({
      id: uuid(),
      imageId,
      embedding,
    });
  }

  static async getAll() {
    return await ImageEmbedding.findAll();
  }

  static async getByImageId(imageId) {
    return await ImageEmbedding.findByImageId(imageId);
  }
}

export default ImageEmbeddingService;