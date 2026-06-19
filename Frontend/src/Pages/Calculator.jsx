import React, { useState } from "react";
import { useCalculator } from "../context/CalculatorContext";

const Calculator = () => {
  const [batteryPercent, setBatteryPercent] = useState("");
  const [fullRange, setFullRange] = useState("");
  const [DrivingCondition, setDrivingCondition] = useState("");
  const [acUsage, setAcUsage] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [insights, setInsights] = useState([])
  const [battery_size, setBattery_size] = useState("")
  const [temperature, setTemperature] = useState("")
  const [driving_style, setDriving_style] = useState("")
  const [vehicle_load, setVehicle_load] = useState("")
  const [terrain_type, setTerrain_type] = useState("")

  const [error, setError] = useState("");

  const { calculate, loading, EVresult, setEVResult} = useCalculator()

  const handleCalculator = ()  => {
    if(!batteryPercent || !fullRange || !DrivingCondition || !battery_size || !temperature || !driving_style || !terrain_type) {
     return setError("Please fill the all required fields to calculate.")
    } 
    if (passengers < 0 ) {
      setError("Please fill the right count of passengers")
    }
    setError("")
    calculate({batteryPercent, fullRange, DrivingCondition, acUsage, passengers, battery_size, terrain_type, temperature, driving_style, vehicle_load})
  }

  const reset = () => {
   setBatteryPercent("")
   setFullRange("")
   setDrivingCondition("")
   setAcUsage(false)
   setPassengers("")
   setInsights("")
   setBattery_size("")
   setVehicle_load("")
   setDriving_style("")
   setTerrain_type("")
   setTemperature("")
   setEVResult(null)
   setError("")
  }
 

  return (
    <section className=" bg-gray-900 px-4  ">
      <div className="flex flex-col gap-4 justify-center items-center max-w-6xl mx-auto px-4 text-center py-24 pt-32">
        <h1 className="font-bold text-3xl md:text-5xl text-white ">
         Battery & Efficiency Analyzer
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Get a detailed breakdown of your estimated range, efficiency score,
          battery stress level, and energy consumption based on real driving
          conditions.
        </p>
        <div className="p-5 m-5 lg:w-full w-auto items-center grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-700 border-2 border-gray-300 rounded-md ">
          {/* Battery Current level  */}
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Current Battery Level (%)
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
          {/* Battery size  */}
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Battery Size (kWh)
            </label>
            <input
              type="number"
              placeholder="Enter Battery Size..."
              min="0"
              max="100"
              className="w-full p-3 rounded-sm"
              value={battery_size}
              onChange={(e) => setBattery_size(e.target.value)}
            />
          </div>
          {/* Vehicle Range  */}
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
          {/* Driving Codition  */}
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Driving Condition{" "}
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
          {/* Driving Style */}
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Driving Style{" "}
            </label>
            <select
              className="w-full p-3 rounded-sm"
              onChange={(e) => setDriving_style(e.target.value)}
              value={driving_style}
            >
              <option value="">Select</option>
              <option value="eco">Eco </option>
              <option value="normal">Normal </option>
              <option value="aggressive">Aggressive </option>
            </select>
          </div>
          {/* Terrain Type  */}
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              {" "}
              * Terrain Type{" "}
            </label>
            <select
              className="w-full p-3 rounded-sm"
              onChange={(e) => setTerrain_type(e.target.value)}
              value={terrain_type}
            >
              <option value="">Select</option>
              <option value="flat">Flat </option>
              <option value="hilly">Hilly </option>
              <option value="mountainous">Mountainous</option>
            </select>
          </div>
          {/* Outside Temperature  */}
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              * Outside Temperature (°C)
            </label>
            <input
              type="number"
              placeholder="Enter temperature..."
              className="w-full p-3 rounded-sm"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          {/* Load on Vehicle  */}
          <div className="w-full flex flex-col gap-2 text-start">
            <label className="font-semibold text-white text-xl">
              * Vehicle Load (kg)
            </label>
            <input
              type="number"
              placeholder="Enter Load on vehicle..."
              className="w-full p-3 rounded-sm"
              value={vehicle_load}
              onChange={(e) => setVehicle_load(e.target.value)}
            />
          </div>
          {/* Nummber of Passengers  */}
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
          {/* AC usage or not  */}
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

         {/* CALCULATION   */}
          <div className="flex flex-col sm:flex-row gap-4 mx-auto w-full">
           <button
              onClick={handleCalculator}
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition"
            >
              {loading ? "Calculating..." : "Calculate"}
            </button>
            <button
              onClick={reset}
              className="w-full border border-blue-400 text-white font-semibold py-3 rounded transition"
            >
              Reset
            </button>
          </div>
          {/* Error message  */}
          {error && <p className="text-red-400 mx-auto py-3">{error}</p>}

          {/* RESULT OUTPUT */}
          {EVresult && (      
            <div className="bg-gray-800 col-span-2 p-4 rounded text-white mt-4 w-full text-start">
              <h2 className="font-bold text-xl mb-3 text-blue-300">
                Analysis Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <div className="bg-gray-700 p-3 rounded"> 
                   <p className="text-sm text-gray-300"> Estimated Range </p>
                   <p className="text-lg font-bold"> {EVresult.data.range} km </p>
                </div>

                <div className="bg-gray-700 p-3 rounded"> 
                   <p className="text-sm text-gray-300"> Efficiency Score </p>
                   <p className="text-lg font-bold"> {EVresult.data.efficiency} </p>
                </div>

                <div className="bg-gray-700 p-3 rounded"> 
                   <p className="text-sm text-gray-300"> Batttery Usage </p>
                   <p className="text-lg font-bold"> {EVresult.data.batteryUsage}% </p>
                </div>

                <div className="bg-gray-700 p-3 rounded"> 
                   <p className="text-sm text-gray-300"> Battery Stress Level </p>
                   <p className="text-lg font-bold"> {EVresult.data.battery_Stress ?? "N/A"}  </p>
                </div>

                <div className="bg-gray-700 p-3 rounded"> 
                   <p className="text-sm text-gray-300"> Energy Consumption </p>
                   <p className="text-lg font-bold">
                     {EVresult.data.energy_consumption ? `${EVresult.data.energy_consumption} kWh/100km` : "N/A"} 
                    </p>
                </div>

                <div className="bg-gray-700 p-3 rounded"> 
                   <p className="text-sm text-gray-300"> Driving Condition </p>
                   <p className="text-lg font-bold capatilize"> {EVresult.data.driving_Condition}  </p>
                </div>
              </div>

              {EVresult.data.insights && EVresult.data .insights.length > 0 &&
              <div className="mt-4">
                 <h3 className="font-bold text-lg text-blue-300"> Insights </h3>
                 <ul className="list-disc list-inside mt-2 space-y-1"> 
                  {EVresult.data.insights.map((msg, i) => (
                    <li key={i}> {msg} </li>
                  ))}
                  </ul>
              </div>
              }
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
