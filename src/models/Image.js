import pool from "../config/database.js";

class Image {
  static async create(image) {
    const query = `
      INSERT INTO images (
        id,
        filename,
        filepath,
        status
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [
      image.id,
      image.filename,
      image.filepath,
      image.status,
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM images
      ORDER BY created_at DESC;
    `);

    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query(
      `
      SELECT *
      FROM images
      WHERE id = $1;
      `,
      [id]
    );

    return result.rows[0];
  }

  static async updateStatus(id, status) {
    const result = await pool.query(
      `
      UPDATE images
      SET status = $1
      WHERE id = $2
      RETURNING *;
      `,
      [status, id]
    );

    return result.rows[0];
  }

  static async delete(id) {
    await pool.query(
      `
      DELETE FROM images
      WHERE id = $1;
      `,
      [id]
    );
  }
}

export default Image;