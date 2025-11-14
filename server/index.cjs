const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const resumeContext = require("./resume_context.cjs");

const app = express();
app.use(cors());
app.use(express.json());

// ⭐ Gemini API (backend only - SAFE)
const genAI = new GoogleGenerativeAI(
  "AIzaSyC2UMxT3oi2rb_EXl9adIUvItyXv6beIDw"
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

// ⭐ CHAT ENDPOINT (resume only)
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message || "";

    const systemPrompt = `
You are Jonreff Gamao's personal portfolio chatbot.

Use ONLY the following resume information to answer questions.
Do NOT invent any details.

=== RESUME CONTEXT ===
${resumeContext}

RULES:
- Answer in FIRST PERSON ("I", "my experience")
- Stay strictly within the resume context
- If the info is not in the resume, say:
  "I don't have that information in my resume yet."
- Be friendly, concise, and helpful
`;

    const fullPrompt = systemPrompt + "\nUSER: " + userMessage;

    const result = await model.generateContent(fullPrompt);

    res.json({ reply: result.response.text() });
  } catch (err) {
    console.error("🔥 BACKEND ERROR:", err);
    res.json({ reply: "Error connecting to Gemini." });
  }
});

app.listen(3001, () => {
  console.log("✅ Resume-only Gemini backend running at http://localhost:3001");
});
