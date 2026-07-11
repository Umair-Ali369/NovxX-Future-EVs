const Calculator = require("../Models/Calculator");
const User = require("../Models/User");

const VEHICLE_MULTIPLERS = {
  sedan: 1.0,
  suv: 0.9,
  compact_ev: 1.1,
  hatchback: 1.05,
  truck: 0.8,
};

const EFFICIENCY_SCORE = { Low: 1, Moderate: 2, High: 3 };
const STRESS_SCORE = { Low: 1, Moderate: 2, High: 3 };

exports.evCalculator = async (req, res) => {
  try {
    let {
      batteryPercent,
      fullRange,
      DrivingCondition,
      acUsage,
      passengers,
      insights,
      batterySize,
      temperature,
      drivingStyle,
      vehicleLoad,
      terrainType,
      vehicleType,
    } = req.body;

    // ---- Normalize numeric inputs ----
    batteryPercent = Number(batteryPercent);
    fullRange = Number(fullRange);
    passengers = Number(passengers) || 0;
    batterySize = Number(batterySize);
    temperature = Number(temperature);
    vehicleLoad = Number(vehicleLoad) || 0;

    let baseRange = (batteryPercent / 100) * fullRange;

    // ---- Driving Condition impact ----
    if (DrivingCondition === "city") baseRange *= 1.1;
    if (DrivingCondition === "highway") baseRange *= 0.9;
    if (DrivingCondition === "mixed") baseRange *= 0.95;

    // ---- Driving Style impact ----
    if (drivingStyle === "eco") baseRange *= 1.1;
    if (drivingStyle === "normal") baseRange *= 1.0;
    if (drivingStyle === "aggressive") baseRange *= 0.85;

    // ---- Terrain impact ----
    if (terrainType === "flat") baseRange *= 1.0;
    if (terrainType === "hilly") baseRange *= 0.9;
    if (terrainType === "mountainous") baseRange *= 0.75;

    // ---- Vehicle Type impact ----
    if (req.user?.id) {
      const userProfile = await User.findById(req.user.id).select(
        "vehicleType  preferredDrivingStyle preferredDrivingCondition",
      );
      if (!vehicleType) vehicleType = userProfile?.vehicleType;
      if (!drivingStyle)
        drivingStyle = userProfile?.preferredDrivingStyle || "normal";
      if (!DrivingCondition)
        DrivingCondition = userProfile?.preferredDrivingCondition || "mixed";
    }

    if (vehicleType && VEHICLE_MULTIPLERS[vehicleType]) {
      baseRange *= VEHICLE_MULTIPLERS[vehicleType];
    }

    // ---- Temperature impact ----
    // EV batteries lose efficiency in extreme cold/heat
    let temperatureFactor = 1.0;
    if (temperature < 0) temperatureFactor = 0.75;
    else if (temperature < 10) temperatureFactor = 0.9;
    else if (temperature > 35) temperatureFactor = 0.9;
    baseRange *= temperatureFactor;

    // ---- AC usage impact ----
    if (acUsage) baseRange *= 0.85;

    // ---- Passenger load impact ----
    baseRange -= passengers * 5;

    // ---- Vehicle load impact (extra cargo weight) ----
    // Roughly: every 50kg of extra load costs ~1km of range
    baseRange -= vehicleLoad / 50;

    // Prevent negative range
    if (baseRange < 0) baseRange = 0;

    // ---- Efficiency Logic ----
    let efficiency = "High";
    if (baseRange < fullRange * 0.3) efficiency = "Low";
    else if (baseRange < fullRange * 0.6) efficiency = "Moderate";

    // ---- Energy Consumption Estimate (kWh per 100km) ----
    let energyConsumption = 0;
    if (baseRange > 0 && batterySize > 0) {
      const energyUsed = (batteryPercent / 100) * batterySize;
      energyConsumption = (energyUsed / baseRange) * 100;
    }

    // ---- Battery Stress Level ----
    // Score factors: aggressive driving, AC usage, extreme temps, heavy load, terrain
    let stressScore = 0;
    if (drivingStyle === "aggressive") stressScore += 2;
    if (acUsage) stressScore += 1;
    if (temperature < 0 || temperature > 35) stressScore += 2;
    if (terrainType === "mountainous") stressScore += 2;
    if (terrainType === "hilly") stressScore += 1;
    if (vehicleLoad > 100) stressScore += 1;
    if (passengers > 4) stressScore += 1;

    let batteryStress = "Low";
    if (stressScore >= 5) batteryStress = "High";
    else if (stressScore >= 2) batteryStress = "Moderate";

    // Smart insights logics Level 1
    insights = [];
    if (acUsage === true) insights.push("High AC usage reduce range by ~15%");
    if (DrivingCondition === "city")
      insights.push("City drive imporve efficiency");
    if (DrivingCondition === "highway")
      insights.push("Highway drive reduces efficiency slightly");
    if (drivingStyle === "aggressive")
      insights.push(
        "Aggressive driving increase battery stress and reduce range.",
      );
    if (drivingStyle === "eco")
      insights.push("Eco driving style is helping you maximum range.");
    if (terrainType === "mountainous")
      insights.push(
        "Mountainous terrain significantly increase energy consumption.",
      );
    if (terrainType === "hilly")
      insights.push("Hilly terrain moderately increase energy consumption.");
    if (temperature < 0)
      insights.push("Very cold temperature reduce battery performence.");
    if (temperature > 35)
      insights.push("High temperatre can increase battery stress.");
    if (passengers > 4) insights.push("Heavy Load reduce efficiency");
    if (vehicleLoad > 100)
      insights.push("Extra cargo load reducing battery range.");
    if (vehicleType == "suv")
      insights.push("SUV body type reduces range by ~10% compared to a sedan");
    if (vehicleType == "truck")
      insights.push(
        "SUV body type reduces range by ~20% because of higher weight.",
      );
    if (vehicleType == "compact_ev")
      insights.push("Compact EV gives ~10% better range efficiency");

    // ---- Save to DB ----
    const calculate = await Calculator.create({
      userId: req.user?.id,
      batteryPercent,
      fullRange,
      DrivingCondition,
      acUsage,
      passengers,
      finalRange: baseRange,
      efficiency,
      drivingStyle,
      batteryStress,
      energyConsumption,
      temperature,
      vehicleLoad,
      terrainType,
      batterySize,
      vehicleType,
    });

    // Level 2 smart insights
    const smartInsights = await generateSmartInsights({
      userId: req.user?.id,
      current: {
        finalRange: baseRange,
        efficiency,
        batteryStress,
        temperature,
        drivingStyle,
        energyConsumption,
        excluded: calculate._id,
      },
    });

    res.status(200).json({
      range: calculate.finalRange.toFixed(1),
      efficiency: calculate.efficiency,
      batteryUsage: calculate.batteryPercent,
      driving_Condition: calculate.DrivingCondition,
      battery_Stress: calculate.batteryStress,
      energy_Consumption: calculate.energyConsumption.toFixed(2),
      insights: [...insights, ...smartInsights],
    });

    console.log(calculate);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
    console.log(error);
  }
};

// Level 2 Smart Insight Engine
// Compares current calculation against user's
// recent history to surface trend-based insights.
// Logic-based only — no AI/ML.

async function generateSmartInsights({ userId, current }) {
  const insights = [];
  if (!userId) return insights;
  const pastRecord = await Calculator.find({
    userId,
    _id: { $ne: current.excluded },
  })
    .sort({ date: -1 })
    .limit(10);

  // Need at least 3 records for trends to be meaningful
  if (pastRecord.length < 3) return insights;
  // ---- Historical averages ----
  const avgRange =
    pastRecord.reduce((sum, r) => sum + (r.finalRange || 0), 0) /
    pastRecord.length;

  const avgEfficiencyScore =
    pastRecord.reduce(
      (sum, r) => sum + (EFFICIENCY_SCORE[r.efficiency] || 2),
      0,
    ) / pastRecord.length;

  const avgStressScore =
    pastRecord.reduce(
      (sum, r) => sum + (STRESS_SCORE[r.batteryStress] || 1),
      0,
    ) / pastRecord.length;

  const avgEnergyConsumption =
    pastRecord.reduce((sum, r) => sum + (r.energyConsumption || 0), 0) /
    pastRecord.length;

  // ---- Range trend ----
  const rangeDifferentPercent =
    avgRange > 0 ? ((current.finalRange - avgRange) / avgRange) * 100 : 0;

  if (rangeDifferentPercent <= -15) {
    insights.push(
      `Your range is ${Math.abs(rangeDifferentPercent).toFixed(0)}% lower than your recent average`,
    );
  } else if (rangeDifferentPercent >= 15) {
    insights.push(
      `Your range is ${rangeDifferentPercent.toFixed(0)}% is better than recent average.`,
    );
  }

  // ---- Efficiency trend ----
  const currentEFFscore = EFFICIENCY_SCORE[current.efficiency] || 2;
  if (currentEFFscore < avgEfficiencyScore - 0.5) {
    insights.push("Your efficiency has drops compared to recent trips");
  } else if (currentEFFscore > avgEfficiencyScore + 0.5) {
    insights.push("Your efficiency has improved compared to recent trips");
  }

  // ---- Battery stress trend ----
  const currentBaStress = STRESS_SCORE[current.batteryStress] || 0;
  if (currentBaStress > avgStressScore + 0.5) {
    insights.push("Battery Stress increased compared to recent trips");
  }

  // ---- Driving style pattern ----
  const aggressiveCount = pastRecord.filter(
    (r) => r.drivingStyle === "aggressive",
  ).length;
  if (
    current.drivingStyle === "aggressive" &&
    aggressiveCount > pastRecord.length * 0.5
  ) {
    insights.push(
      "Your driving style is consistently causing high consumption",
    );
  }

  // ---- Temperature pattern ----
  const coldTripsCount = pastRecord.filter((r) => r.temperature < 10).length;
  if (current.drivingStyle < 10 && aggressiveCount > pastRecord.length * 0.5) {
    insights.push(
      "Cold weather has been consistently reducing your efficiency",
    );
  }

  // ---- Energy consumption trend ----
  if (
    avgEnergyConsumption > 0 &&
    current.energyConsumption > avgEnergyConsumption * 1.15
  ) {
    insights.push(
      "Your energy consumption is trending higher than usual — worth checking driving habits or conditions",
    );
  }

  return insights;
}
