import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const VEHICLE_TYPES = [
  {
    value: "compact_ev",
    label: "Compact EV",
    icon: "⚡",
    desc: "Smart & efficient. Best Range per km",
  },
  {
    value: "sedan",
    label: "Sedan",
    icon: "🚗",
    desc: "Balanced Performence & Range.",
  },
  {
    value: "hatchback",
    label: "Hatchback",
    icon: "🚙",
    desc: "Compact & City-Friendly.",
  },
  {
    value: "suv",
    label: "SUV",
    icon: "🚐",
    desc: "More Space, slightly lower Range.",
  },
  {
    value: "truck",
    label: "Truck",
    icon: "🛻",
    desc: "Heavy load compatabiliy, higher consumption.",
  },
];

const VehicleSetup = () => {
  const { updateProfile } = useAuth();
  const navigate = useNavigate();

  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehicleName, setVehicleName] = useState("");
  const [preferredDrivingStyle, setPreferredDrivingStyle] = useState("");
  const [preferredDrivingCondition, setPreferredDrivingCondition] =
    useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubnit = async () => {
    if (!selectedVehicle) {
      setError("Please Select the vehicle type.");
      return;
    }

    setError("");
    setLoading(true);

    const success = await updateProfile({
      vehicleType: selectedVehicle,
      vehicleName,
      preferredDrivingStyle,
      preferredDrivingCondition,
    });

    setLoading(false);
    if (success) navigate("/dashboard");
    else setError("Something went wrong. Please try again.");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen bg-gray-900 flex flex-col items-center py-24 pt-32 px-6">
      <div lassName="w-full max-w-2xl bg-gray-800 rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl md:text-4xl text-white mb-2">
            Set Up Your Vehicle
          </h1>
          <p className="text-gray-400">
            {" "}
            Help us personalize your calculaor. You can always update this
            later.
          </p>
        </div>

        {/* Vehicle Type Cards */}
        <div className="mb-6">
          <h2 className="font-semibold text-white text-lg block mb-3">
            {" "}
            Vehicle Type{" "}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {VEHICLE_TYPES.map((v) => (
              <button
                key={v.value}
                onClick={() => setSelectedVehicle(v.value)}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 text-left transition
                        ${
                          selectedVehicle === v.value
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-gray-600 bg-gray-700 hover:border-gray-400"
                        }`}
              >
                <span className="text-2xl"> {v.icon} </span>
                <p className="font-semibold text-white"> {v.label} </p>
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Name */}
        <div className="mb-6 flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-white">
            Vehicle Name
            <br />
            <span className="text-gray-400 font-normal text-sm">
              (optional — e.g. "Tesla Model 3")
            </span>
          </h2>
          <input
            type="text"
            placeholder="Enter your vehicle name..."
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
          />
        </div>

        {/*  Preferred Driving Style */}
        <div className="mb-6 flex flex-col gap-2">
          <label className="text-white text-lg font-semibold">
            Preferred Driving Style
            <br />
            <span className="text-gray-400 font-normal text-sm">
              (optional — pre-fills your calculator)
            </span>
          </label>
          <select
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={preferredDrivingStyle}
            onChange={(e) => setPreferredDrivingStyle(e.target.value)}
          >
            <option value=""> Not set </option>
            <option value="eco"> Eco </option>
            <option value="normal"> Normal </option>
            <option value="aggressive"> Aggressive </option>
          </select>
        </div>
        {/*  Preferred Driving Condtion */}
        <div className="mb-6 flex flex-col gap-2">
          <label className="text-white font-semibold">
            Preferred Driving Condition
            <br />
            <span className="text-gray-400 font-normal text-sm">
              (optional — pre-fills your calculator)
            </span>
          </label>
          <select
            value={preferredDrivingCondition}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPreferredDrivingCondition(e.target.value)}
          >
            <option value=""> Not set </option>
            <option value="city"> City </option>
            <option value="highway"> Highway </option>
            <option value="mixed"> Mixed </option>
          </select>
        </div>

        {error && (
          <p className="text-red-400 text center text-sm mb-4"> {error} </p>
        )}

        <button
          onClick={handleSubnit}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold py-3 rounded transition"
        >
          {loading ? "Saving...." : "Save & Go to Dashboard"}
        </button>

        <button
          onClick={handleSkip}
          className="w-full border border-gray-500 text-gray-300 hover:border-gray-300 font-semibold py-3 rounded transition"
        >
          Skip for Now
        </button>
      </div>
    </section>
  );
};

export default VehicleSetup;
