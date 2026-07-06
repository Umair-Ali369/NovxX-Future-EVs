import charging_image from "../assets/images/charging.jpg";
import battery_image from "../assets/images/battery.png";
import aiDrive_image from "../assets/images/AI-Drive.png";
import route from "../assets/images/route.png";
import { Link } from "react-router-dom";
import { FaChargingStation } from "react-icons/fa";
import { GiCarBattery, GiArtificialIntelligence } from "react-icons/gi";
import { FaRoute, FaChartLine, FaUser } from "react-icons/fa6";

const FEATURES = [
  {
    icon: GiCarBattery,
    title: "EV Range Intelligence",
    desc: "Calculate your real-world range based on battery level, terraian, temperature, driving style, and vehicle type.",
    status: "live",
  },
  {
    icon: FaChartLine,
    title: "Battery Analysis",
    desc: "Track battery stress level, energy consumption, performance patterns across your trip.",
    status: "live",
  },
  {
    icon: GiArtificialIntelligence,
    title: "Driving Insights",
    desc: "Get smart, data-driven insights comparing you current trip against your recent history. ",
    status: "live",
  },
  {
    icon: FaUser,
    title: "Personal Dashboard",
    desc: "Your controle center - range history charts, efficiency trends, and driving condition breakdown.",
    status: "live",
  },
  {
    icon: FaChargingStation,
    title: "Charging Station Locator",
    desc: "Find nearby EV station with real time availability and intelligent recommendations",
    status: "Soon",
  },
  {
    icon: FaRoute,
    title: "AI Route Planning",
    desc: "Generate optimized route based on battery level, traffic condition, and station availability.",
    status: "Soon",
  },
];

const Features = () => {
  return (
    <div className="bg-[#091413] min-h-screen text-white">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 pt-48 border-b border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#44ACFF 1px, transparent 1px), linear-gradient(90deg, #44ACFF 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#44ACFF]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/30 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
            The Platform
          </span>
          <h1 className="font-bold text-4xl md:text-6xl text-[#E8EDEC] leading-tight">
            Powerful Features for
            <br />
            smarter EV driving
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Explore the intelligent tools behind NovxX - design to optimized
            performance, reduce costs , and transfer your EV experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="px-7 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/calculator"
              className="px-7 py-3.5 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
            >
              Try Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FEATIRES CARDS GRID */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3 text-center">
            {" "}
            What's Inside{" "}
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC] text-center mb-4">
            {" "}
            Everything the Platform Offers{" "}
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            Four features live today. Two more on the way. Built step by step,
            the right way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-[#0F1F1D] border border-white/10 rounded-xl p-7 flex flex-col gap-4 hover:border-[#44ACFF]/40 transition-colors relative"
              >
                {/* Status badge */}
                <span
                  className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-semibold ${
                    f.status === "live"
                      ? "bg-green-600/15 text-green-400 border border-green-600/25"
                      : "bg-white/5 text-gray-500 border border-white/10"
                  }`}
                >
                  {f.status === "live" ? "✓ Live" : "Coming Soon"}
                </span>

                <f.icon size={36} className="text-[#44ACFF]" />
                <h3 className="font-bold text-lg text-[#E8EDEC]">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE FEATURES DEEP DIVE */}

      {/* Battery Intelligence */}
      <section className="bg-[#0F1F1D] py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Live Feature
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
              Monitor Battery Health
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Track battery performance, analyze usage patterns, and get
              accurate range predictions to avoid unexpected stops.
            </p>
            <p className="text-gray-500 text-sm">
              Feature Vision : Predictive inights for long-term battery health
              optimization.
            </p>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 text-[#44ACFF] font-semibold text-sm hover:gap-3 transition-all"
            >
              Try the Analyzer →
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={battery_image}
              alt="Battery Intelligence"
              className="rounded-2xl shadow-xl w-full object-cover border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Smart Driving */}
      <section className="bg-[#0F1F1D] py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Live Feature
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
              Smart Driving Powered By Insights
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Get personalized recommendations to improve driving efficiency,
              optimize charging time, and reduce energy waste - based on your
              actual history.
            </p>
            <p className="text-gray-500 text-sm">
              Feature Vision : AI that learn your dirving behavior and adopt
              automatically.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 text-[#44ACFF] font-semibold text-sm hover:gap-3 transition-all"
            >
              View Your Dashboard →
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={aiDrive_image}
              alt="Smart Driving"
              className="rounded-2xl shadow-xl w-full object-cover border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Coming soon Charging + Route */}
      <section className="bg-[#0F1F1D] py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3 text-center">
            On the Roadmap
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC] text-center mb-16">
            What's Coming Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <img
                src={charging_image}
                alt="Charging Stations"
                className="rounded-2xl border border-white/10 w-full object-cover h-52"
              />
              <h3 className="font-bold text-xl text-[#E8EDEC]">
                Charging Station Locator
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Locate nearby EV charging stations with real-time availability
                and intelligent recommendations based on your location and
                battery level. Expanding with smart charging networks.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <img
                src={route}
                alt="Route Planning"
                className="rounded-2xl border border-white/10 w-full object-cover h-52"
              />
              <h3 className="font-bold text-xl text-[#E8EDEC]">
                Intelligent Route Planning
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Generate optimized routes based on your battery level, traffic
                condition, and charging availability. Fully automated trip
                planning with zero range anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED EXPERIENCE + CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
            One Platform
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
            One Connected Experience
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            From route plane to battery insights and charging - every feature
            work together seamlessly to give you a smooth and intelligent
            driving experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              to="/register"
              className="px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/calculator"
              className="px-8 py-3.5 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
            >
              Try Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
