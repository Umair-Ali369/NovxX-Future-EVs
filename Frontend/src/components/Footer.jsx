import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#091413] border-t border-white/5 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h2 className="font-bold text-xl text-[#E8EDEC]">NovxX</h2>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Intelligent EV platform for smarter mobility. Built for the
              future of electric vehicle systems in emerging markets.
            </p>
          </div>

          {/* Product links */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">
              Product
            </p>
            <Link to="/features" className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors">
              Features
            </Link>
            <Link to="/calculator" className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors">
              Calculator
            </Link>
            <Link to="/stations" className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors">
              Stations
            </Link>
            <Link to="/concept" className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors">
              Concept Vehicle
            </Link>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">
              Company
            </p>
            <Link to="/about" className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors">
              About
            </Link>
            <Link to="/register" className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors">
              Get Started
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center">
            © {new Date().getFullYear()} NovxX. Building the future of
            electric mobility.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;