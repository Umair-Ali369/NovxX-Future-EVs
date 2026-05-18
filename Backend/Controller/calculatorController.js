const Calculator = require("../Models/Calculator")

exports.evCalculator = async (req, res) => {
  try {
    let { batteryPercent, fullRange, DrivingCondition, acUsage, passengers, insights } =
      req.body;
    batteryPercent = Number(batteryPercent);
    fullRange = Number(fullRange);
    passangers = Number(passengers);
    let baseRange = (batteryPercent / 100) * fullRange;

    // Driving Condition impact
    if (DrivingCondition === "city") baseRange *= 1.1;
    if (DrivingCondition === "highway") baseRange *= 0.9;
    if (DrivingCondition === "mixed") baseRange *= 0.95;

    // AC usage impact
    if (acUsage) baseRange *= 0.85;

    // passenger load impact
    baseRange -= passengers * 5;

    // Efficiency Logic
    let efficiency = "High";
    if (baseRange < fullRange * 0.3) efficiency = "Low";
    else if (baseRange < fullRange * 0.6) efficiency = "Moderate";
  
    // Smart insights logics
    insights = [];
    if(acUsage === true) insights.push("High AC usage reduce range by ~17%")
    if(DrivingCondition === "city") insights.push("City drive imporve efficiency")
    if(DrivingCondition === "highway") insights.push("Highway drive reduces efficiency slightly")
    if(passengers > 4) insights.push("Heavy Load reduce efficiency")

    const calculate = await Calculator.create({
      batteryPercent,
      fullRange,
      DrivingCondition,
      acUsage,
      passengers,
      finalRange : baseRange,
      efficiency
    })
    res.status(200).json({
      Range: calculate.finalRange.toFixed(1),
      Efficiency: calculate.efficiency,
      BatteryUsage: calculate.batteryPercent,
      Driving_Condition: calculate.DrivingCondition,
      insights
    });

    console.log(calculate)
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
    console.log(error);
  }
};
