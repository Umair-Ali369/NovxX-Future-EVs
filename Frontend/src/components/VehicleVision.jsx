import React from 'react'
import { Link } from "react-router-dom"
import { btn } from '../theme'
import useScrollReveal from '../hooks/useScrollReveal'

const PILLARS = [
    { icon : "💻", label : "Software First EV"},
    { icon : "⚡", label : "Efficiency Focused"},
    { icon : "🧠", label : "Smart Battery Intelligence"},
    { icon : "🌍", label : "Build For Emerging Market"},
]
const VehicleVision = () => {
    const ref = useScrollReveal()
    const cardsref = useScrollReveal()
  return (
    <section 
    ref={ref}
    className="reveal bg-[#091413] py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 bg-[#0F1F1D] border border-white/10 rounded-2xl h-72 flex flex-col items-center justify-center gap-3">
                <span className="text-6xl">
                🚗
                </span>
                <p className="text-gray-600 text-xs tracking-widest uppercase">  
                    NovxX Concept - Coming Soon
                </p>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-6" > 
                <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
                    Vehicle Vision
                </p>
                <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC] leading-tight">
                    The EV we are
                    <br />
                    building toward
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    NovxX is not just a platform - it is the foundation of real EV company.
                    Every insight, every calculator, every feature we build today is a step 
                    toward a physical vehicle designed for emerging markets.
                </p>

                <div ref={cardsref} className="reveal-child grid grid-cols-2 gap-3">
                    {PILLARS.map((p) => (
                        <div
                        key={p.label}
                         className="card-lift flex items-center gap-3 bg-[#0F1F1D] border border-white/10 rounded-lg px-4 py-3"
                        >
                            <span className='text-xl'> {p.icon} </span>
                            <p className="text-sm text-gray-300 font-medium"> {p.label} </p>
                        </div>
                    ))}
                </div>


                <Link
                to="/concept"
                className={`${btn.link} btn-press`}
                >
                    Explore the Concept Vehicle 
                </Link>
            </div>
        </div>
    </section>
  )
}

export default VehicleVision