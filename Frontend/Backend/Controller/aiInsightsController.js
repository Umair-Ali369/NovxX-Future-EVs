const Groq = require("groq-sdk");
const dotenv = require("dotenv")

dotenv.config()
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// Receives calculation data and returns AI-generated insights
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

    if (!range || !efficiency) {
      return res.status(400).json({
        message: "Calculation data is required to generate insights.",
      });
    }

    // ── Build the prompt ──
    const prompt = `You are an expert EV (Electric Vehicle) performance analyst for NovxX, an intelligent EV platform.

A user just completed a battery and efficiency analysis. Here are their results:

VEHICLE & BATTERY:
- Vehicle Type: ${vehicleType || "Not specified"}
- Battery Usage: ${batteryUsage}%
- Estimated Range: ${range} km
- Energy Consumption: ${energyConsumption || "N/A"} kWh/100km

DRIVING CONDITIONS:
- Driving Condition: ${drivingCondition || "Not specified"}
- Driving Style: ${drivingStyle || "Not specified"}
- Terrain: ${terrainType || "Not specified"}
- Temperature: ${temperature || "N/A"}°C
- AC Usage: ${acUsage ? "Yes" : "No"}
- Passengers: ${passengers || 0}
- Extra Vehicle Load: ${vehicleLoad || 0} kg

PERFORMANCE RESULTS:
- Efficiency Score: ${efficiency}
- Battery Stress Level: ${batteryStress || "N/A"}

Based on this data, provide 3 specific, actionable, and personalized insights to help this user improve their EV performance. 

Rules:
- Each insight must be specific to their actual data — not generic advice
- Be direct and practical — tell them exactly what to do
- Keep each insight to 1-2 sentences maximum
- Do not number the insights
- Do not use bullet points or dashes
- Separate each insight with a newline
- Focus on their biggest areas for improvement
- If something is already good, acknowledge it briefly and suggest the next improvement
- Write in a friendly, expert tone — like a smart EV coach`;

    // ── Call Groq API ──
    const completion = await groq.chat.completions.create({
      model: "groq/compound",
      messages: [
        {
          role: "system",
          content:
            "You are an expert EV performance analyst. You give short, specific, actionable insights based on real driving data. Never give generic advice.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.6,
      max_tokens: 200,
    });

    const responseText = completion.choices[0]?.message?.content?.trim() || "";

    // ── Parse response into array of insights ──
    const aiInsights = responseText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 10);

    res.status(200).json({
      aiInsights,
      model: "groq/compunt",
    });
  } catch (error) {
    console.error("AI Insight Error:", error);
    res.status(500).json({
      message: "Failed to generate AI insights.",
      error: error.message,
    });
  }
};

// Generates a weekly driving summary from user's calculation history
exports.generateWeeklySummary = async (req, res) => {
  try {
    const { calculations } = req.body;

    if (!calculations || calculations.length < 3) {
      return res.status(400).json({
        message: "At least 3 calculations needed to generate a weekly summary.",
      });
    }

    // ── Compute averages from history ──
    const avgRange =
      calculations.reduce((sum, c) => sum + (c.finalRange || 0), 0) /
      calculations.length;

    const avgEnergy =
      calculations.reduce((sum, c) => sum + (c.energyConsumption || 0), 0) /
      calculations.length;

    const conditionCounts = calculations.reduce((acc, c) => {
      const key = c.drivingCondition || "unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const mostUsed = Object.entries(conditionCounts).sort(
      (a, b) => b[1] - a[1],
    )[0][0];

    const efficiencyScores = { Low: 1, Moderate: 2, High: 3 };
    const avgEfficiency =
      calculations.reduce(
        (sum, c) => sum + (efficiencyScores[c.efficiency] || 2),
        0,
      ) / calculations.length;

    const efficiencyLabel =
      avgEfficiency >= 2.5 ? "High" : avgEfficiency >= 1.5 ? "Moderate" : "Low";

    const stressScores = { Low: 1, Moderate: 2, High: 3 };
    const avgStress =
      calculations.reduce(
        (sum, c) => sum + (stressScores[c.batteryStress] || 1),
        0,
      ) / calculations.length;

    const stressLabel =
      avgStress >= 2.5 ? "High" : avgStress >= 1.5 ? "Moderate" : "Low";

    // ── Build weekly summary prompt ──
    const prompt = `You are an expert EV performance coach for NovxX platform.

Here is a summary of a user's recent EV driving data (${calculations.length} trips):

AVERAGES:
- Average Range: ${avgRange.toFixed(1)} km per trip
- Average Energy Consumption: ${avgEnergy.toFixed(2)} kWh/100km
- Overall Efficiency: ${efficiencyLabel}
- Battery Stress Level: ${stressLabel}
- Most Used Driving Condition: ${mostUsed}

Write a short, personalized weekly driving summary for this user. Include:
1. One sentence praising what they are doing well
2. One sentence identifying their biggest area for improvement
3. One specific actionable tip for next week

Keep the total response under 4 sentences. Be specific to their data. Write in a warm, encouraging, expert tone. Do not use bullet points or numbers.`;

    const completion = await groq.chat.completions.create({
      model: "groq/compound",
      messages: [
        {
          role: "system",
          content:
            "You are a friendly EV performance coach. You give short, personalized weekly summaries based on real driving data.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    const summary = completion.choices[0]?.message?.content?.trim() || "";

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
    console.error("Weekly Summary Error:", error);
    res.status(500).json({
      message: "Failed to generate weekly summary.",
      error: error.message,
    });
  }
};
