import { v4 as uuid } from "uuid";

import AICostLog from "../models/AICostLog.js";

class AICostService {
  static async log({
    serviceName,
    operation,
    tokensUsed = 0,
    estimatedCost = 0,
  }) {
    return await AICostLog.create({
      id: uuid(),
      serviceName,
      operation,
      tokensUsed,
      estimatedCost,
    });
  }

  static async getAll() {
    return await AICostLog.findAll();
  }
}

export default AICostService;