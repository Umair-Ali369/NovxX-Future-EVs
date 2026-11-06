import React from "react";
import { card, section, typography, divider, spacing } from "../theme";
import useScrollReveal from "../hooks/useScrollReveal";

const REASONS = [
  {
    num: "01",
    title: "Smart EV insights",
    desc: "Get clear, actionable insights to improve performance, efficiency , and overall EV experience.",
  },
  {
    num: "02",
    title: "Data-Driven Analysis",
    desc: "Analyze real EV data to understand usage pattern, trend, and performence outcome.",
  },
  {
    num: "03",
    title: "AI-Powered Optimization",
    desc: "Advanced algorithm optimize charging, balance energy usage, and enhance battery performence.",
  },
];

const WhyNoxX = () => {
  const ref = useScrollReveal();
  const cardsref = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`reveal ${section.surface} ${spacing.section} ${divider.subtle}`}
    >
      <div className="max-w-6xl mx-auto">
        <p className={typography.eyeBrow}> Why NovxX </p>
        <h2 className={typography.h2}>Build different, by design</h2>
        <div ref={cardsref} className="reveal-child grid grid-cols-1 md:grid-cols-3 gap-6">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className={`${card.paddedHover} card-lift flex flex-col gap-3`}
            >
              <span className="text-[#44ACFF]/50 font-bold text-sm tracking-widest">
                {" "}
                {r.num}{" "}
              </span>
              <h3 className="font-bold text-xl text-[#E8EDEC]">{r.title}</h3>
              <p className="text-gray-400 leading-relaxed"> {r.desc} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNoxX;
