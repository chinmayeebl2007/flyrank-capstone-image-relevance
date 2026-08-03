import BackgroundJobService from "../services/BackgroundJobService.js";

class BackgroundJobController {
  static async processImages(req, res) {
    try {
      const result = await BackgroundJobService.processImages();

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

  static async status(req, res) {
    try {
      const result = await BackgroundJobService.status();

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

export default BackgroundJobController;