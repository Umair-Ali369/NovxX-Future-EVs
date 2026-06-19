const Calculator = require("../Models/Calculator");

exports.evCalculator = async (req, res) => {
  try {
    let {
      batteryPercent,
      fullRange,
      DrivingCondition,
      acUsage,
      passengers,
      insights,
      battery_size,
      temperature,
      driving_style,
      vehicle_load,
      terrain_type,
    } = req.body;

    // ---- Normalize numeric inputs ----
    batteryPercent = Number(batteryPercent);
    fullRange = Number(fullRange);
    passangers = Number(passengers) || 0;
    battery_size = Number(battery_size);
    temperature = Number(temperature);
    vehicle_load = Number(vehicle_load) || 0;

    let baseRange = (batteryPercent / 100) * fullRange;

    // ---- Driving Condition impact ----
    if (DrivingCondition === "city") baseRange *= 1.1;
    if (DrivingCondition === "highway") baseRange *= 0.9;
    if (DrivingCondition === "mixed") baseRange *= 0.95;

    // ---- Driving Style impact ----
    if (driving_style === "eco") baseRange *= 1.1;
    if (driving_style === "normal") baseRange *= 1.0;
    if (driving_style === "aggressive") baseRange *= 0.85;

    // ---- Terrain impact ----
    if (terrain_type === "flat") baseRange *= 1.0;
    if (terrain_type === "hilly") baseRange *= 0.9;
    if (terrain_type === "mountainous") baseRange *= 0.75;

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
    baseRange -= vehicle_load / 50;

    // Prevent negative range
    if (baseRange < 0) baseRange = 0;

    // ---- Efficiency Logic ----
    let efficiency = "High";
    if (baseRange < fullRange * 0.3) efficiency = "Low";
    else if (baseRange < fullRange * 0.6) efficiency = "Moderate";

    // ---- Energy Consumption Estimate (kWh per 100km) ----
    let energyConsumption = 0;
    if (baseRange > 0 && battery_size > 0) {
      const energyUsed = (batteryPercent / 100) * battery_size;
      energyConsumption = (energyConsumption / baseRange) * 100;
    }

    // ---- Battery Stress Level ----
    // Score factors: aggressive driving, AC usage, extreme temps, heavy load, terrain
    let stressScore = 0;
    if (driving_style === "aggressive") stressScore += 2;
    if (acUsage) stressScore += 1;
    if (temperature < 0 || temperature > 35) stressScore += 2;
    if (terrain_type === "mountainous") stressScore += 2;
    if (terrain_type === "hilly") stressScore += 1;
    if (vehicle_load > 100) stressScore += 1;
    if (passengers > 4) stressScore += 1;

    let batteryStress = "Low";
    if (stressScore >= 5) batteryStress = "High";
    else if (stressScore >= 2) batteryStress = "Moderate";
    // Smart insights logics
    insights = [];
    if (acUsage === true) insights.push("High AC usage reduce range by ~17%");
    if (DrivingCondition === "city")
      insights.push("City drive imporve efficiency");
    if (DrivingCondition === "highway")
      insights.push("Highway drive reduces efficiency slightly");
    if (driving_style === "aggressive")
      insights.push(
        "Aggressive driving increase battery stress and reduce range.",
      );
    if (driving_style === "eco")
      insights.push("Eco driving style is helping you maximum range.");
    if (terrain_type === "mountainous")
      insights.push(
        "Mountainous terrain significantly increase energy consumption.",
      );
    if (terrain_type === "hilly")
      insights.push("Hilly terrain moderately increase energy consumption.");
    if (temperature < 0)
      insights.push("Very cold temperature reduce battery performence.");
    if (temperature > 35)
      insights.push("High temperatre can increase battery stress.");
    if (passengers > 4) insights.push("Heavy Load reduce efficiency");
    if (vehicle_load > 100)
      insights.push("Extra cargo load reducing battery range.");

    // ---- Save to DB ----
    const calculate = await Calculator.create({
      batteryPercent,
      fullRange,
      DrivingCondition,
      acUsage,
      passengers,
      finalRange: baseRange,
      efficiency,
      driving_style,
      batteryStress,
      energyConsumption,
      temperature,
      vehicle_load,
      terrain_type,
      battery_size,
    });
    res.status(200).json({
      range: calculate.finalRange.toFixed(1),
      efficiency: calculate.efficiency,
      batteryUsage: calculate.batteryPercent,
      driving_Condition: calculate.DrivingCondition,
      battery_Stress: calculate.batteryStress,
      energy_Consumption: calculate.energyConsumption.toFixed(2),
      insights,
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
