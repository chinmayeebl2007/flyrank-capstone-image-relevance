import ImageEmbeddingService from "./ImageEmbeddingService.js";
import PostEmbeddingService from "./PostEmbeddingService.js";
import ImageMetadataService from "./ImageMetadataService.js";
import BlogPostService from "./BlogPostService.js";
import SuggestionService from "./SuggestionService.js";

import cosineSimilarity from "../utils/cosineSimilarity.js";
import mismatchGuard from "../utils/mismatchGuard.js";

class MatchingService {
  static async findBestMatch(postId) {
    const post = await BlogPostService.getPostById(postId);

    if (!post) {
      throw new Error("Blog post not found.");
    }

    const postEmbedding = await PostEmbeddingService.getByPostId(postId);

    if (!postEmbedding) {
      throw new Error("Post embedding not found.");
    }

    const imageEmbeddings = await ImageEmbeddingService.getAll();

    let bestMatch = null;
    let highestScore = -1;

    for (const image of imageEmbeddings) {
      const score = cosineSimilarity(
        postEmbedding.embedding,
        image.embedding
      );

      if (score > highestScore) {
        highestScore = score;

        const metadata = await ImageMetadataService.getByImageId(
          image.image_id
        );

        bestMatch = {
          imageId: image.image_id,
          similarity: score,
          metadata,
        };
      }
    }

    const validation = mismatchGuard(bestMatch, post);

    if (!validation.accepted) {
      return {
        accepted: false,
        reason: validation.reason,
      };
    }

    const suggestion = await SuggestionService.create({
      postId,
      imageId: bestMatch.imageId,
      similarity: bestMatch.similarity,
      explanation: validation.reason,
      status: "PENDING",
    });

    return {
      accepted: true,
      suggestion,
      metadata: bestMatch.metadata,
      similarity: bestMatch.similarity,
    };
  }
}

export default MatchingService;