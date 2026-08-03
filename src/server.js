import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import logger from "./config/logger.js";
import pool from "./config/database.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await pool.query("SELECT NOW()");

    logger.info("Connected to PostgreSQL");

    app.listen(PORT, () => {
      logger.info(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

startServer();