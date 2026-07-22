import React from "react";
import mission from "../assets/images/our-vission.png";
import future from "../assets/images/future.png";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import { badge, btn, typography, card } from "../theme";

const About = () => {
  const ref = useScrollReveal();
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();
  const ref4 = useScrollReveal();
  const ref5 = useScrollReveal();
  return (
    <div className="bg-[#091413] min-h-screen text-white">
      {/* hero  */}
      <section
        ref={ref}
        className="relative flex flex-col items-center justify-center text-center px-6 py-40 pt-48 border-b border-white/5 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#44ACFF 1px, transparent 1px), linear-gradient(90deg, #44ACFF 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#44ACFF]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <span className={badge.pill}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
            Our Story
          </span>
          <h1 className={typography.h1}>
            Building the Future of
            <br />
            Electric Mobility
          </h1>
          <p className={typography.body}>
            NovxX is creating smart, affordable, and sustainable electric
            vehicle for the next generation - starting with intelligence
            platform that will power them.
          </p>
          <Link
            to="/register"
            className={btn.primary}
          >
            Join the Future
          </Link>
        </div>
      </section>

      {/* problems -> solutions */}
      <section ref={ref1} className="reveal py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className={typography.eyeBrow}>
            Why We Exist
          </p>
          <h2 className={typography.h2}>
            A Real Problem - A Focused Solution
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${card.paddedHover} flex flex-col gap-4 card-lift`}>
              <span className="text-3xl">⚠️</span>
              <h3 className="font-bold text-xl text-[#E8EDEC]"> The Problem</h3>
              <p className="text-gray-400 leading-relaxed">
                EV users in emerging markets faces three core challenges :
                limited battery range, unreliable charging infrastructure, and
                no intelligence tools to help them make better decisions about
                their vehicle.
              </p>
            </div>

            <div className={`${card.paddedHover} card-lift flex flex-col gap-4`}>
              <span className="text-3xl"> ⚡ </span>
              <h3 className="font-bold text-xl text-[#E8EDEC]">
                {" "}
                Our Solution{" "}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                NovxX provide intelligent tools - battery analysis , efficiency
                tracking and smart insights - to solve these challenges through
                data and optimization. Software first, hardware next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* my story */}
      <section
        ref={ref2}
        className="reveal bg-[#0F1F1D] py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <p className={"text-[#44ACFF] font-semibold tracking-widest uppercase text-sm"}>
            The Founder
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
            My Story
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I started this journey with a simple goal : to build something
            meaningful for the future, with limited resources but big vision, I
            became interested in Electric Vehicles technology and started
            building this platform step by step - learning , creating, and
            sharing my journey pubilcity and code on github.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            I have been studying EV engineering from ground up. Starting with
            <span className="text-[#E8EDEC] font-semibold">
              {" "}
              How Car Works{" "}
            </span>{" "}
            to understand fundamentals then moving to
            <span className="text-[#E8EDEC] font-semibold">
              {" "}
              EV Technology Explained{" "}
            </span>
            to understand how they are built and how they work. Every feature I
            built is connected to what I'm learning about real EV engineering.
          </p>

          {/* reading progress cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#091413] border border-white/10 rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl"> 📖 </span>
              <div>
                <p className="text-[#E8EDEC] font-semibold text-sm">
                  {" "}
                  How Car Works{" "}
                </p>
                <p className="text-gray-500 text-xs mt-1"> Completed </p>
              </div>
            </div>

            <div className="bg-[#091413] border border-white/10 rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl"> 📗 </span>
              <div>
                <p className="text-[#E8EDEC] font-semibold text-sm">
                  {" "}
                  Electric Vehicle Technology Explained{" "}
                </p>
                <p className="text-[#44ACFF] text-xs mt-1">
                  {" "}
                  Currently reading{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mission */}
      <section ref={ref3} className="reveal py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className={"text-[#44ACFF] font-semibold tracking-widest uppercase text-sm"}>
              {" "}
              Our Mission{" "}
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
              Clean, Intelligent
              <br />
              transportation for everyone
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              To build the world where transportation is clean and intelligent -
              making Electric Vehicle technology smarter, more accessible and
              efficient for everyone, especially in markets that need it most.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {[
                "Intelligent software before physical hardware.",
                "Built for emerging markets, not just premium one.",
                "Open learning journey , building in public",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-[#44ACFF] mt-0.5"> ✦ </span>
                  <p className="text-gray-300 text-sm"> {point} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={mission}
              alt="Our Mission"
              className="rounded-2xl shadow-xl w-full object-cover border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* future direction */}
      <section
        ref={ref4}
        className=" revealbg-[#0F1F1D] py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
              Future Direction
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
              This is just
              <br />
              the beginning
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We are developing smart EV ecosystem that includes battery
              intelligence, charging optimization, and AI-driven insights. In
              coming year, we aim to launch vehicles, expand infrastructure, and
              bring EV mobility to most people.
            </p>
            <Link
              to="/concept"
              className="inline-flex items-center gap-2 text-[#44ACFF] font-semibold text-sm hover:gap-3 transition-all"
            >
              See the Concept Vehicle
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={future}
              alt="Future Direction"
              className="rounded-2xl shadow-xl w-full object-cover border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* cta */}
      <section ref={ref5} className="reveal py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
            Join us as we build
            <br />
            the future of mobility
          </h2>
          <p className="text-gray-400"> Be part of journey from beginning </p>
          <div className={"flex flex-col sm:flex-row gap-4"}>
            <Link
              to="/register"
              className="btn-press px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
            >
              Join Us
            </Link>
            <Link
              to="/concept"
              className={`${btn.ghost} btn-press`}
            >
              See the Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
