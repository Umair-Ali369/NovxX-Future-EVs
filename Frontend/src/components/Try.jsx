import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Try = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const check = () => {
    if (!token || !user) {
      navigate("/login");
      alert("Please login to explore real time calculation.");
    } else {
      navigate("/calculator");
    }
  };
  return (
    <section className="bg-[#0F1F1D] py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
          {" "}
          Try it Live{" "}
        </p>
        <h2 className="font-bold text-3xl md:text-5xl text-[#E8EDEC]">
          {" "}
          Try battery range estimation{" "}
        </h2>
        <p className="text-lg text-gray-400 max-w-xl">
          {" "}
          Plan every trip with confidence. Estimate your EV range and optimize
          your journey smarter.{" "}
        </p>
        <button
          onClick={check}
          className="px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
        >
          Try Now
        </button>
      </div>
    </section>
  );
};

export default Try;
