import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "PromptCraft AI Backend Running 🚀",
  });
});

// Enhance Prompt + Generate Image
app.post("/enhance", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required.",
      });
    }

    // STEP 1 - Enhance Prompt
    const geminiResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert AI prompt engineer.

Convert the user's simple idea into a professional AI image generation prompt.

Rules:
- Preserve the original intent.
- Add composition.
- Add lighting.
- Add camera angle.
- Add artistic style.
- Add color palette.
- Add ultra realistic quality descriptors.
- Return ONLY the prompt.

User Input:
${prompt}
`,
    });

    const enhancedPrompt = geminiResponse.text;

    console.log("Enhanced Prompt Generated ✅");

    // STEP 2 - Pollinations Image
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      enhancedPrompt
    )}?model=flux&width=1024&height=1024&enhance=true`;

    res.json({
      enhancedPrompt,
      imageUrl,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});