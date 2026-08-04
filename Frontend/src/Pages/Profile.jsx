import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import useScrollReveal from "../hooks/useScrollReveal";
import { typography } from "../theme";
const VEHICLE_TYPES = [
  {
    value: "compact_ev",
    label: "Compact EV",
    icon: "⚡",
    desc: "Small & efficinet. Best range per kWh",
  },
  {
    value: "sedan",
    label: "Sedan",
    icon: "🚗",
    desc: "Balanced performence & range.",
  },
  {
    value: "hatchback",
    label: "Hatchback",
    icon: "🚙",
    desc: "Compact & city friendly.",
  },
  {
    value: "suv",
    label: "SUV",
    icon: "🚐",
    desc: "More space, slightly lower range.",
  },
  {
    value: "truck",
    label: "Truck",
    icon: "🛻",
    desc: "Heavy load capability, higher consumption.",
  },
];

const Profile = () => {
  const ref = useScrollReveal();
  const { user, updateProfile } = useAuth();

  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehicleName, setVehicleName] = useState("");
  const [preferredDrivingStyle, setPreferredDrivingStyle] = useState("");
  const [preferredDrivingCondition, setPreferredDrivingCondition] =
    useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setSelectedVehicle(user.vehicleType || "");
      setVehicleName(user.vehicleName || "");
      setPreferredDrivingStyle(user.preferredDrivingStyle || "");
      setPreferredDrivingCondition(user.preferredDrivingCondition || "");
    }
  }, [user]);

  const handleSave = async () => {
    if (!selectedVehicle) {
      setError("Please Select the vehicle type.");
      return;
    }

    setError("");
    setLoading(true);
    setSaved(false);

    const success = await updateProfile({
      vehicleType: selectedVehicle,
      vehicleName,
      preferredDrivingStyle,
      preferredDrivingCondition,
    });

    setLoading(false);
    if (success) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div
      ref={ref}
      className="min-h-screen bg-[#091413] flex flex-col items-center py-20 pt-28 px-6"
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
        {/* Page Header */}
        <div>
          <p className={typography.eyeBrow}> Account </p>
          <h1 className={`${typography.h3} text-center`}>Your Profile</h1>
          <p className={typography.body}>
            Manage your vehicle performance - these personalize your calculaor
            results
          </p>
        </div>

        {/* User Info */}
        <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex items-center gap-4">
          <div className="bg-[#44ACFF]/15 border border-[#44ACFF]/30 rounded-full w-14 h-14 flex items-center justify-center text-[#44ACFF] text-2xl font-bold flex-shrink-0">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-[#E8EDEC] font-semibold text-lg">{user?.name}</p>
            <p className="text-gray-500 text-sm"> {user?.email} </p>
          </div>
        </div>

        {/* Vehicle Type */}
        <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-lg font-bold text-[#E8EDEC]">Vehicle Type</h2>
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
        <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-3">
          <h2 className="text-lg font-bold text-[#E8EDEC]">Vehicle Name</h2>
          <p className="text-gray-500 text-sm -mt-1">
            Optional — e.g. "Tesla Model 3"
          </p>
          <input
            type="text"
            placeholder="Enter your vehicle name..."
            className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] placeholder-gray-600 focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
          />
        </div>

        {/* Preferences */}
        <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-bold text-[#E8EDEC]">
              Default Preferences
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              These pre-fill your calculator so you don't have to re-enter them
              every time.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Preferred Driving Style
            </label>
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

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Preferred Driving Condition
            </label>
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
        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
        {saved && (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
            <p className="text-green-400 text-sm">
              ✓ Profile saved successfully
            </p>
          </div>
        )}
        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] disabled:opacity-60 transition-colors btn-press"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-[#091413]/30 border-t-[#091413] rounded-full animate-spin" />
              Saving...
            </span>
          ) : (
            "Save Profile"
          )}
        </button>
      </div>
    </div>
  );
};

export default Profile;
