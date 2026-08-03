import pool from "../config/database.js";

class AICostLog {
  static async create(data) {
    const result = await pool.query(
      `
      INSERT INTO ai_cost_logs (
        id,
        service_name,
        operation,
        tokens_used,
        estimated_cost
      )
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *;
      `,
      [
        data.id,
        data.serviceName,
        data.operation,
        data.tokensUsed,
        data.estimatedCost,
      ]
    );

    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM ai_cost_logs
      ORDER BY created_at DESC;
    `);

    return result.rows;
  }
}

export default AICostLog;