import AICostService from "../services/AICostService.js";

class AICostController {
  static async getLogs(req, res) {
    try {
      const logs = await AICostService.getAll();

      return res.status(200).json({
        success: true,
        count: logs.length,
        data: logs,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default AICostController;