import pool from "../config/database.js";

class ImageEmbedding {
  static async create(data) {
    const result = await pool.query(
      `
      INSERT INTO image_embeddings (
        id,
        image_id,
        embedding
      )
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
      [
        data.id,
        data.imageId,
        data.embedding,
      ]
    );

    return result.rows[0];
  }

  static async findByImageId(imageId) {
    const result = await pool.query(
      `
      SELECT *
      FROM image_embeddings
      WHERE image_id = $1;
      `,
      [imageId]
    );

    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM image_embeddings;
    `);

    return result.rows;
  }
}

export default ImageEmbedding;