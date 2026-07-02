import React from "react";

const REASONS = [
  {
    num: "01",
    title: "Smart EV insights",
    desc: "Get clear, actionable insights to improve performence, efficiency , and overall EV experience.",
  },
  {
    num: "02",
    title: "Data-Driven Analysis",
    desc: "Analyze real EV data to understand usage pattern, trend, and performence outcome.",
  },
  {
    num: "03",
    title: "AI-Powred Optimization",
    desc: "Advance algorithm optimize charging, balance energy usage, and enhance battery performence.",
  },
];

const WhyNoxX = () => {
  return (
    <section className="bg-[#091413] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3 text-center">
          {" "}
          Why NovxX{" "}
        </p>
        <h2 className="font-bold text-3xl md:text-5xl text-[#E8EDEC] text-center mb-16">
          Build different, by design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className="bg-[#0F1F1D] border border-white/10 rounded-xl p-8 flex flex-col gap-3 hover:border-[#44ACFF]/40 transition-colors"
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
