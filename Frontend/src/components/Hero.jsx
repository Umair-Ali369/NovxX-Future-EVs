import React from 'react'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
   <section className="relative min-h-screen w-full flex items-center justify-center bg-[#091413] overflow-hidden">
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
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/30 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
          Built for emerging market EV systems
        </span>

        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-[#E8EDEC] leading-[1.05] tracking-tight"> 
            Intellingence EV Platform
            <br />
            for smarter mobility
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl leading-relaxed"> 
           Optimized battery performance, discover charging stations, and make 
           data-driven decisions for your electric vehicle
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
            to="/register"
            className="px-7 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
            >
                Get Started
            </Link>
            <Link
            to="/features"
            className="px-7 py-3.5 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
            >
              Exlore Features
            </Link>
        </div>

        <div className="mt-20 w-full max-w-3xl grid grid-cols-3 divide-x divide-white/10 border-t border-b border-white/10 py-6">
            <div className="flex flex-col gap-1 px-4">
                <span className="text-2xl md:text-3xl font-bold text-[#44ACFF] tabular-nums">
                    312 km
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                    Est. Range
                </span>
            </div>
            <div className="flex flex-col gap-1 px-4">
                <span className="text-2xl md:text-3xl font-bold text-[#44ACFF] tabular-nums">
                    High
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                   Efficiency
                </span>
            </div>
            <div className="flex flex-col gap-1 px-4">
                <span className="text-2xl md:text-3xl font-bold text-[#44ACFF] tabular-nums">
                  Low
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                   Battery Stress
                </span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero