import { v4 as uuid } from "uuid";

import BlogPost from "../models/BlogPost.js";
import PostEmbeddingService from "./PostEmbeddingService.js";

class BlogPostService {
  static async createPost(data) {
    const post = {
      id: uuid(),
      title: data.title,
      content: data.content,
    };

    const savedPost = await BlogPost.create(post);

    await PostEmbeddingService.create(savedPost);

    return savedPost;
  }

  static async getAllPosts() {
    return await BlogPost.findAll();
  }

  static async getPostById(id) {
    return await BlogPost.findById(id);
  }
}

export default BlogPostService;