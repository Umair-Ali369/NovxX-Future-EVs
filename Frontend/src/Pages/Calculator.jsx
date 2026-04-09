import React, { useState } from "react";

const Calculator = () => {
  const [batteryPercent, setBatteryPercent] = useState("");
  const [fullRange, setFullRange] = useState("");
  const [DrivingCondition, setDrivingCondition] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    if (!batteryPercent || !fullRange || !DrivingCondition) {
      setResult("");
      setError("Please Enter data to get result!");
    }
    if (batteryPercent > 100) {
      setResult("");
      setError("Please Enter the valid Value of Battery! (max = 100)");
    }
    if (batteryPercent < 1 || fullRange < 1) {
      setResult("");
      setError("Please Enter a valid Value!");
    }

    if (batteryPercent <= 100 && fullRange > 1 && DrivingCondition) {
      const batteryUsed = batteryPercent / 100;
      let drivCondition;
      if (DrivingCondition === "City" || "city") {
        drivCondition = 0.8;
      } else if (DrivingCondition === "Highway" || "highway") {
        drivCondition = 1.1;
      } else {
        drivCondition = 1.2;
      }
      const EstimatedRange = batteryUsed * fullRange * drivCondition;
    
      setError("")
      setResult(EstimatedRange.toFixed(2));
    }
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
              * Battery Percentage{" "}
            </label>
            <input
              type="number"
              placeholder="Enter Battery %..."
              min="0"
              max="100"
              className="w-full p-3 rounded-sm"
              onChange={(e) => setBatteryPercent(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Full Range (km){" "}
            </label>
            <input
              type="number"
              step="1"
              placeholder="Enter Full Range (km)..."
              className="w-full p-3 rounded-sm"
              onChange={(e) => setFullRange(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Driving Condition{" "}
            </label>
            <select
              className="w-full p-3 rounded-sm"
              onChange={(e) => setDrivingCondition(e.target.value)}
            >
              <option value="">Select</option>
              <option value="city">City </option>
              <option value="highway">Highway </option>
              <option value="mixed">Mixed </option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mx-auto w-full">
            <button
              className="px-5 py-3 rounded-md bg-blue-500 text-white font-semibold w-full"
              onClick={calculate}
            >
              Calculate
            </button>
            <button className="px-5 py-3 rounded-md border-2 border-blue-400 text-white font-semibold w-full"
            >
              Reset
            </button>
          </div>
          {result !== "" && (
            <div className="mt-5 p-5 flex flex-col gap-4 items-start bg-gray-700 rounded ">
              <p className="text-green-400 font-bold text-2xl">
                Esitimated Range : {result} km
              </p>
              <p className="text-green-400 font-bold text-2xl capitalize">
                Driving Condition : {DrivingCondition}{" "}
              </p>
              <p className="text-green-400 font-bold text-2xl">
                Battery Used : {100 - batteryPercent}%
              </p>
            </div>
          )}
          {error !== "" && (
            <div className="mt-5 p-5  bg-gray-700 rounded w-full ">
              <p className="text-red-400 text-center ">{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
