import React from "react";
import { card, typography } from "../theme";
import useScrollReveal from "../hooks/useScrollReveal";

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

  const ref = useScrollReveal()
  const cardsref = useScrollReveal()
  return (
    <section 
    ref={ref}
    className="reveal bg-[#091413] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className={typography.eyeBrow}>
          {" "}
          The Process{" "}
        </p>
        <h2 className={typography.h2}>
          {" "}
          How NovxX Works?{" "}
        </h2>
        <div ref={cardsref} className="reveal-child grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative">
              <div className={`${card.hover} card-lift p-6 flex flex-col gap-3 h-full`}>
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
