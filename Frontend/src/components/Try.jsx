import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Try = () => {
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  const navigate = useNavigate()
  const check = () => {
    if(!token || !user) {
      navigate("/login")
      alert("Please login to explore real time calculation.")
    } else {
      navigate("/calculator")
    }
  }
  return (
    <section className="flex flex-col gap-6 justify-center p-5 items-center md:py-20 sm:py-16 py-12">
      <h2 className="font-bold text-3xl md:text-6xl text-white text-center ">
        {" "}
        Try Battery Range Estimation{" "}
      </h2>
      <p className="text-xl md:text-2xl text-gray-400">
        {" "}
        Plan every trip with confidence. Estimate your EV range and optimize
        your journey smarter{" "}
      </p>
      <button onClick={check} className="px-10 py-3 rounded-md bg-blue-500 text-white text-xl font-semibold ">
        Try Now
      </button>
    </section>
  );
};

export default Try;
