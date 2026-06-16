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
      console.log("No GEMINI_API_KEY found, returning premium rule-based AI consultant analysis");
      
      const pUpper = (budget || '').toUpperCase();
      let recommendedPackage = "Growth Package";
      if (pUpper.includes("STARTER") || pUpper.includes("10K")) {
        recommendedPackage = "Starter Package";
      } else if (pUpper.includes("PREMIUM") || pUpper.includes("75K")) {
        recommendedPackage = "Premium Package";
      }

      const recommendedServices = [];
      const gLower = goal.toLowerCase();
      if (gLower.includes("lead") || gLower.includes("sale") || gLower.includes("customer")) {
        recommendedServices.push("Lead Generation", "Meta Ads Management", "WhatsApp Automation");
      } else if (gLower.includes("brand") || gLower.includes("logo") || gLower.includes("authority")) {
        recommendedServices.push("Branding", "Logo Design", "Graphic Design");
      } else if (gLower.includes("reel") || gLower.includes("instagram") || gLower.includes("traffic")) {
        recommendedServices.push("Instagram Growth", "Reel Editing", "Social Media Design");
      } else {
        recommendedServices.push("Google Business Profile Setup", "Lead Generation", "Poster Design");
      }

      const responseJSON = {
        businessAnalysis: `For ${businessName}, operating in the competitive ${city} ${businessType} landscape, achieving your target of ${monthlyCustomers || "high-intent monthly clients"} requires a radical shift from legacy organic reach to high-authority visual design and systematic digital funnel strategy. Your current main focus is "${goal}", which requires immediate visual asset harmonization to build genuine market trust. Without conversion-optimized design elements, traditional advertising spend faces severe friction.`,
        marketingProblems: [
          `Lack of consistent high-end luxury visual identity across customer-facing touchpoints.`,
          `Friction in lead tracking and manual call-to-action systems, resulting in leaked prospects.`,
          `Organic search invisibility in ${city} compared to regional directory aggregates.`
        ],
        growthOpportunities: [
          `Leveraging high-retention 9:16 vertical video formats (Instagram Reels) with dynamic motion callouts to trigger viral distribution.`,
          `Implementing region-targeted Meta and Google search campaigns coupled with custom high-converting WhatsApp lead funnels.`,
          `Optimizing Google Local Pack map ranking to capture immediate demand from close-proximity buyers.`
        ],
        recommendedActions: [
          `Overhaul your core logo, branding style guidelines, and high-contrast signage assets.`,
          `Deploy an automated WhatsApp CRM sequence to provide 2-second initial response times.`,
          `Allocate dynamic budget scales to local search keywords to dominate immediate regional intents.`
        ],
        recommendedServices: recommendedServices,
        recommendedPackage: recommendedPackage,
        roadmap30Days: `Phase 1 (Branding & Identity): Completely synchronize ${businessName}'s digital assets under a unified typography and high-contrast color strategy. Develop custom high-fidelity logos, premium banners, and set up your optimized Google Business Profile to build local search trust in ${city}. Establish initial asset libraries for immediate publishing.`,
        roadmap60Days: `Phase 2 (Acquisition & Loop): Launch targeted social media campaigns utilizing premium vertical reel editing techniques with hook structures. Initiate local SEO citation building and launch conversion-focused local ad packages to drive qualified leads. Integrate automated message landing paths.`,
        roadmap90Days: `Phase 3 (Optimization & Scaling): Deploy automated WhatsApp sales triggers to convert active inquiries instantly into closed sales. Analyze campaign performance feedback, scale-up high conversion ad groups to support your ${monthlyCustomers || "target"} customer targets, and build premium retargeting campaigns.`,
        marketingStrategy: `Our chief strategic recommendation for ${businessName} is to establish brand-driven client acquisition. By pairing hand-crafted premium visual presentation with hyper-targeted lead capture systems, we bypass general platform fatigue and speak directly to luxury intents. AB Graphics is ready to execute this custom plan end-to-end to skyrocket your customer revenue.`
      };

      return res.json(responseJSON);
    }

    // Initialize Gemini Client
    const ai = getGeminiClient();

    const prompt = `You are the ultimate Chief Executive Digital Marketing Strategist and Brand Consultant at 'AB Graphics' (India's premier high-end graphic design & performance marketing agency).
Develop an immersive, professional, and highly strategic digital marketing roadmap and business analysis report based on these core parameters:
- Business Name: ${businessName}
- Business Type: ${businessType}
- Target City/Market: ${city}
- Instagram Username: @${instagram || "Not Provided"}
- Monthly Marketing Budget Scale: ${budget}
- Current Client Acquisition Method: ${currentMethod || "Not Provided"}
- Main Dynamic Growth Goal: ${goal}
- Monthly Target Customers: ${monthlyCustomers || "Not Provided"}

IMPORTANT: Keep it purely professional, strategic, conversion-oriented, and tailored specifically to the AB Graphics service spectrum. Do NOT include any type of visual score calculation, branding points, numbers rating the brand, or percentages. Focus entirely on realistic roadmap deliverables. Under no circumstances should you generate any rating calculations or generic placeholder scores.

We offer these premium services: ${AVAILABLE_SERVICES.join(", ")}.
We offer three tailored tiers of packages:
- Starter Package (ideal for budget Rs 10k-25k, includes core graphic design, logos, and standard posters/banners)
- Growth Package (ideal for Rs 25k-75k, adds SMM, Google Business Profile, Reel Editing, and Organic Instagram growth)
- Premium Package (ideal for Rs 75k+, adds Meta Ads Management, Google Ads, Lead Generation, and Custom CRM Automation)

Based on these business specifications, perform a detailed diagnostic and return exactly a JSON object containing:
1. businessAnalysis (string, ~100-150 words): Deep strategic analysis of the company's positioning, core challenges and path forward in ${city}.
2. marketingProblems (array of exactly 3 strings): Specific, critical current marketing issues or gaps they are likely facing.
3. growthOpportunities (array of exactly 3 strings): Lucrative, state-of-the-art growth channels or tactics they should exploit to meet their specific goal.
4. recommendedActions (array of exactly 3 strings): High-impact actions they can take right away.
5. recommendedServices (array of exactly 3 strings): Selected from our AVAILABLE_SERVICES pool above.
6. recommendedPackage (string): Either "Starter Package", "Growth Package", or "Premium Package" based on their goals and budget scale.
7. roadmap30Days (string, ~80 words): Phase 1: High-impact initial setup, essential structural fixes, visual identity updates, and immediate quick-wins.
8. roadmap60Days (string, ~80 words): Phase 2: Launch active growth campaigns, content loops, and targeted organic/paid user acquisition.
9. roadmap90Days (string, ~80 words): Phase 3: Scale processes, apply analytics feedback, integrate lead automation pipelines, and optimize retention.
10. marketingStrategy (string, ~120 words): Free custom-tailored elite digital marketing strategy summary.

Return strictly JSON matching the required schema. No markdown wrapping.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: [
            "businessAnalysis",
            "marketingProblems",
            "growthOpportunities",
            "recommendedActions",
            "recommendedServices",
            "recommendedPackage",
            "roadmap30Days",
            "roadmap60Days",
            "roadmap90Days",
            "marketingStrategy"
          ],
          properties: {
            businessAnalysis: { type: Type.STRING },
            marketingProblems: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            growthOpportunities: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            recommendedActions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            recommendedServices: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            recommendedPackage: { type: Type.STRING },
            roadmap30Days: { type: Type.STRING },
            roadmap60Days: { type: Type.STRING },
            roadmap90Days: { type: Type.STRING },
            marketingStrategy: { type: Type.STRING }
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
    console.error("Gemini Advisor API Error, issuing fallback rescue:", err);
    // Rescue with elegant fallback structure if parsing raw model text broke or failed
    try {
      const budgetSeed = req.body?.budget || '';
      const pUpper = budgetSeed.toUpperCase();
      let recommendedPackage = "Growth Package";
      if (pUpper.includes("STARTER") || pUpper.includes("10K")) {
        recommendedPackage = "Starter Package";
      } else if (pUpper.includes("PREMIUM") || pUpper.includes("75K")) {
        recommendedPackage = "Premium Package";
      }

      const fallJSON = {
        businessAnalysis: `For ${req.body?.businessName || "your business"}, operating in the competitive ${req.body?.city || "local"} market, achieving your target monthly customer count requires a complete shift to high-end design assets. Your goal of "${req.body?.goal || "Growth"}" requires visual clarity and premium digital funnels.`,
        marketingProblems: [
          `Lack of consistent graphic design, brand logo styling, and typography sync.`,
          `Inefficient customer engagement loop causing lead leakage.`,
          `Low regional visibility compared to competitors.`
        ],
        growthOpportunities: [
          `Adopting high-hook Reels templates to grow organically on Instagram.`,
          `Launching local conversion-oriented Meta and Google Search campaigns.`,
          `Optimizing regional presence with localized Business profiles.`
        ],
        recommendedActions: [
          `Overhaul company logo, presentation style, and marketing banner materials.`,
          `Deploy streamlined WhatsApp routing from visual marketing ads.`,
          `Focus budget on high-quality regional localized search keywords.`
        ],
        recommendedServices: ["Lead Generation", "Reel Editing", "Branding"],
        recommendedPackage: recommendedPackage,
        roadmap30Days: `Phase 1: Setup visual styles, design custom professional logos, establish brand guidelines template, and perfect the Google Business Profiles setup.`,
        roadmap60Days: `Phase 2: Begin organic vertical reel templates publishing on social profiles, initiate targeted local ads campaigns, and setup messaging funnels.`,
        roadmap90Days: `Phase 3: Integrate automated WhatsApp lead tracking workflows, evaluate marketing strategy insights data, and focus performance ads budget on elite keywords.`,
        marketingStrategy: `Combine premium visual graphics crafted by AB Graphics with dynamic regional performance funnels. Elevate trust to secure low-friction customer handoffs and systematic revenue scaling.`
      };
      return res.json(fallJSON);
    } catch {
      return res.status(500).json({
        error: "Failed to establish strategic advisor insights. Please fallback directly to WhatsApp info capture.",
      });
    }
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
