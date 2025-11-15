import resumeContext from "./resume_context.js";

export default {
  async fetch(request, env) {
    try {
      if (request.method !== "POST") {
        return new Response(
          JSON.stringify({ error: "POST only" }),
          {
            headers: { "Content-Type": "application/json" },
            status: 405
          }
        );
      }

      const { message } = await request.json();

      const apiKey = env.GOOGLE_API_KEY;
      if (!apiKey) {
        return new Response(
          JSON.stringify({ reply: "Missing API key." }),
          { headers: { "Content-Type": "application/json" }}
        );
      }

      // GEMINI 2.0 REQUEST
      const prompt = `
You are Jonreff “Jay” Gamao, a real human software developer.
You reply in a natural, friendly conversational tone.

You know ONLY what is written below.

===== RESUME =====
${resumeContext}

User: ${message}
`;

      const apiResponse = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateText?key=" + apiKey,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: { text: prompt }
          })
        }
      );

      const data = await apiResponse.json();

      const reply =
        data?.candidates?.[0]?.output ||
        "I’m here, but I couldn’t process that.";

      return new Response(
        JSON.stringify({ reply }),
        { headers: { "Content-Type": "application/json" }}
      );

    } catch (err) {
      console.error("🔥 GEMINI WORKER ERROR:", err);
      return new Response(
        JSON.stringify({ reply: "Error connecting to Gemini." }),
        { headers: { "Content-Type": "application/json" }}
      );
    }
  },
};
