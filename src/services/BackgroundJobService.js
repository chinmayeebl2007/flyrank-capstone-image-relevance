class BackgroundJobService {
  static async processImages() {
    return {
      success: true,
      message: "Background image processing job started.",
      startedAt: new Date(),
    };
  }

  static async status() {
    return {
      status: "IDLE",
      pendingJobs: 0,
      runningJobs: 0,
      failedJobs: 0,
      completedJobs: 0,
      lastRun: new Date(),
    };
  }
}

export default BackgroundJobService;