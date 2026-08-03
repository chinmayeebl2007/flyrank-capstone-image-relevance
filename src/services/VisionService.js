import fs from "fs";

import ai from "../config/gemini.js";
import imagePrompt from "../prompts/imagePrompt.js";
import imageMetadataSchema from "../schemas/imageMetadataSchema.js";
import AICostService from "./AICostService.js";

class VisionService {
  static async analyzeImage(imagePath) {
    const imageBytes = fs.readFileSync(imagePath);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: imageBytes.toString("base64"),
          },
        },
        imagePrompt,
      ],
    });

    await AICostService.log({
      serviceName: "Gemini Vision",
      operation: "Image Analysis",
      tokensUsed: response.usageMetadata?.totalTokenCount || 0,
      estimatedCost: 0,
    });

    const json = JSON.parse(response.text);

    return imageMetadataSchema.parse(json);
  }
}

export default VisionService;