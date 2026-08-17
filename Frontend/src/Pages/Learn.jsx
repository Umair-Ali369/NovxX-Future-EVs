import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import { useState } from "react";

// TOPICS DATA
const TOPICS = [
  // BATTERY BASICS
  {
    id: "Battery",
    icon: "🔋",
    title: "Battery Basics",
    subtitle: "How EV Batteries store and release energy",
    color: "#44ACFF",
    content: [
      {
        heading: "What is a battery pack?",
        text: "A battery pack is not a single large battery - it is made up of thousands of small lithium-ions Cells grouped into modules, and modules grouped into pack. A typical EV battery pack contain betweeen 3,000, 8,000 individual cells. Together they store electrical energy measured in kilo-watt-hours (kWh). The higher the kWh, the more energy stored, and generally longer the range. ",
      },
      {
        heading: "State Of Charge (SOC)",
        text: "SOC is the percentage of energy reamaining in the battery - similar to fuel guage. 100% mean fully charged , 0% mean full empty. However, most EVs never actually charged to 100% or discharege to 0% in normal use. Battery Mangement System (BMS) keep the battery between rougly 10% and 90% to protect the cells and extent their lifespan.  ",
      },
      {
        heading: "Why Temperature Matters?",
        text: "Lithium-Ion batteries are sensitive to temperature. In cold weather ( below 10°C ), chemical reactions in the cell slow down - reducing available energy and therefore range. In very hot ( above the 35°C ), the battery degrates faster and the thermal managment system works harder to cool it, which itself use energy. The ideal temperature for most EV batteries is between 20°C and 30°C. ",
      },
      {
        heading: "Battery Degradation",
        text: "Over time and with repeated charging cycles. The EV batteries lose some of their energy capacity - this is called degradation. It is normal and expected. Most modern EVs reatain around 80% of their original capacity in after 8 years or 160,000 km. Factors that accelerate degradation include frequent fast charging, consistently charging to 100%, and operating in extreme temeprature.   ",
      },
      {
        heading: "Battery Management System (BMS)",
        text: "The BMS is the braing of battery pack. It moitors the voltage, temeperature and state of charge of every cell in real time. It balanced the cells to ensure they charge and discharge evently, prevent overcharging or deep charge, manages thermal system, and communicates the battery status to the vehicle's main computer. Without BMS the battery pack is unsafe and unreliable",
      },
    ],
    keyFacts: [
      "EV batteries are measured in kWh - higher = longer range.",
      "Ideal operating temperature is : 20°C to 30°C ",
      "BMS protects cells by limiting charges ~10 - 90% SOC",
      "Most batteries reatain ~80% capacity after 8 years",
      "Cold weather reduces range - Warm weather accelerates wear",
    ],
  },
  // CHARGING BASICS
  {
    id: "charging",
    icon: "⚡",
    title: "Charging Basics",
    subtitle: "AC vs DC, charging levels, and best practices",
    color: "#22c55e",
    content: [
      {
        heading: "AC vs DC Charging",
        text: "All EVs batteries store DC (Direct Current) electricity. The grid supplies AC (Alternative Current). When you charge at a home or at a standard charger, AC power goes through the car's onboard charger which converts it to DC before if reaches to the battery. With DC fast charging, the conversion happens outside the car - a large external charger send DC directly into the battery, which is why it charges much faster ",
      },
      {
        heading: "Charging Levels",
        text: "Level 1 (Slow) : Standard household outlet (120V or 230V). Adds roughly 10-20 km of range per hour. Best for overnight charging at home. Level 2 (Fast): Dedicated home charger or public AC charger (7kW - 22kW). Adds 50-150 km per hour. Most common for daily use. Level 3 (DC Fast Charge) : High-Power DC chargers (50kW - 350kW). Can charge from 20% - 80% in 20-45 minutes. Best for long trips, not recommeded for daily use.   ",
      },
      {
        heading: "Why Stop at 80%?",
        text: "DC fast chargers slow down significantly after 80% state of charge. This is intentional - lithium cells are more fragile at high charge levels and charging too fast at hight SOC damage them. The battery management system reduce charging speed to protect the cells. This mean going 80% to 100% taking as long as going from 20% to 80%. For long trips, it is often faster to stop at 80% and continue driving.  ",
      },
      {
        heading: "Charging at Home",
        text: "Home charging is more convenient and cheapest way to charge the EV. Most EV owners charge overnight usging a Level 3 home charger (wallbox). The car is typically plugged in when parked and charged during off-peak electricity hours when rates are lowest. A full charge overnight is ready for the morning - similar to charging a smartphone.",
      },
      {
        heading: "Charging Best Practices",
        text: "For daily use, keep SOC between 20% and 80% and maximize the battery lifespan. Only charge 100% before a long trip. Avoid letting the battery drop below 10% regularly. Pre-Condition the battery in cold weather before driving - many EVs allow scheduling this while still plugged in. Avoid DC fast charging as your primary charging method - it generates more heat and accelerates degradation.",
      },
    ],
    keyFacts: [
      "AC charging convert power inside the car - slower",
      "DC charging converts outside the car - much faster",
      "Level 3 chargers can add 200+ km in 20–30 minutes",
      "Charging slows after 80% to protect the battery",
      "Daily charging : keep between 20% - 80% for battery health",
    ],
  },
  // ELECTRIC MOTORS
  {
    id: "motors",
    icon: "⚙️",
    title: "Electric Motors",
    subtitle: "How electric motor power EVs and why they are better",
    color: "#a855f7",
    content: [
      {
        heading: "How an Electric Motor Works?",
        text: "An electric motor converts electrical energy into mechanical energy (rotation). It works using the principle of electromagnetism - when electric current flows through a wire in a magnetic field, it creates a force that cause the wire to move. In an EV motor, this priciple causes a rotor (rotating part) to spin inside a stator (stationary part). The spinning is connected to the wheels through a drivetrain.",
      },
      {
        heading: "Types of EV Motors",
        text: "The most common type in modern EVs is Permenant Magnet Synchronous Motor (PMSM). It uses permenant magnet on the rotor and is highly efficient, compact and powerfull. Another common type is AC Induction Motor, used famously in early Tesla Models - it has no permenant magnet and is durable and cheaper to manufacture. Both types are far simpler mechanically than combustion engines, with far fewer moving parts.",
      },
      {
        heading: "Instant Torque",
        text: "One fo the biggest advantage of electric motors is instant torque. A combustion engine need to build up RPM to reach peak torque. An electric motore delivers maximum torque 0 RPM - the moment you press the acceletor. This is why EVs feel so responsive and quick off the lines, even modest one. A 200hp electric motor oftern feel faster in everyday driving than a 300hp combustion engine. ",
      },
      {
        heading: "Fewer Moving Parts",
        text: "A combustion engine has hundred of moving parts - piston, crankshaft, camshaft, valves, timing belt, exhaust system and more. An electric motor essentially one moving part - the rotor. This mean less wear, less maintenance, no oil change, no sparks plugs, no exhaust system and generally much higher reialbility. Electric motors can last for millions of rotations without maintenance.",
      },
      {
        heading: "Single Speed Transmission",
        text: "Most EVs use single speed transmission - no gear changes needed. Electric motors can operate efficiently across a very wide RPM range, unlike combustion engine which need multiple gear to stay in their efficient RPM band. This simplifies the drivetrain significanlty and eliminates the jerky feeling of gear changes. Some high-performence use two-speed gearbox for maximum efficiency at both low and high speeds.",
      },
    ],
    keyFacts: [
      "Electric motor deliver instant torque from 0 RPM",
      "PMSM are the most common motors for modren EVs",
      "One moving part vs hundreds in combustion engine",
      "No gear changes needed - one speed transmission",
      "Far less maintenance than combustion engine",
    ],
  },
  // REGENERATIVE BRAKING
  {
    id: "regen",
    icon: "🔄",
    title: "Regenerative Braking",
    subtitle: "How EVs recover energy when slowing down",
    color: "#f59e0b",
    content: [
      {
        heading: "What is regenerative braking?",
        text: "Regenerative braking is a system that recovers kinetic energy when an EV slow down convert it back into electrical energy to recharge the battery. In a conventional car, braking energy is wasted as heat in the brake pads. In an EV, the electric motor runs in reverse when decelerating - acting as generator - and sends that energy back to the battery. This can recover 10% - 30% of energy that would otherwise lost.",
      },
      {
        heading: "How the Motor Become a Generator?",
        text: "The same electric motor that drives the wheels can work in reverse. When driver liftoff the accelerator or applies the brake, the vehicel's kinetc energy (motion) drives the motor backwards. A motor running in reverse generate electricity instead of consuming it. This electricity flows back into the battery pack through the inverster and BMS. The resistence created by the generator also slow the car - this is felt an engine braking.",
      },
      {
        heading: "One Pedal Driving",
        text: "Many EVs offer one pedal driving mode where regenerative braking is strong enough to bring the car to a complete stop without the brake pedal. The driver simply liftoff the accelerator to slow down - the regen system does the reset. This takes some getting used to but natural quickly. It reduces wear on the physical brakes and maximise energy recovery in the stop - start city traffic. ",
      },
      {
        heading: "Regen in City vs Highway",
        text: "Regenerative braking is most effective in city driving with frequent stops and starts. Every time the car decelerates, energy is recovered. On the highway, there are few opportunities to slow down, so regen contributes less. This is one reason why EVs oftern achieve better range in city driving than highway driving - the oppsite of combustion enging vehicles which are more efficient on the highway ",
      },
      {
        heading: "Regen Settings",
        text: "Most modren EVs allow driver to adjust regenerative braking strength. Light regen feels more like the conventional car - the vehicle coasts when you lift off the accelerator. Strong regen slow down the car aggressively. Some driver prefer light regen on highway for a relaxed driving feel and switch to strong regen in city traffic for maximum energy recovery. The optimal setting depend on driving style and condition.",
      },
    ],
    keyFacts: [
      "Recovers 10–30% of energy that would otherwise be lost",
      "Motor runs in reverse to generate electricity when braking",
      "One-pedal driving uses regen to stop without brake pedal",
      "Most effective in city driving with frequent stops",
      "Adjustable regen strength — light to strong",
    ],
  },
  // RANGE TIPS
  {
    id: "range",
    icon: "📏",
    title: "Range Tips",
    subtitle: "How to get the most killometers from every charge?",
    color: "#44ACFF",
    content: [
      {
        heading: "Undersand What Effect Range",
        text: "EV range is not fixed number - it varies based on many factors. The biggest ones are : speed (faster = more air resistence = less range) , temperature ( cold reduce range significanly), AC/heating usage (climate contorl uses battery power), driving style (aggressive acceleration wastes energy ), terrain (hills require more energy), vehicle load (more load = more energy needed). Understanding these factor lets you actively manage your range. ",
      },
      {
        heading: "Speed and Aerodynamics",
        text: "Air resistence (drag) increase with the squar of speed - mean doubling you speed quadruples the drag force. Driving at 120km/h uses significantly more energy per killometer than driving at 80km/h. For maximum range on a long trip, driving at a steady moderate speed is the single most effective strategy. Using cruis control also helps maintain a consistant speed and avoids unnecessory accelerations.",
      },
      {
        heading: "Manage Climate Control",
        text: "Heating and air conditioning are among the biggest range consumers in an EVs. Unlike combustin engine which produce waste heat that can warm the cabin for free, EVs must use battery power for heating. In cold weather, using seat heaters and steering wheel heaters instead of main cabin heater is more efficient. Pre-conditioning the car while plugged in - warming or cooling it before you leave - mean you use grid power insted of battery power. ",
      },
      {
        heading: "Use Eco Mode and Regen",
        text: "Most EVs have Eco driving mode that limits accelerating power and maximise the regenerative braking. Using Eco mode in city driving can extend range by 10 - 20%. Combine this with strong regenerative braking setting to recover maximum energy in stop - start traffic. Plane your braking early - lift off the accelerator well before you need to stop to let regen recover maximum amount of energy.",
      },
      {
        heading: "Plane Charging Stops Wisely",
        text: "For long trip, plane your charging stops before you leave. Aim to arrive at chargers with 15 - 20% remaining rather than running close to empty - this reduce range anxiety and give a buffer for unexpected detours. Charge to 80% and move on rather than waiting for 100% - the last 20% takes as long as the fist 80% on the fast charger. Charging during meals or reset break mean you lose no extra time. ",
      },
    ],
    keyFacts: [
      "Speed has the biggest impact — slower = more range",
      "Cold weather can reduce range by 20–40%",
      "Pre-condition cabin while plugged in to save battery",
      "Eco mode + strong regen can add 10–20% range in city",
      "Charge to 80% on long trips — last 20% takes longest",
    ],
  },
];

// TOPIC CARD (HUB)
const TopicCard = ({ topic, onClick, isActive }) => (
  <button
    onClick={() => onClick(topic.id)}
    className={`flex flex-col items-start gap-3 p-6 rounded-xl border-2 text-left transition-all w-full ${
      isActive
        ? "border-[#44ACFF] bg-[#44ACFF]/10"
        : "border-white/10 bg-[#0F1F1D] hover:border-white/25"
    }`}
  >
    <span className="text-3xl"> {topic.icon} </span>
    <div>
      <p className="font-bold text-[#E8EDEC] text-lg"> {topic.title} </p>
      <p className="text-gray-500 text-sm mt-1"> {topic.subtitle} </p>
    </div>
    <span
      className="text-xs px-2.5 py-1 rounded-full font-semibold mt-1"
      style={{
        color: topic.color,
        backgroundColor: `${topic.color}15`,
        border: `1px solid ${topic.color}30`,
      }}
    >
      {isActive ? "Reading" : "Read →"}
    </span>
  </button>
);

// ARTICLE SECTION
const ArticleSection = ({ topic }) => {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      className="reveal bg-[#0F1F1D] border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col gap-8"
    >
      {/* Article header */}
      <div className="flex items-start gap-4 pb-6 border-b border-white/5">
        <span className="text-5xl"> {topic.icon} </span>
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-1"
            style={{ color: topic.color }}
          >
            Learn EV
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#E8EDEC]">
            {topic.title}
          </h2>
          <p className="text-gray-400 mt-1"> {topic.subtitle} </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="flex flex-col gap-8">
        {topic.content.map((content, i) => (
          <div key={i} className="flex flex-col gap-3">
            <h3 className="text-lg font-bold" style={{ color: topic.color }}>
              {" "}
              {content.heading}{" "}
            </h3>
            <p className="text-gray-400 leading-relaxed"> {content.text} </p>
          </div>
        ))}
      </div>

      {/* Key Facts */}
      <div className="bg-[#091413] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-sm font-bold text-[#E8EDEC] uppercase tracking-wider">
          Key Facts
        </h3>
        <ul className="flex flex-col gap-2">
          {topic.keyFacts.map((fact, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-gray-300"
            >
              <span
                style={{ color: topic.color }}
                className="mt-0.5 flex-shrink-0"
              >
                ✦
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </div>

      {/* Connect to Calculator */}
      {topic.id === "range" && (
        <div className="bg-[#44ACFF]/5 border border-[#44ACFF]/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[#44ACFF] font-semibold text-sm">
              Put it into practice
            </p>
            <p className="text-gray-400 text-sm mt-0.5">
              Use the NovxX calculator to see how these factors affect your real
              EV range.
            </p>
          </div>
          <Link
            to="/calculator"
            className="whitespace-nowrap px-5 py-2.5 rounded-lg bg-[#44ACFF] text-[#091413] text-sm font-semibold hover:bg-[#5FB8FF] transition-colors flex-shrink-0"
          >
            Try Calculator →
          </Link>
        </div>
      )}
    </section>
  );
};

// MAIN LEARN PAGE
const Learn = () => {
  const [activeTopic, setActiveTopic] = useState("battery");
  const heroRef = useScrollReveal();
  const cardRef = useScrollReveal();

  const currentTopic = TOPICS.find((t) => t.id === activeTopic);

  const handleClickTopic = (id) => {
    if (activeTopic === id) {
      setActiveTopic(null)
      return
    }
    setActiveTopic(id);
    setTimeout(() => {
      document.getElementById("article")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };
  return (
    <div className="bg-[#091413] min-h-screen">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 pt-40 border-b border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#44ACFF 1px, transparent 1px), linear-gradient(90deg, #44ACFF 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#44ACFF]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/30 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
            EV Knowledge Center
          </span>
          <h1 className="font-bold text-4xl md:text-6xl text-[#E8EDEC] leading-tight">
            Learn EV
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Clear , practical explanations of how electric vehicles work. Build
            from real EV engineering knowledge to help you understand the
            technology behind the platform
          </p>
        </div>
      </section>

      {/* TOPIC CARD */}
      <section ref={cardRef} className="reveal max-w-6xl mx-auto px-6 py-16">
        <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3 text-center">
          5 Topics
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#E8EDEC] text-center mb-10">
          Choose a Topic to Explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPICS.map((topic, i) => (
            <div
              key={topic.id}
              className="reveal-child"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <TopicCard
                topic={topic}
                onClick={handleClickTopic}
                isActive={activeTopic === topic.id}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLE */}
      <div id="article" className="max-w-4xl mx-auto px-6 pb-24">
        {currentTopic && (
          <ArticleSection key={activeTopic} topic={currentTopic} />
        )}
      </div>

      {/* BOTTOM CTA */}
      <section className="border-t border-white/5 py-20 px-6 text-center bg-[#0F1F1D]/40">
        <h2 className="font-bold text-2xl md:text-3xl text-[#E8EDEC] mb-4">
          Ready to apply what you learned?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Use the NovxX battery analyzer to see how temperature, terrain,
          driving style, and load affect your real world range.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/calculator"
            className="px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
          >
            Try the Calculator
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-3.5 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
          >
            View Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Learn;
