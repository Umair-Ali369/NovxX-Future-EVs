import React, { useRef } from "react";
import { createPortal } from "react-dom";

const ShareCard = ({ results, onClose }) => {
  const cardRef = useRef(null);
  if (!results) return null;
  const {
    range,
    efficiency,
    batteryUsage,
    batteryStress,
    energyConsumption,
    drivingCondition,
  } = results;
  // Efficiency Color
  const effColor =
    efficiency === "High"
      ? "#22c55e"
      : efficiency === "Moderate"
        ? "#f59e0b"
        : "#ef4444";
  const stressColor =
    batteryStress === "Low"
      ? "#22c55e"
      : batteryStress === "Moderate"
        ? "#f59e0b"
        : "#ef4444";

  const handleCopyText = () => {
    const text = `🔋 NovxX EV Analysis Result 
    ━━━━━━━━━━━━━━━━━━━
    ⚡Estimated Range : ${range} km
    📊 Efficiency : ${efficiency}
    🔋 Battery Usage : ${batteryUsage} %
    ⚠️ Battery Stress : ${batteryStress ?? "N/A"}
    ⚙️ Energy Consumption : ${energyConsumption ? `${energyConsumption} kWh/100km` : "N/A"}
    🛣️ Driving Condition : ${drivingCondition ?? "N/A"}
    ━━━━━━━━━━━━━━━━━━━
    Analyzed With NovxX. Intelligent EV Platform.
    `;
    navigator.clipboard.writeText(text).then(() => {
      alert("Result Copied to clipboard");
    });
  };
  return createPortal(
    //  Backdrop
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4 mt-4"
      onClick={onClose}
    >
      {/* Card — stop click propagation so clicking card doesn't close */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        {/* The sharable Card */}
        <div
          ref={cardRef}
          className="bg-[#091413] border border-[#44ACFF]/30 rounded-2xl p-6 flex flex-col gap-5"
          style={{
            background: "linear-gradient(135deg, #091413 0%, #0F1F1D 100%)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#44ACFF] animate-pulse" />
              <span className="text-[#44ACFF] font-bold text-sm tracking-widest uppercase">
                NovxX
              </span>
            </div>
            <span className="text-gray-600 text-xs">EV Analysis</span>
          </div>

          {/* Main range stat */}
          <div className="text-center py-4 border-t border-b border-white/5">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
              Estimated Range
            </p>
            <p className="text-5xl font-bold text-[#44ACFF] tabular-nums">
              {range}
            </p>
            <p className="text-gray-400 text-sm mt-1"> Kilometeres </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Efficiency
              </p>
              <p className="text-lg font-bold" style={{ color: effColor }}>
                {efficiency}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Battery Usage
              </p>
              <p className="text-lg font-bold text-[#E8EDEC]">
                {batteryUsage} %
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Battery Stress
              </p>
              <p className="text-lg font-bold" style={{ color: stressColor }}>
                {batteryStress ?? "N/A"}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-1">
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Consumption
              </p>
              <p className="text-lg font-bold text-[#E8EDEC]">
                {energyConsumption ? `${energyConsumption}` : "N/A"}
              </p>
              {energyConsumption && (
                <p className="text-gray-600 text-xs">kWh/100km</p>
              )}
            </div>
          </div>

          {/* Conditions */}
          {drivingCondition && (
            <div className="flex items-center justify-center gap-2 bg-white/5 rounded-xl py-2.5">
              <span className="text-gray-500 text-xs uppercase tracking-wider">
                Condition:
              </span>
              <span className="text-[#E8EDEC] text-sm font-semibold capitalize">
                {drivingCondition}
              </span>
            </div>
          )}

          {/* Footer Branding */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="h-px flex-1 bg-white/5" />
            <p className="text-gray-600 text-xs">
              NovxX - Intelligent EV Platform
            </p>
            <div className="h-px flex-1 bg-white/5" />
          </div>
        </div>

        {/* Action buttons — outside the card so they don't appear in screenshot */}
        <div className="flex gap-3">
          <button
            onClick={handleCopyText}
            className="flex-1 py-3 rounded-xl bg-[#44ACFF] text-[#091413] font-semibold text-sm hover:bg-[#5FB8FF] transition-colors btn-press"
          >
            Copy Results
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-white/15 text-gray-300 font-semibold text-sm hover:border-white/30 transition-colors"
          >
            Close
          </button>
        </div>

        <p className="text-center text-gray-600 text-xs">
          Take a screenshot of the card to share on social media
        </p>
      </div>
    </div>,
    document.body,
  );
};

export default ShareCard;
