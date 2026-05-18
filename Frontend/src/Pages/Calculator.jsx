import React, { useState } from "react";

const Calculator = () => {
  const [batteryPercent, setBatteryPercent] = useState("");
  const [fullRange, setFullRange] = useState("");
  const [DrivingCondition, setDrivingCondition] = useState("");
  const [acUsage, setAcUsage] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [insights, setInsights] = useState([])
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async () => {
    if (batteryPercent === "" || fullRange === "" || DrivingCondition === "") {
      setResult(null);
      setError("Please Enter all required data to get result!");
      return;
    }
    setError("");
    const res = await fetch("http://localhost:9000/ev/api/calculator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        batteryPercent,
        fullRange,
        DrivingCondition,
        passengers,
        insights
      }),
    });

    const data = await res.json();
    setResult(data);
    setInsights(data.insights)
  };

  const resetForm = () => {
    setBatteryPercent("");
    setFullRange("");
    setDrivingCondition("");
    setResult(null);
    setAcUsage(false);
    setPassengers(1);
    setError("");
  };

  return (
    <section className=" bg-gray-900 px-4  ">
      <div className="flex flex-col gap-4 justify-center items-center max-w-6xl mx-auto px-4 text-center py-24 pt-32">
        <h1 className="font-bold text-3xl md:text-5xl text-white ">
          Calculate Driving Efficiency
        </h1>
        <div className="p-5 m-5 w-auto md:w-[400px] lg:w-[600px] bg-slate-700 border-2 border-gray-300 rounded-md flex flex-col items-start gap-4 ">
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Current Battery Level
            </label>
            <input
              type="number"
              placeholder="Enter Battery %..."
              min="0"
              max="100"
              className="w-full p-3 rounded-sm"
              value={batteryPercent}
              onChange={(e) => setBatteryPercent(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Vehicle Full Range (km)
            </label>
            <input
              type="number"
              step="1"
              placeholder="Enter Full Range (km)..."
              className="w-full p-3 rounded-sm"
              value={fullRange}
              onChange={(e) => setFullRange(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Select Driving Condition{" "}
            </label>
            <select
              className="w-full p-3 rounded-sm"
              onChange={(e) => setDrivingCondition(e.target.value)}
              value={DrivingCondition}
            >
              <option value="">Select</option>
              <option value="city">City </option>
              <option value="highway">Highway </option>
              <option value="mixed">Mixed </option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              * Passangeres
            </label>
            <input
              type="number"
              placeholder="Enter Passangers..."
              className="w-full p-3 rounded-sm"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-between gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * AC Usage
            </label>
            <input
              type="checkbox"
              className="w-44 p-3 rounded-sm"
              onChange={(e) => setAcUsage(e.target.checked)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mx-auto w-full">
            <button
              className="px-5 py-3 rounded-md bg-blue-500 text-white font-semibold w-full"
              onClick={calculate}
            >
              Calculate
            </button>
            <button
              onClick={resetForm}
              className="px-5 py-3 rounded-md border-2 border-blue-400 text-white font-semibold w-full"
            >
              Reset
            </button>
          </div>
          {result && (
            <div className="bg-gray-700 p-4 rounded text-white mt-4 text-start">
              <p>Estimated Range: {result.Range} km</p>
              <p>Efficiency: {result.Efficiency}</p>
              <p>Battery Usage: {result.BatteryUsage}%</p>
              <p>Driving Condition: {result.Driving_Condition}</p>
              {result.insights && result.insights.length > 0 && (
                <div className="mt-3">
                  <h3 className="font-bold text-lg">Insights:</h3>
                  <ul className="list-disc list-inside">
                    {result.insights.map((msg, i) => (
                      <li key={i}>{msg}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          {error && <p className="text-red-400 mx-auto py-3">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
