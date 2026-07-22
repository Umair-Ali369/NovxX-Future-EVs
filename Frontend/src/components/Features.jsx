import React from "react";
import { FaChargingStation } from "react-icons/fa";
import { GiCarBattery } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaRoute } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { btn, card, typography } from "../theme";
import useScrollReveal from "../hooks/useScrollReveal"

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
  const ref = useScrollReveal()
  const cardsref = useScrollReveal()
  return (
    <section 
    ref={ref}
    className="reveal bg-[#091413] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <p className={typography.eyeBrow}> The Platform </p>
        <h2 className={typography.h2}> 
          Smart features for the future of driving
        </h2>
        <p className={`${typography.body} mb-6`}>
          Powerful tools designed to make your electric driving smarter, easier and more connected
        </p>

        <div ref={cardsref}  className="reveal-child grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {FEATURES.map((f) => (
            <div
            key={f.title}
            className={`${card.paddedHover} card-lift flex flex-col gap-4`}
            >
              <f.icon size={40} className="text-[#44ACFF]"/>
              <h4 className="font-bold text-xl text-[#E8EDEC]"> {f.title} </h4>
              <p className="text-gray-400 leading-relaxed">  {f.desc} </p> 
            </div>
          ))}
        </div>

        <Link
        to="/features"
        className={`${btn.ghost} btn-press`}
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Features;
