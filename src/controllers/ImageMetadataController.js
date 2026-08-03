import ImageMetadataService from "../services/ImageMetadataService.js";

class ImageMetadataController {
  static async getAll(req, res) {
    try {
      const metadata = await ImageMetadataService.getAll();

      return res.status(200).json({
        success: true,
        count: metadata.length,
        data: metadata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getByImageId(req, res) {
    try {
      const metadata = await ImageMetadataService.getByImageId(
        req.params.imageId
      );

      if (!metadata) {
        return res.status(404).json({
          success: false,
          message: "Metadata not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: metadata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default ImageMetadataController;