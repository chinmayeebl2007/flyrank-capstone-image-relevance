import { v4 as uuid } from "uuid";

import Suggestion from "../models/Suggestion.js";

class SuggestionService {
  static async create(data) {
    return await Suggestion.create({
      id: uuid(),
      postId: data.postId,
      imageId: data.imageId,
      similarityScore: data.similarity,
      explanation: data.explanation,
      status: data.status,
    });
  }

  static async getAll() {
    return await Suggestion.findAll();
  }

  static async getByPostId(postId) {
    return await Suggestion.findByPostId(postId);
  }
}

export default SuggestionService;