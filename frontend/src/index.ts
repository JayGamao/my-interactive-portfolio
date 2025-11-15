import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import certificates from "../src/certificates.json";
import projects from "../src/projects.json";
import resumeContext from "./resume_context";

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const systemPrompt = `
You are Jonreff Gamao's personal portfolio assistant chatbot.

You ONLY use the following context:

=== RESUME ===
${resumeContext}

=== CERTIFICATES ===
${JSON.stringify(certificates, null, 2)}

=== PROJECTS ===
${JSON.stringify(projects, null, 2)}

RULES:
- Always answer in first person (I, my experience...)
- Do not invent any information.
- Use the JSON data as truth.
- Keep answers short unless asked for detail.
`;

  const result = await model.generateContent([
    { role: "user", text: userMessage },
    { role: "system", text: systemPrompt }
  ]);

  res.json({ reply: result.response.text() });
});

app.listen(3001, () => {
  console.log("Backend server running on http://localhost:3001");
});
