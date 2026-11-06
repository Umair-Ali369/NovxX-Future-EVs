// FILE: src/pages/Stations.jsx
// ACTION: Replace your existing Stations.jsx
// Real fetch logic is preserved — when your backend is ready,
// just set COMING_SOON to false and the full station grid will render.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ── Toggle this to false when your stations backend is live ──
const COMING_SOON = true;

const Stations = () => {
  const [stations, setStations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (COMING_SOON) return; // skip fetch until backend is ready
    const fetchStations = async () => {
      try {
        const res = await fetch("http://localhost:9000/stations");
        const data = await res.json();
        setStations(data);
      } catch (err) {
        console.error("Error fetching stations:", err);
      }
    };
    fetchStations();
  }, []);

  const filtered = stations.filter((s) =>
    s.location?.toLowerCase().includes(search.toLowerCase())
  );

  // ── Coming Soon screen ──
  if (COMING_SOON) {
    return (
      <div className="min-h-screen bg-[#091413] flex flex-col items-center justify-center px-6 py-32 text-center">

        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#44ACFF]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/30 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
            Coming Soon
          </span>

          <h1 className="font-bold text-4xl md:text-6xl text-[#E8EDEC] leading-tight">
            EV Charging
            <br />
            Station Network
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            We are building a real-time charging station map with GPS
            integration and live slot availability. This feature launches when
            the infrastructure is ready.
          </p>

          {/* What's coming */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
            {[
              {
                icon: "🗺️",
                title: "Real Maps",
                desc: "Live map view of all nearby charging stations",
              },
              {
                icon: "📍",
                title: "GPS Integration",
                desc: "Navigate directly to any station from the app",
              },
              {
                icon: "⚡",
                title: "Live Availability",
                desc: "Real-time slot count and charger status",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-2 text-left"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold text-[#E8EDEC] text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs — don't dead-end the user */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/calculator"
              className="px-7 py-3 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
            >
              Try the Calculator
            </Link>
            <Link
              to="/dashboard"
              className="px-7 py-3 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Full station grid (shown when COMING_SOON = false) ──
  return (
    <section className="bg-[#091413] min-h-screen px-6 py-24 pt-32">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3">
            Station Network
          </p>
          <h1 className="font-bold text-3xl md:text-5xl text-[#E8EDEC] mb-4">
            EV Charging Stations
          </h1>
          <p className="text-lg text-gray-400 max-w-xl">
            Find nearby EV charging stations with real-time availability and
            slot information.
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-8 p-3 rounded-lg bg-[#0F1F1D] text-[#E8EDEC] border border-white/10 focus:outline-none focus:border-[#44ACFF]/50 placeholder-gray-600"
        />

        {/* Station grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20">
            No stations found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => {
              const isAvailable = s.slots > 0;
              return (
                <div
                  key={s.id}
                  className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-3 hover:border-[#44ACFF]/40 transition-colors relative"
                >
                  {/* Status badge */}
                  <span
                    className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-semibold ${
                      isAvailable
                        ? "bg-green-600/20 text-green-400 border border-green-600/30"
                        : "bg-red-600/20 text-red-400 border border-red-600/30"
                    }`}
                  >
                    {isAvailable ? "Available" : "Busy"}
                  </span>

                  <h3 className="text-lg font-bold text-[#E8EDEC]">
                    ⚡ {s.name}
                  </h3>
                  <p className="text-gray-400 text-sm">📍 {s.location}</p>
                  <p className="text-gray-400 text-sm">🔌 {s.type} Charging</p>
                  <p className="text-gray-400 text-sm">
                    📊 {s.slots} / {s.totalSlots} Slots Available
                  </p>
                  <p className="text-gray-400 text-sm">
                    📏 {s.distance} km away
                  </p>

                  <div className="flex gap-3 mt-2">
                    <button className="px-4 py-2 rounded-lg bg-[#44ACFF] text-[#091413] text-sm font-semibold hover:bg-[#5FB8FF] transition-colors">
                      View
                    </button>
                    <button className="px-4 py-2 rounded-lg border border-white/15 text-[#E8EDEC] text-sm font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors">
                      Navigate
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Stations;
