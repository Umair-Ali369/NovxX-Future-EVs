import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { btn, typography } from "../theme";
import useScrollReveal from "../hooks/useScrollReveal";

const Try = () => {
  const [showMsg, setShowMsg] = useState(false);
  const navigate = useNavigate();

  const ref = useScrollReveal()
  
  const check = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token || !user) {
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 3000);
    } else {
      navigate("/calculator");
    }
  };
  return (
    <section 
    ref={ref}
    className="reveal bg-[#0F1F1D] py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <p className={typography.eyeBrow}>
          Try It Live
        </p>
        <h2 className={typography.h2}>
          Try battery range estimation
        </h2>
        <p className={typography.body}>
          Plan every trip with confidence. Estimate your EV range and optimize
          your journey smarter.
        </p>
        <button
          onClick={check}
          className={btn.primary}
        >
          Try Now
        </button>
        {showMsg && (
          <p className="text-sm text-amber-400 animate-pulse">
            Please{" "}
            <span
              onClick={() => navigate("/login")}
              className="underline cursor-pointer"
            >
              sign in
            </span>{" "}
            to use the calculator.
          </p>
        )}
      </div>
    </section>
  );
};

export default Try;
