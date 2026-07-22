import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal"

const ConceptVehicle = () => {

  const ref = useScrollReveal()
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const ref4 = useScrollReveal()
  const ref5 = useScrollReveal()
  const ref6 = useScrollReveal()


  return (
    <div className="bg-[#091413] min-h-screen text-white">
      {/* Hero Section */}
      <section ref={ref} className="flex flex-col items-center justify-center text-center px-6 py-40 pt-48 border-b border-gray-800">
        <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-4">
          {" "}
          NovxX Concept Vehicle{" "}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-6">
          {" "}
          The EV We Are Building Toward{" "}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-10">
          Not just a car. A moving intelligence system. Designed from ground up
          to be software-first, efficiency-focused, and build for emerging
          market.
        </p>
        <Link
          to="/features"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded font-semibold transition"
        >
          Explore the Platform
        </Link>
      </section>

      {/* Philosphy section */}
      <section ref={ref1} className="reveal max-w-6xl mx-auto px-6 py-24">
        <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3 text-center">
          {" "}
          Our Philosphy{" "}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {" "}
          Build on Three Core Beliefs{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-800 items-center rounded-xl p-8 flex flex-col gap-4">
            <div className="text-4xl "> 💻 </div>
            <h3 className="text-xl font-bold text-white">
              {" "}
              Software First EV{" "}
            </h3>
            <p className="text-gray-400 leading-relaxed text-center">
              {" "}
              The intelligence of the vehicle lives in its software. Every
              system such as battery management, range prediction, driving
              feedback etc is driven by data and logic, guesswork. The hardware
              servers the software.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 items-center rounded-xl p-8 flex flex-col gap-4">
            <div className="text-4xl "> ⚡ </div>
            <h3 className="text-xl font-bold text-white">
              {" "}
              Efficiency Focused{" "}
            </h3>
            <p className="text-gray-400 leading-relaxed text-center">
              {" "}
              In emerging market, every kilometer matters. NovxX is engineered
              to extract maximum from every charge through smart driving
              analysis, terrain awareness, and real time load optimization.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 items-center rounded-xl p-8 flex flex-col gap-4">
            <div className="text-4xl "> 🧠 </div>
            <h3 className="text-xl font-bold text-white">
              {" "}
              Smart Battery Intelligence{" "}
            </h3>
            <p className="text-gray-400 leading-relaxed text-center">
              {" "}
              The battery is the heart of an EV. NovxX treat it as a living
              system monitoring stress level, range patterns and temperature
              impact to protect it and maximum its lifespan.
            </p>
          </div>
        </div>
      </section>

      {/* Cokpit Version */}
      <section ref={ref2} className="reveal border-t border-gray-800 py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* visual paceholder */}
          <div className="w-full lg:w-1/2 bg-gray-900 border border-gray-800 rounded-2xl h-72 flex flex-col items-center justify-center gap-4">
            <span className="text-7xl"> 🖥️ </span>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              {" "}
              Cokpit Render --- Coming Soon{" "}
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
              Cockpit Version
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              A Dashboard That Think With You
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The NovxX cockpit is not the collection of screens - it is single
              intelligence interface. It surfaces only what matters : you
              current range, battery stress level, efficiency score, and next
              smart action to take.
            </p>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#44ACFF] mt-1"> ✦ </span>
                Minimal, distraction-free layout
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#44ACFF] mt-1"> ✦ </span>
                Real time battery and efficiency readout
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#44ACFF] mt-1"> ✦ </span>
                Smart alerts based on driving behavior
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#44ACFF] mt-1"> ✦ </span>
                Adoptive to terrain, temperature , and load
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Battery Intelligence */}
      <section ref={ref3} className="reveal border-t border-gray-800 py-24 px-6 bg-gray-900/40">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* visual placeholder */}
          <div className="w-full lg:w-1/2 bg-gray-900 border border-gray-800 rounded-2xl h-72 flex flex-col items-center justify-center gap-4">
            <span className="text-7xl"> 🔋 </span>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              {" "}
              Battery System --- Coming Soon{" "}
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
              Battery Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              The Brain Behind the Battery
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Most Ev tells you your battery percentage. NovxX tells you what
              that percentage mean , how far you can actually go given your
              driving style, the temperature today, the terrain a head, and how
              you have been driving all week.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { label: "Stress Monitoring", icon: "📊" },
                { label: "Temperature Awareness", icon: "🌡️" },
                { label: "Usage Pattern Tracking", icon: "📈" },
                { label: "Lifespan Optimization", icon: "🛡️" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center gap-3"
                >
                  <span className="text-2xl"> {item.icon} </span>
                  <p className="text-sm font-semibold text-gray-300">
                    {" "}
                    {item.label}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Mobility */}
      <section ref={ref4} className=" reveal border-t border-gray-800 py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 bg-gray-900 border border-gray-800 rounded-2xl h-72 flex flex-col items-center justify-center gap-4">
            <span className="text-7xl">🛣️</span>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Future Vision — Coming Soon
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
              Future Mobility
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Building the Road Ahead
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The NovxX concept is not just the vehicle - it is foundation of
              mobility ecosystem. One where the car, the charging station, the
              driver work together as one connection, intelligent system.
            </p>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#44ACFF] mt-1"> ✦ </span>
                Connected charging infrastructure
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#44ACFF] mt-1"> ✦ </span>
                AI-Driven route and range planning
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#44ACFF] mt-1"> ✦ </span>
                Designed for emerging market first
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#44ACFF] mt-1"> ✦ </span>
                Affordable, sustainable, and scalable
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline / Roadmap */}
      <section ref={ref5} className="reveal border-t border-gray-800 py-24 px-6 bg-gray-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3">
            The Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            {" "}
            Where We Are. Where We Are Going{" "}
          </h2>
          <div className="flex flex-col gap-6 text-left">
            {[
              {
                phase: "Phase 1 - Now",
                title: "Building the Intelligence Platform",
                desc: "The NovxX web platform - battery analyzer, smart insights, dashboard and EV calculator - is live and growing.",
                status: "active",
              },
              {
                phase: "Phase 2 - Near Future",
                title: "AI-Powered Driving Assistant",
                desc: "Moving from logic based insights to AI-Driven recommendation that learn from your driving behaviour over time.",
                status: "upcoming",
              },
              {
                phase: "Phase 3 - Future",
                title: "Hardware Prototype",
                desc: "First physical NovxX concept vehicle prototype software first, designed for emerging market roads and infrastructre",
                status: "upcoming",
              },
              {
                phase: "Phase 4 - Vision",
                title: "Full Mobility Eocsystem",
                desc: "NovxX Vehiles, charging network, and platform operating as one connected ecosystem across emerging market.",
                status: "upcoming",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-6 p-6 rounded-xl border ${
                  item.status === "active"
                    ? "border-[#44ACFF] bg-[#44ACFF]/5"
                    : "border-gray-800 bg-gray-900"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full mt-1 ${
                      item.status === "active" ? "bg-[#44ACFF]" : "bg-gray-700"
                    }`}
                  />
                  {i < 3 && <div className="w-px flex-1 bg-gray-800 min-h-8" />}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      item.status === "active"
                        ? "text-[#44ACFF]"
                        : "text-gray-500"
                    }`}
                  >
                    {item.phase}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ref6} className="reveal border-t border-gray-800 py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be Part of What We Are Building
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          The platform is live. The vision is clear. Start using NovxX today and
          grow with us as we build toward the future of electric mobility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded font-semibold transition"
          >
            Join NovxX
          </Link>
          <Link
            to="/about"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 px-8 py-3 rounded font-semibold transition"
          >
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConceptVehicle;
