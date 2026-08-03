import ImageProcessingQueue from "../jobs/ImageProcessingQueue.js";

class BackgroundJobService {
  static async processImages() {
    return {
      success: true,
      message: "Background worker is running.",
      ...ImageProcessingQueue.status(),
    };
  }

  static async status() {
    return ImageProcessingQueue.status();
  }
}

export default BackgroundJobService;