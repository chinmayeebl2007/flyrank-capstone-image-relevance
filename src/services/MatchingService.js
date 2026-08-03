import ImageEmbeddingService from "./ImageEmbeddingService.js";
import PostEmbeddingService from "./PostEmbeddingService.js";
import ImageMetadataService from "./ImageMetadataService.js";

import cosineSimilarity from "../utils/cosineSimilarity.js";

class MatchingService {
  static async findBestMatch(postId) {
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

    return bestMatch;
  }
}

export default MatchingService;