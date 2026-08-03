import { v4 as uuid } from "uuid";

import PostEmbedding from "../models/PostEmbedding.js";
import EmbeddingService from "./EmbeddingService.js";

class PostEmbeddingService {
  static async create(post) {
    const embedding = await EmbeddingService.generateEmbedding(
      `${post.title}\n${post.content}`
    );

    return await PostEmbedding.create({
      id: uuid(),
      postId: post.id,
      embedding,
    });
  }

  static async getByPostId(postId) {
    return await PostEmbedding.findByPostId(postId);
  }
}

export default PostEmbeddingService;