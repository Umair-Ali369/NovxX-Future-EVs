import React from "react";
import { Link } from "react-router-dom";
import { btn, typography } from "../theme";
import mylogo from "../assets/images/mylogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#091413] border-t border-white/5 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <Link to="/">
              <img
                src={mylogo}
                alt="NovxX"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className={`${typography.bodySmall} max-w-sm`}>
              Intelligent EV platform for smarter mobility. Built for the future
              of electric vehicle systems in emerging markets.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
              <span className="text-[#44ACFF] text-xs font-semibold tracking-widest uppercase">
                Platform Live
              </span>
            </div>
          </div>

          {/* Product links */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">
              Product
            </p>
            <Link
              to="/features"
              className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors"
            >
              Features
            </Link>
            <Link
              to="/calculator"
              className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors"
            >
              Calculator
            </Link>
            <Link
              to="/stations"
              className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors"
            >
              Stations
            </Link>
            <Link
              to="/learn"
              className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors"
            >
              LearnEV
            </Link>
            <Link
              to="/concept"
              className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors"
            >
              Concept Vehicle
            </Link>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">
              Company
            </p>
            <Link
              to="/about"
              className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors"
            >
              About
            </Link>
            <Link
              to="/register"
              className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/Umair-Ali369/NovxX-Future-EVs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#44ACFF] text-sm transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} NovxX. Building the future of
            electric mobility.
          </p>
          <p className="text-gray-700 text-xs">
            Built by{" "}
            <a
              href="https://github.com/Umair-Ali369"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              Umair Ali
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
