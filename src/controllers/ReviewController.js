import ReviewService from "../services/ReviewService.js";

class ReviewController {
  static async approve(req, res) {
    try {
      const review = await ReviewService.approve(
        req.body.suggestionId,
        req.body.reviewerNotes
      );

      return res.status(200).json({
        success: true,
        data: review,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async reject(req, res) {
    try {
      const review = await ReviewService.reject(
        req.body.suggestionId,
        req.body.reviewerNotes
      );

      return res.status(200).json({
        success: true,
        data: review,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async history(req, res) {
    try {
      const reviews = await ReviewService.history();

      return res.status(200).json({
        success: true,
        count: reviews.length,
        data: reviews,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default ReviewController;