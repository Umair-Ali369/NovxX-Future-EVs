import React from "react";
import { FaChargingStation } from "react-icons/fa";
import { GiCarBattery } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaRoute } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon : FaChargingStation,
    title : "Smart Charging Locator",
    desc: "Instantly find nearby EV charging stations with real-time availability and smart suggestions.",
  },
  {
    icon: GiCarBattery,
    title: "Battery Intelligence System",
    desc: "Track battery health, monitor performance, and get accurate range predictions in real time.",
  },
  {
    icon: GiArtificialIntelligence,
    title: "AI Driving Assistant",
    desc: "Get smart recommendations to optimize your driving, charging, and energy usage.",
  },
  {
    icon: FaRoute,
    title: "Intelligent Route Planning",
    desc: "Plan routes based on battery level, traffic, and charging station availability.",
  },
]

const Features = () => {
  return (
    <section className="bg-[#091413] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3 text-center"> The Platform </p>
        <h2 className="font-bold text-3xl md:text-5xl text-[#E8EDEC] text-center mb-4 max-w-3xl"> 
          Smart features for the future of driving
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mb-16">
          Powerfull tools designed to make your electric driving smarter, easier and more connected
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {FEATURES.map((f) => (
            <div
            key={f.title}
            className="bg-[#0F1F1D] border border-white/10 rounded-xl p-8 flex flex-col gap-4 hover:border-[#44ACFF]/40 transition-colors"
            >
              <f.icon size={40} className="text-[#44ACFF]"/>
              <h3 className="font-bold text-xl text-[#E8EDEC]"> {f.title} </h3>
              <p className="text-gray-400 leading-relaxed">  {f.desc} </p> 
            </div>
          ))}
        </div>

        <Link
        to="/features"
        className="mt-12 px-8 py-3 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Features;
