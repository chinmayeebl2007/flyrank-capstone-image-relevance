import fs from "fs";

import ai from "../config/gemini.js";
import imagePrompt from "../prompts/imagePrompt.js";
import imageMetadataSchema from "../schemas/imageMetadataSchema.js";

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

    const json = JSON.parse(response.text);

    return imageMetadataSchema.parse(json);
  }
}

export default VisionService;