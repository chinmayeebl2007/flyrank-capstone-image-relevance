import pool from "../config/database.js";

class ImageMetadata {
  static async create(metadata) {
    const result = await pool.query(
      `
      INSERT INTO image_metadata (
        id,
        image_id,
        subject,
        category,
        attributes,
        caption,
        confidence
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *;
      `,
      [
        metadata.id,
        metadata.imageId,
        metadata.subject,
        metadata.category,
        metadata.attributes,
        metadata.caption,
        metadata.confidence,
      ]
    );

    return result.rows[0];
  }

  static async findByImageId(imageId) {
    const result = await pool.query(
      `
      SELECT *
      FROM image_metadata
      WHERE image_id = $1;
      `,
      [imageId]
    );

    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM image_metadata
      ORDER BY created_at DESC;
    `);

    return result.rows;
  }
}

export default ImageMetadata;