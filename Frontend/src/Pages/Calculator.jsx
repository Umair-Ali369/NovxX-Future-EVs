import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCalculator } from "../context/CalculatorContext";

// Keywords
const TREND_KEYWORDS = [
  "compared to",
  "recent average",
  "recent trips",
  "consistently",
  "trending",
  "increase",
  "dropped",
  "improved",
];

const isTrendInsight = (insight) =>
  TREND_KEYWORDS.some((kw) => insight.toLowerCase().includes(kw));

// Reusable input label
const Label = ({ children, required }) => (
  <label className="text-sm font-semibold text-gray-300">
    {required && <span className="text-[#44ACFF] mr-1"> * </span>}
    {children}
  </label>
);

// Reusable input field
const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] placeholder-gray-600 focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
  />
);

// Reusable select field
const Select = ({ children, ...props }) => (
  <select
    {...props}
    className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
  >
    {children}
  </select>
);

// Result stat card
const StatsCard = ({ label, value }) => (
  <div className="bg-[#091413] border border-white/10 rounded-lg p-4 flex flex-col gap-1">
    <p className="text-xs text-gray-500 uppercase tracking-wider"> {label} </p>
    <p className="text-lg font-bold text-[#E8EDEC]"> {value} </p>
  </div>
);

const Calculator = () => {
  const [batteryPercent, setBatteryPercent] = useState("");
  const [fullRange, setFullRange] = useState("");
  const [DrivingCondition, setDrivingCondition] = useState("");
  const [acUsage, setAcUsage] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [insights, setInsights] = useState([]);
  const [batterySize, setBatterySize] = useState("");
  const [temperature, setTemperature] = useState("");
  const [drivingStyle, setDrivingStyle] = useState("");
  const [vehicleLoad, setVehicleLoad] = useState("");
  const [terrainType, setTerrainType] = useState("");

  const [error, setError] = useState("");

  const { calculate, loading, EVresult, setEVResult } = useCalculator();

  const handleCalculator = () => {
    if (
      !batteryPercent ||
      !fullRange ||
      !DrivingCondition ||
      !batterySize ||
      !temperature ||
      !drivingStyle ||
      !terrainType
    ) {
      return setError("Please fill the all required fields to calculate.");
    }
    if (passengers < 0) {
      setError("Please fill the right count of passengers");
    }
    setError("");
    calculate({
      batteryPercent,
      fullRange,
      DrivingCondition,
      acUsage,
      passengers,
      batterySize,
      terrainType,
      temperature,
      drivingStyle,
      vehicleLoad,
    });
  };

  const reset = () => {
    setBatteryPercent("");
    setFullRange("");
    setDrivingCondition("");
    setAcUsage(false);
    setPassengers("");
    setInsights("");
    setBatterySize("");
    setVehicleLoad("");
    setDrivingStyle("");
    setTerrainType("");
    setTemperature("");
    setEVResult(null);
    setError("");
  };

  const allInsights = EVresult?.data?.insights || [];
  const basicInsights = allInsights.filter((msg) => !isTrendInsight(msg));
  const smartInsights = allInsights.filter((msg) => isTrendInsight(msg));

  return (
    <section className="bg-[#091413] min-h-screen px-6 py-24 pt-36">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/30 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
            Battery & Efficiency Analyzer
          </span>
          <h1 className="font-bold text-3xl md:text-5xl text-[#E8EDEC] leading-tight mb-4">
            Analyze Your EV performance
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Get a detailed breakdown of your estimated range, efficiency score,
            battery stress level, and energy consumption based on real driving
            conditions.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT input form */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-2xl p-8 flex flex-col gap-8">
            {/* Group 1 Battery */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
                Battery
              </h3>

              <div className="flex flex-col gap-2">
                <Label required> Current Battery Level (%) </Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 80"
                  value={batteryPercent}
                  onChange={(e) => setBatteryPercent(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label required> Battery Size (kWh) </Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="e.g. 60"
                  value={batterySize}
                  onChange={(e) => setBatterySize(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label required> Vehicle Full Range (km) </Label>
                <Input
                  type="number"
                  step="1"
                  min="0"
                  placeholder="e.g. 400"
                  value={fullRange}
                  onChange={(e) => setFullRange(e.target.value)}
                />
              </div>
            </div>

            {/* Group 2 Conditions */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
                Driving Conditions
              </h3>

              <div className="flex flex-col gap-2">
                <Label required> Driving Condition </Label>
                <Select
                  value={DrivingCondition}
                  onChange={(e) => setDrivingCondition(e.target.value)}
                >
                  <option value=""> Select </option>
                  <option value="city"> City </option>
                  <option value="highway"> Highway </option>
                  <option value="mixed"> Mixed </option>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label required> Driving Style </Label>
                <Select
                  value={drivingStyle}
                  onChange={(e) => setDrivingStyle(e.target.value)}
                >
                  <option value=""> Select </option>
                  <option value="eco"> Eco </option>
                  <option value="normal"> Normal </option>
                  <option value="aggressive"> Aggressive </option>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label required> Terrain Type </Label>
                <Select
                  value={terrainType}
                  onChange={(e) => setTerrainType(e.target.value)}
                >
                  <option value=""> Select </option>
                  <option value="flat"> Flat </option>
                  <option value="hilly"> Hilly </option>
                  <option value="mountainous"> Mountainous </option>
                </Select>
              </div>
            </div>

            {/* Group 3 Environment */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
                Enviornment
              </h3>

              <div className="flex flex-col gap-2">
                <Label required> Outside Temperature (°C) </Label>
                <Input
                  type="number"
                  placeholder="e.g. 25"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between py-1">
                <Label> AC Usage </Label>
                <button
                  onClick={() => setAcUsage(!acUsage)}
                  className={`w-12 h-6 rounded-full border transition-colors relative ${
                    acUsage
                      ? "bg-[#44ACFF] border-[#44ACFF]"
                      : "bg-transparent border-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${
                      acUsage ? "left-6" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Group 4 Load */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
                Load
              </h3>

              <div className="flex flex-col gap-2">
                <Label> Passengers </Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="e.g. 2"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label> Vehicle Load (kg) </Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="Extra cargo weight"
                  value={vehicleLoad}
                  onChange={(e) => setVehicleLoad(e.target.value)}
                />
              </div>
            </div>

            {/* Errors */}
            {error && <p className="text-red-400 text-sm">{error}</p>}

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleCalculator}
                disabled={loading}
                className="flex-1 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] disabled:opacity-60 transition-colors"
              >
                {loading ? "Analyzing" : "Analyze"}
              </button>
              <button
                onClick={reset}
                className="flex-1 py-3.5 rounded-lg border border-white/15 text-gray-300 font-semibold hover:border-white/30 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* RIGHT Result Panel */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
            {!EVresult ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-20">
                <div className="w-16 h-16 rounded-full bg-[#44ACFF]/10 border border-[#44ACFF]/20 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <h3 className="font-bold text-lg text-[#E8EDEC]">
                  {" "}
                  Run your first analysis{" "}
                </h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Fill in the fields on the left and click Anal Fill the filed
                  on left side and click analyze to see you battery and
                  efficiency result here.{" "}
                </p>
              </div>
            ) : (
              <>
                 <div className="flex items-center justify-between">
                 <h2 className="font-bold text-xl text-[#E8EDEC]"> Analysis Result </h2>
                 <span className="text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">
                 ✓ Complete</span>
                </div>

                {/* stat cards */}
                <div>
                  <StatsCard
                    label="Estimaated Range"
                    value={`${EVresult.data.range} km`}
                  />
                  <StatsCard
                    label="Efficiency Score"
                    value={`${EVresult.data.efficiency} `}
                  />
                  <StatsCard
                    label="Battery Usage"
                    value={`${EVresult.data.batteryUsage} % `}
                  />
                  <StatsCard
                    label="Battery Stress"
                    value={EVresult.data.battery_Stress ?? "N/A"}
                  />
                  <StatsCard
                    label="Energy Consumption"
                    value={
                      EVresult.data.energy_Consumption
                        ? `${EVresult.data.energy_Consumption} kWh / 100`
                        : "N/A"
                    }
                  />
                  <StatsCard
                    label="Driving Condition"
                    value={
                      EVresult.data.driving_Condition
                        ? EVresult.data.driving_Condition
                            .charAt(0)
                            .toUpperCase() +
                          EVresult.data.driving_Condition.slice(1)
                        : "N/A"
                    }
                  />
                </div>

                {/* Level 1 Basic Insights */}
                {basicInsights.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-sm text-gray-400 uppercase tracking-wider">
                      Insights
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {basicInsights.map((msg, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="text-[#44ACFF] mt-0.5"> ✦ </span>
                          {msg}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Level 2 Smart Insights */}
                {smartInsights.length > 0 && (
                  <div className="bg-[#091413] border border-purple-500/20 rounded-xl p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg"> 🧠 </span>
                      <h3 className="font-semibold text-sm text-purple-300">
                        Smart Insights
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500">
                      {" "}
                      Based on your recent calculation history{" "}
                    </p>
                    <ul>
                      {smartInsights.map((msg, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-purple-100"
                        >
                          <span> ✦</span>
                          {msg}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/*  CTA */}
                <Link
                  to="/dashboard"
                  className="w-full py-3 rounded-lg border border-white/15 text-[#E8EDEC] text-sm font-semibold text-center hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
                >
                  View Full Dashboard →
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
