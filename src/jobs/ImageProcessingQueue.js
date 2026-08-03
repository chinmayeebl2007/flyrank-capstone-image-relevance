import VisionService from "../services/VisionService.js";
import ImageMetadataService from "../services/ImageMetadataService.js";
import ImageEmbeddingService from "../services/ImageEmbeddingService.js";
import Image from "../models/Image.js";

class ImageProcessingQueue {
  constructor() {
    this.queue = [];
    this.running = false;

    this.stats = {
      pending: 0,
      running: 0,
      completed: 0,
      failed: 0,
      retries: 0,
      lastRun: null,
    };
  }

  add(image) {
    this.queue.push({
      image,
      attempts: 0,
    });

    this.stats.pending = this.queue.length;

    this.process();
  }

  async process() {
    if (this.running) return;

    this.running = true;

    while (this.queue.length > 0) {
      const job = this.queue.shift();

      this.stats.pending = this.queue.length;
      this.stats.running = 1;

      try {
        const metadata = await VisionService.analyzeImage(
          job.image.filepath
        );

        await ImageMetadataService.save(
          job.image.id,
          metadata
        );

        await ImageEmbeddingService.create(
          job.image.id,
          metadata.caption
        );

        await Image.updateStatus(
          job.image.id,
          "COMPLETED"
        );

        this.stats.completed++;

      } catch (error) {

        if (job.attempts < 2) {

          job.attempts++;

          this.stats.retries++;

          this.queue.push(job);

        } else {

          await Image.updateStatus(
            job.image.id,
            "FAILED"
          );

          this.stats.failed++;
        }
      }

      this.stats.running = 0;
      this.stats.lastRun = new Date();
    }

    this.running = false;
  }

  status() {
    return {
      status: this.running ? "RUNNING" : "IDLE",
      pendingJobs: this.stats.pending,
      runningJobs: this.stats.running,
      completedJobs: this.stats.completed,
      failedJobs: this.stats.failed,
      retries: this.stats.retries,
      lastRun: this.stats.lastRun,
    };
  }
}

export default new ImageProcessingQueue();