import pool from "../config/database.js";

class Review {
  static async create(data) {
    const result = await pool.query(
      `
      INSERT INTO reviews (
        id,
        suggestion_id,
        decision,
        reviewer_notes
      )
      VALUES ($1,$2,$3,$4)
      RETURNING *;
      `,
      [
        data.id,
        data.suggestionId,
        data.decision,
        data.reviewerNotes,
      ]
    );

    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM reviews
      ORDER BY reviewed_at DESC;
    `);

    return result.rows;
  }
}

export default Review;