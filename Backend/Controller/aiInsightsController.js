// FILE: server/Controllers/aiInsightController.js
// REPLACE ENTIRE FILE

const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const MODEL = "qwen/qwen3.8-27b";

// Run this once to find your available models:
// groq.models.list().then(r => console.log(r.data.map(m => m.id)))

// ── Generate AI Insights (called after calculator) ──
exports.generateAiInsights = async (req, res) => {
  try {
    const {
      range,
      efficiency,
      batteryUsage,
      batteryStress,
      energyConsumption,
      drivingCondition,
      drivingStyle,
      temperature,
      terrainType,
      acUsage,
      passengers,
      vehicleLoad,
      vehicleType,
    } = req.body;

    if (!efficiency) {
      return res.status(400).json({ message: "efficiency is required." });
    }

    const prompt = `You are an expert EV performance analyst for NovxX platform.

A user just completed a battery analysis. Here is their data:

- Vehicle Type: ${vehicleType || "Not specified"}
- Battery Usage: ${batteryUsage || "N/A"}%
- Estimated Range: ${range || "N/A"} km
- Energy Consumption: ${energyConsumption || "N/A"} kWh/100km
- Driving Condition: ${drivingCondition || "Not specified"}
- Driving Style: ${drivingStyle || "Not specified"}
- Terrain: ${terrainType || "Not specified"}
- Temperature: ${temperature || "N/A"}°C
- AC Usage: ${acUsage ? "Yes" : "No"}
- Passengers: ${passengers || 0}
- Extra Load: ${vehicleLoad || 0} kg
- Efficiency Score: ${efficiency}
- Battery Stress: ${batteryStress || "N/A"}

Give exactly 3 insights. Rules:
- Each insight must be 1-2 sentences maximum
- Be specific to their actual data, not generic
- No numbering, no bullets, no dashes
- Separate each insight with a single newline
- Be direct and practical like an EV coach`;

    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an expert EV performance analyst. Give short, specific, actionable insights based on real driving data. Never give generic advice.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.6,
      max_tokens: 250,
    });

    const responseText =
      completion.choices[0]?.message?.content?.trim() || "";

    let aiInsights = responseText
      .split(/\n+/)
      .map((line) => line.trim())
      .filter((line) => line.length > 5)
      .slice(0, 3);

    if (aiInsights.length === 0 && responseText.length > 0) {
      aiInsights = [responseText];
    }

    console.log("AI INSIGHTS GENERATED:", aiInsights);

    res.status(200).json({ aiInsights, model: MODEL });
  } catch (error) {
    console.error("AI Insight Error:", error.message);
    res.status(500).json({
      message: "Failed to generate AI insights.",
      error: error.message,
    });
  }
};

// ── Generate Weekly Summary (called from Dashboard) ──
exports.generateWeeklySummary = async (req, res) => {
  try {
    const { calculations } = req.body;

    if (!calculations || calculations.length < 3) {
      return res.status(400).json({
        message: "At least 3 calculations needed for a weekly summary.",
      });
    }

    const avgRange =
      calculations.reduce((sum, c) => sum + (c.finalRange || 0), 0) /
      calculations.length;

    const avgEnergy =
      calculations.reduce((sum, c) => sum + (c.energyConsumption || 0), 0) /
      calculations.length;

    const conditionCounts = calculations.reduce((acc, c) => {
      const key = c.DrivingCondition || c.drivingCondition || "unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const mostUsed = Object.entries(conditionCounts).sort(
      (a, b) => b[1] - a[1]
    )[0][0];

    const effMap = { Low: 1, Moderate: 2, High: 3 };
    const avgEff =
      calculations.reduce(
        (sum, c) => sum + (effMap[c.efficiency] || 2),
        0
      ) / calculations.length;
    const efficiencyLabel =
      avgEff >= 2.5 ? "High" : avgEff >= 1.5 ? "Moderate" : "Low";

    const stressMap = { Low: 1, Moderate: 2, High: 3 };
    const avgStress =
      calculations.reduce(
        (sum, c) => sum + (stressMap[c.batteryStress] || 1),
        0
      ) / calculations.length;
    const stressLabel =
      avgStress >= 2.5 ? "High" : avgStress >= 1.5 ? "Moderate" : "Low";

    const prompt = `You are a friendly EV performance coach for NovxX platform.

Here is a summary of a user's recent ${calculations.length} EV trips:

- Average Range: ${avgRange.toFixed(1)} km per trip
- Average Energy Consumption: ${avgEnergy.toFixed(2)} kWh/100km
- Overall Efficiency: ${efficiencyLabel}
- Battery Stress Level: ${stressLabel}
- Most Used Driving Condition: ${mostUsed}

Write a short personalized weekly summary. Include:
1. One sentence praising what they are doing well
2. One sentence on their biggest area for improvement
3. One specific actionable tip for next week

Keep total response under 4 sentences. Be specific to their data. No bullets, no numbers. Warm and encouraging tone.`;

    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a friendly EV performance coach. Give short, personalized weekly summaries based on real driving data.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 180,
    });

    const summary =
      completion.choices[0]?.message?.content?.trim() || "";

    console.log("WEEKLY SUMMARY GENERATED:", summary);

    res.status(200).json({
      summary,
      stats: {
        avgRange: avgRange.toFixed(1),
        avgEnergy: avgEnergy.toFixed(2),
        efficiency: efficiencyLabel,
        stress: stressLabel,
        mostUsed,
        tripCount: calculations.length,
      },
    });
  } catch (error) {
    console.error("Weekly Summary Error:", error.message);
    res.status(500).json({
      message: "Failed to generate weekly summary.",
      error: error.message,
    });
  }
};