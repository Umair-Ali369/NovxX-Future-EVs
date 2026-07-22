import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import useScrollReveal from "../hooks/useScrollReveal"

const VEHICLE_TYPES = [
  { value: "compact_ev", label: "Compact EV", icon: "⚡" },
  { value: "sedan", label: "Sedan", icon: "🚗" },
  { value: "hatchback", label: "Hatchback", icon: "🚙" },
  { value: "suv", label: "SUV", icon: "🚐" },
  { value: "truck", label: "Truck", icon: "🛻" },
];

const Profile = () => {
  const ref = useScrollReveal()
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
    if (success) setSaved(true);
    // else setError("Something went wrong. Please try again.");
  };
  return (
    <div ref={ref} className="min-h-screen bg-gray-900 flex flex-col items-center py-24 pt-32 px-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-2"> Your Profile </h1>
        <p className="text-gray-400 mb-8">
          {" "}
          Manage your vehicle preference , these personalize your calculator
          results
        </p>

        {/* User Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6 flex items-center gap-4">
          <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-white text-2xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-white font-semibold text-lg"> {user?.name} </p>
            <p className="text-gray-400 text-sm"> {user?.email} </p>
          </div>
        </div>

        {/* Vehicle Type */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4"> Vehicle Type </h2>
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
        <div className="bg-gray-800 rounded-lg p-6 mb-6 flex flex-col gap-3">
          <h2 className="text-xl font-bold text-white"> Vehicle Name </h2>
          <input
            type="text"
            placeholder='e.g "Tesla Model 3"'
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
          />
        </div>

        {/* Preferences */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">
            {" "}
            Default Preferences{" "}
          </h2>
          <p className="text-gray-400 text-sm -mt-2">
            {" "}
            These pre-fill your calculaor , so you don't have need to re-enter
            them every time{" "}
          </p>
          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold">
              Preferred Driving Style
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

          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold">
              Preferred Driving Condition
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
        </div>

        {error && <p className="text-red-400 text center text-sm mb-4"> {error} </p>}
        {saved && (
          <p className="text-green-400 text-center text-sm mb-4">
            {" "}
            Profile Saved Successfully
          </p>
        )}

        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold py-3 rounded transition"
        >
          {loading ? "Saving...." : "Save Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
