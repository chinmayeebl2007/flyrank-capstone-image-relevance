import BlogPostService from "../services/BlogPostService.js";

class BlogPostController {
  static async createPost(req, res) {
    try {
      const post = await BlogPostService.createPost(req.body);

      return res.status(201).json({
        success: true,
        message: "Blog post created successfully",
        data: post,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getAllPosts(req, res) {
    try {
      const posts = await BlogPostService.getAllPosts();

      return res.status(200).json({
        success: true,
        count: posts.length,
        data: posts,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getPostById(req, res) {
    try {
      const post = await BlogPostService.getPostById(req.params.id);

      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: post,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default BlogPostController;