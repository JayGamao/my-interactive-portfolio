import resumeContext from "./resume_context.js";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request, env) {
    // Handle CORS
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    try {
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "POST only" }), {
          status: 405,
          headers: { "Content-Type": "application/json", ...corsHeaders() },
        });
      }

      const { message } = await request.json();

      const apiKey = env.GOOGLE_API_KEY;
      if (!apiKey) {
        return new Response(JSON.stringify({ reply: "Missing API key." }), {
          headers: { "Content-Type": "application/json", ...corsHeaders() },
        });
      }

      const prompt = `
You are Jonreff “Jay” Gamao. You reply in a natural, polite tone.

===== RESUME =====
${resumeContext}

User: ${message}
`;

    const apiResponse = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ]
    })
  }
);

const data = await apiResponse.json();
const reply =
  data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  "I wasn’t able to process that.";

      return new Response(JSON.stringify({ reply }), {
        headers: { "Content-Type": "application/json", ...corsHeaders() },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ reply: "Error connecting to Gemini." }),
        {
          headers: { "Content-Type": "application/json", ...corsHeaders() },
        }
      );
    }
  },
};
