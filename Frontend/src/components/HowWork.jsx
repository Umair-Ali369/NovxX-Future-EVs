import React from "react";

const STEPS = [
  {
    num: "01",
    title: "Connect Your EV",
    desc: "Enter your vehicle details and current battery status.",
  },
  {
    num: "02",
    title: "Analyze Data",
    desc: "Our system process your data to predict performance and optimize efficiency.",
  },
  {
    num: "03",
    title: "Get smart results",
    desc: "Receive charging suggestions, optimized routes, and performance insights.",
  },
  {
    num: "04",
    title: "Stay Connected",
    desc: "Recieve real time updates and notifications for your charging session and performance.",
  },
];

const HowWork = () => {
  return (
    <section className="bg-[#091413] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3 text-center">
          {" "}
          The Processs{" "}
        </p>
        <h2 className="font-bold text-3xl md:text-5xl text-[#E8EDEC] text-center mb-16">
          {" "}
          How NovxX Works?{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-8 flex flex-col gap-3 h-full hover:border-[#44ACFF]/40 transition-colors">
                <span className="text-[#44ACFF] font-bold text-2xl">
                  {" "}
                  {step.num}{" "}
                </span>
                <h3 className="font-bold text-xl text-[#E8EDEC]">
                  {" "}
                  {step.title}{" "}
                </h3>
                <p className="text-gray-400 leading-relaxed"> {step.desc} </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#44ACFF]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWork;
