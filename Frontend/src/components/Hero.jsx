import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { btn, badge, typography } from "../theme";
import useScrollReveal from "../hooks/useScrollReveal";

// Animates a number counting up from 0 to target on mount
const useCountUp = (target, duration = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only animate numeric values
    const numericTarget = parseFloat(target);
    if (isNaN(numericTarget)) return;

    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(numericTarget);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
};

// Stat strip item — animates numeric values, shows strings as-is
const StatItem = ({ value, label, isNumeric, suffix = "" }) => {
  const animated = useCountUp(isNumeric ? value : 0, 1200);

  return (
    <div className="flex flex-col gap-1 px-4 count-up">
      <span className="text-2xl md:text-3xl font-bold text-[#44ACFF] tabular-nums">
        {isNumeric ? `${animated}${suffix}` : value}
      </span>
      <span className="text-xs text-gray-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

const Hero = () => {
  const ref = useScrollReveal()
  return (
    <section
    ref={ref}
    className="relative min-h-screen w-full flex items-center justify-center bg-[#091413] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#44ACFF 1px, transparent 1px), linear-gradient(90deg, #44ACFF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#44ACFF]/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-6 text-center py-32">
        <span className={badge.pill}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
          Built for emerging market EV systems
        </span>

        <h1 className={`${typography.h1} mt-8`}>
          Intelligent EV Platform
          <br />
          for smarter mobility
        </h1>

        <p className={`${typography.body} mt-6 max-w-2xl`}>
          Optimize battery performance, discover charging stations, and make
          data-driven decisions for your electric vehicle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link to="/register" className={`px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors btn-press`}>
            Get Started
          </Link>
          <Link to="/features" className={`${btn.ghost} btn-press`}>
            Explore Features
          </Link>
        </div>

        {/* Data strip — numbers animate on mount */}
        <div className="mt-20 w-full max-w-3xl grid grid-cols-3 divide-x divide-white/10 border-t border-b border-white/10 py-6">
          <StatItem value={312} label="Est. Range" isNumeric suffix=" km" />
          <StatItem value="High" label="Efficiency" isNumeric={false} />
          <StatItem value="Low" label="Battery Stress" isNumeric={false} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
