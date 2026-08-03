import { v4 as uuid } from "uuid";
import BlogPost from "../models/BlogPost.js";

class BlogPostService {
  static async createPost(data) {
    const post = {
      id: uuid(),
      title: data.title,
      content: data.content,
    };

    return await BlogPost.create(post);
  }

  static async getAllPosts() {
    return await BlogPost.findAll();
  }

  static async getPostById(id) {
    return await BlogPost.findById(id);
  }
}

export default BlogPostService;