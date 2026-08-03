import pool from "../config/database.js";

class Suggestion {
  static async create(data) {
    const result = await pool.query(
      `
      INSERT INTO suggestions (
        id,
        post_id,
        image_id,
        similarity_score,
        explanation,
        status
      )
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *;
      `,
      [
        data.id,
        data.postId,
        data.imageId,
        data.similarityScore,
        data.explanation,
        data.status,
      ]
    );

    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM suggestions
      ORDER BY created_at DESC;
    `);

    return result.rows;
  }

  static async findByPostId(postId) {
    const result = await pool.query(
      `
      SELECT *
      FROM suggestions
      WHERE post_id = $1;
      `,
      [postId]
    );

    return result.rows;
  }
}

export default Suggestion;