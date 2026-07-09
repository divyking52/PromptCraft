import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.json({
    message: "PromptCraft AI Backend Running 🚀",
  });
});

app.post("/enhance", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert prompt engineer.

Convert the user's simple idea into a professional AI image prompt.

Rules:
- Preserve the original intent.
- Add composition details.
- Add lighting.
- Add color palette.
- Add artistic style.
- Add camera angle if relevant.
- Add quality descriptors.
- Return ONLY the enhanced prompt.

User Input:
${prompt}
      `,
    });

    res.json({
      enhancedPrompt: response.text,
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
  console.log(`Server running on ${PORT}`);
});