import ImageService from "../services/ImageService.js";

class ImageController {
  static async uploadImage(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Image file is required",
        });
      }

      const image = await ImageService.uploadImage(req.file);

      return res.status(201).json({
        success: true,
        message: "Image uploaded successfully",
        data: image,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getAllImages(req, res) {
    try {
      const images = await ImageService.getAllImages();

      return res.status(200).json({
        success: true,
        count: images.length,
        data: images,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getImageById(req, res) {
    try {
      const image = await ImageService.getImageById(req.params.id);

      if (!image) {
        return res.status(404).json({
          success: false,
          message: "Image not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: image,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteImage(req, res) {
    try {
      await ImageService.deleteImage(req.params.id);

      return res.status(200).json({
        success: true,
        message: "Image deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default ImageController;