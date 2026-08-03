import { v4 as uuid } from "uuid";

import Review from "../models/Review.js";

class ReviewService {
  static async approve(suggestionId, reviewerNotes = "") {
    return await Review.create({
      id: uuid(),
      suggestionId,
      decision: "APPROVED",
      reviewerNotes,
    });
  }

  static async reject(suggestionId, reviewerNotes = "") {
    return await Review.create({
      id: uuid(),
      suggestionId,
      decision: "REJECTED",
      reviewerNotes,
    });
  }

  static async history() {
    return await Review.findAll();
  }
}

export default ReviewService;