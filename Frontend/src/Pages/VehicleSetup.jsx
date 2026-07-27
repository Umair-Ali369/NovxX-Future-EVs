import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

  const handleSubmit = async () => {
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
    <section className="min-h-screen bg-[#091413] flex items-center justify-center px-6 py-16">
    {/* Ambient glow */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#44ACFF]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="relative w-full max-w-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <Link to="/">
          <h1 className="font-bold text-xl text-[#E8EDEC] tracking-tight mb-6">
            NovxX
          </h1>
        </Link>
        <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC] mb-2">
          Set Up Your Vehicle
        </h2>
        <p className="text-gray-400">
          Help us personalize your calculator. You can always update this
          later from your profile.
        </p>
      </div>

      {/* Vehicle Type Cards */}
      <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 mb-4">
        <h2 className="text-lg font-bold text-[#E8EDEC] mb-4">
          * Select Vehicle Type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {VEHICLE_TYPES.map((v) => (
            <button
              key={v.value}
              onClick={() => setSelectedVehicle(v.value)}
              className={`flex items-start gap-3 p-4 rounded-lg border-2 text-left transition-colors ${
                selectedVehicle === v.value
                  ? "border-[#44ACFF] bg-[#44ACFF]/10"
                  : "border-white/10 bg-[#091413] hover:border-white/25"
              }`}
            >
              <span className="text-2xl mt-0.5">{v.icon}</span>
              <div>
                <p className="font-semibold text-[#E8EDEC] text-sm">
                  {v.label}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{v.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Name */}
      <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 mb-4 flex flex-col gap-3">
        <div>
          <h2 className="text-lg font-bold text-[#E8EDEC]">Vehicle Name</h2>
          <p className="text-gray-500 text-sm mt-0.5">
            Optional — e.g. "Tesla Model 3"
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter your vehicle name..."
          className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] placeholder-gray-600 focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
        />
      </div>

      {/* Preferred Driving Style */}
      <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 mb-4 flex flex-col gap-3">
        <div>
          <label className="text-lg font-bold text-[#E8EDEC]">
            Preferred Driving Style
          </label>
          <p className="text-gray-500 text-sm mt-0.5">
            Optional — pre-fills your calculator
          </p>
        </div>
        <select
          className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
          value={preferredDrivingStyle}
          onChange={(e) => setPreferredDrivingStyle(e.target.value)}
        >
          <option value="">Not set</option>
          <option value="eco">Eco</option>
          <option value="normal">Normal</option>
          <option value="aggressive">Aggressive</option>
        </select>
      </div>

      {/* Preferred Driving Condition */}
      <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 mb-4 flex flex-col gap-3">
        <div>
          <label className="text-lg font-bold text-[#E8EDEC]">
            Preferred Driving Condition
          </label>
          <p className="text-gray-500 text-sm mt-0.5">
            Optional — pre-fills your calculator
          </p>
        </div>
        <select
          className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
          value={preferredDrivingCondition}
          onChange={(e) => setPreferredDrivingCondition(e.target.value)}
        >
          <option value="">Not set</option>
          <option value="city">City</option>
          <option value="highway">Highway</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mb-4">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Buttons — Fixed: added gap between them */}
      <div className="flex flex-col gap-3">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] disabled:opacity-60 transition-colors btn-press"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-[#091413]/30 border-t-[#091413] rounded-full animate-spin" />
              Saving...
            </span>
          ) : (
            "Save & Go to Dashboard"
          )}
        </button>
        <button
          onClick={handleSkip}
          className="w-full py-3.5 rounded-lg border border-white/15 text-gray-300 font-semibold hover:border-white/30 transition-colors"
        >
          Skip for Now
        </button>
      </div>
    </div>
  </section>
  );
};

export default VehicleSetup;
