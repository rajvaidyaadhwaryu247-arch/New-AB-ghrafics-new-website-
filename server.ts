import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// List of official AB Graphics services to offer
const AVAILABLE_SERVICES = [
  "Graphic Design", "Logo Design", "Poster Design", "Banner Design", "Branding",
  "Social Media Design", "Reel Editing", "Instagram Growth", "Facebook Management",
  "Meta Ads Management", "Google Ads Setup", "Google Business Profile Setup",
  "WhatsApp Business Setup", "WhatsApp Automation", "Lead Generation", "Business Growth Strategy"
];

// Lazy-loaded Gemini AI client helper
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. AI Advisor Analysis Route (Server-side Gemini call)
app.post("/api/advisor", async (req, res) => {
  try {
    const {
      businessName,
      businessType,
      city,
      instagram,
      budget,
      currentMethod,
      goal,
      monthlyCustomers
    } = req.body;

    if (!businessName || !businessType || !city || !goal) {
      return res.status(400).json({ error: "Missing required business parameters (Business Name, Business Type, City, and Main Goal are required)." });
    }

    const hasApiKey = !!process.env.GEMINI_API_KEY;

    if (!hasApiKey) {
      console.log("No GEMINI_API_KEY found, returning premium rule-based analysis");
      
      const suggestedServices = [];
      if (goal.toLowerCase().includes("lead") || goal.toLowerCase().includes("sale")) {
        suggestedServices.push("Lead Generation", "Meta Ads Management", "Business Growth Strategy");
      } else if (goal.toLowerCase().includes("brand") || goal.toLowerCase().includes("logo")) {
        suggestedServices.push("Branding", "Logo Design", "Social Media Design");
      } else {
        suggestedServices.push("Instagram Growth", "Social Media Design", "Reel Editing");
      }

      return res.json({
        brandingScore: 68,
        marketingScore: 55,
        leadGenScore: 62,
        localVisibilityScore: 48,
        overallScore: 58,
        suggestions: [
          `Upgrade the social media brand identity of '${businessName}' immediately to appeal to premium clients in ${city}.`,
          `Set up CRM WhatsApp automation to streamline inquiries with instant auto-responses instead of answering manually.`,
          `Run regional high-conversion meta ads targeting a monthly budget of ${budget} using visual-hook design patterns.`,
          `Optimize your Google Business Profile listing and local SEO to attract local ${city} customers looking for ${businessType} services.`
        ],
        recommendedServices: suggestedServices,
        reportText: `Prepared for: ${businessName} in ${city}
        
Your ${businessType} business currently stands at a crucial growth inflection point. To reach your target profile of ${monthlyCustomers || "high-intent"} monthly customers, establishing immediate brand consistency is essential. 

Based on your main goal of "${goal}", we recommend starting with high-contrast, premium layouts for Instagram reels to boost organic traffic, accompanied by optimized lead-generation creatives. Elevate your presence to professional agency level with AB Graphics to build trust, reduce customer acquisition cost, and systematically scale conversion output.`
      });
    }

    // Initialize Gemini Client
    const ai = getGeminiClient();

    const prompt = `You are the chief Executive AI Brand Consultant at 'AB Graphics' (India's premier high-end graphic design & performance marketing agency).
Develop an immersive, professional, and rigorous brand growth audit report based on these core parameters:
- Business Name: ${businessName}
- Business Type: ${businessType}
- Target City/Market: ${city}
- Instagram Username: @${instagram || "Not Provided"}
- Monthly Marketing Budget Scale: ${budget}
- Current Client Acquisition Method: ${currentMethod || "Not Provided"}
- Main Dynamic Growth Goal: ${goal}
- Monthly Target Customers: ${monthlyCustomers || "Not Provided"}

Based on these business specifications, perform a precise diagnostic and return exactly a JSON object containing:
1. brandingScore (integer from 30 to 95): representing current visual authority.
2. marketingScore (integer from 30 to 95): representing digital advertising sophistication.
3. leadGenScore (integer from 30 to 95): representing customer capture/retention conversion funnel health.
4. localVisibilityScore (integer from 30 to 95): representing search presence / regional geographic trust.
5. overallScore (integer from 30 to 95): representing their absolute overall growth posture.
6. suggestions (array of exactly 4 strings): direct, actionable graphic design, video branding, and lead generation suggestions addressing their goal.
7. recommendedServices (array of exactly 3 strings): selected from ${AVAILABLE_SERVICES.join(", ")}.
8. reportText (string, ~150-200 words): A comprehensive growth strategy audit that references their city, business name, goal, monthly budget, and explains why AB Graphics specialized deliverables will help them win.

Return strictly JSON matching the required schema. No markdown wrapping.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: [
            "brandingScore",
            "marketingScore",
            "leadGenScore",
            "localVisibilityScore",
            "overallScore",
            "suggestions",
            "recommendedServices",
            "reportText"
          ],
          properties: {
            brandingScore: { type: Type.INTEGER },
            marketingScore: { type: Type.INTEGER },
            leadGenScore: { type: Type.INTEGER },
            localVisibilityScore: { type: Type.INTEGER },
            overallScore: { type: Type.INTEGER },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Exactly 4 distinct, custom technical/visual recommendations."
            },
            recommendedServices: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Exactly 3 recommended services from AB Graphics services list."
            },
            reportText: {
              type: Type.STRING,
              description: "Detailed, personalized premium business growth report text."
            }
          }
        },
        temperature: 0.85,
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response received from Gemini");
    }

    const plan = JSON.parse(resultText.trim());
    return res.json(plan);

  } catch (err: any) {
    console.error("Gemini Advisor API Error:", err);
    return res.status(500).json({
      error: "Encountered an issue analyzing your brand roadmap. Please try again or reach out on WhatsApp directly!",
      details: err.message
    });
  }
});

// Serve frontend static builds in production, or hook dev server in development
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AB Graphics server listening at http://localhost:${PORT}`);
  });
}

startServer();
