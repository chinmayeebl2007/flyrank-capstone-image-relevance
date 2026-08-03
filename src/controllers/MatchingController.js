import MatchingService from "../services/MatchingService.js";

class MatchingController {
  static async findBestMatch(req, res) {
    try {
      const result = await MatchingService.findBestMatch(
        req.params.postId
      );

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default MatchingController;