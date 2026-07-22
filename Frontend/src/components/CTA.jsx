import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal"

const CTA = () => {
  const ref = useScrollReveal()
  return (
    <section 
    ref={ref}
    className="reveal bg-[#0F1F1D] py-24 px-6 border-t border-white/5">
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
      <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
        Get Started
      </p>
      <h2 className="font-bold text-3xl md:text-5xl text-[#E8EDEC]">
        Ready to go electric?
      </h2>
      <p className="text-lg text-gray-400 max-w-xl">
        Join the movement toward cleaner, smarter mobility. The future of
        transportation starts today — and you can be part of it.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Link
          to="/register"
          className="btn-press px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
        >
          Join NovxX
        </Link>
        <Link
          to="/concept"
          className="btn-press px-8 py-3.5 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
        >
          See the Vision
        </Link>
      </div>
    </div>
  </section>
  );
};

export default CTA;
