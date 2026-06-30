import { Queue, Worker } from "bullmq";
import IORedis from "ioredis";

const redisUrl = process.env.REDIS_URL ?? "redis://localhost:6379";

export const redisConnection = new IORedis(redisUrl, {
  maxRetriesPerRequest: null,
});

// Queue para geração de mídia (imagens, carrosséis, vídeos)
export const mediaQueue = new Queue("media-generation", {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 50 },
  },
});

// Queue para publicação nas redes sociais
export const publishQueue = new Queue("social-publish", {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 2,
    backoff: {
      type: "fixed",
      delay: 10000,
    },
  },
});

export type MediaJobData = {
  clientId: string;
  postId: string;
  type: "image" | "carousel" | "video";
  prompt: string;
  platform: "instagram" | "facebook" | "both";
};

export type PublishJobData = {
  postId: string;
  clientId: string;
  mediaUrl: string;
  caption: string;
  scheduledAt: Date;
  platform: "instagram" | "facebook" | "both";
};
