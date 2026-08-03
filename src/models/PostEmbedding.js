import pool from "../config/database.js";

class PostEmbedding {
  static async create(data) {
    const result = await pool.query(
      `
      INSERT INTO post_embeddings (
        id,
        post_id,
        embedding
      )
      VALUES ($1,$2,$3)
      RETURNING *;
      `,
      [
        data.id,
        data.postId,
        data.embedding,
      ]
    );

    return result.rows[0];
  }

  static async findByPostId(postId) {
    const result = await pool.query(
      `
      SELECT *
      FROM post_embeddings
      WHERE post_id = $1;
      `,
      [postId]
    );

    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM post_embeddings;
    `);

    return result.rows;
  }
}

export default PostEmbedding;