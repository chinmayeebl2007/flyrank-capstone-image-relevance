import pool from "../config/database.js";

class BlogPost {
  static async create(post) {
    const result = await pool.query(
      `
      INSERT INTO blog_posts (
        id,
        title,
        content
      )
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
      [
        post.id,
        post.title,
        post.content,
      ]
    );

    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM blog_posts
      ORDER BY created_at DESC;
    `);

    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query(
      `
      SELECT *
      FROM blog_posts
      WHERE id = $1;
      `,
      [id]
    );

    return result.rows[0];
  }
}

export default BlogPost;