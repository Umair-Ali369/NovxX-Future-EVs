exports.evCalculator = (req, res) => {
  try {
    let { batteryPercent, fullRange, drivingCondition, acUsage, passangers } =
      req.body;
      batteryPercent = Number(batteryPercent);
    fullRange = Number(fullRange);
    passangers = Number(passangers);
    let baseRange = (batteryPercent / 100) * fullRange;

    if (drivingCondition === "city") baseRange *= 1.1;
    if (drivingCondition === "highway") baseRange *= 0.9;
    if (drivingCondition === "mixed") baseRange *= 0.95;

    if (acUsage) baseRange *= 0.85;

    baseRange -= passangers * 5;

    let efficiency = "Hight";
    if (baseRange < fullRange * 0.3) efficiency = "Low";
    else if (baseRange < fullRange * 0.6) efficiency = "Moderate";

    res.json({
      range: baseRange.toFixed(1),
      Efficiency: efficiency,
      BatteryUsage: batteryPercent,
      Driving_Condition: drivingCondition,
    });
  } catch (error) {
    res.json({
      message: "Internal Server Error",
     error,
    });
    console.log(error)
  }
};
