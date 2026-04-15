import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="flex gap-6 justify-between py-4 px-4 md:px-8 items-center bg-[#091413] md:fixed md:top-0 w-full z-50">
        <div className="flex flex-row justify-between items-center w-full">
          <Link to="/">
            <h1 className="font-bold text-2xl text-white">NovxX</h1>
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        </div>
        <div className="hidden md:flex gap-6 font-semibold text-white">
          <Link to="/" className="hover:text-[#44ACFF]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#44ACFF]">
            About
          </Link>
          <Link to="/features" className="hover:text-[#44ACFF]">
            Features
          </Link>
          <Link to="/calculator" className="hover:text-[#44ACFF]">
            Calculaor
          </Link>
          <Link to="/stations" className="hover:text-[#44ACFF]">
            Stations
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col gap-4 font-semibold p-4 text-white">
            <Link
              to="/"
              className="hover:text-[#44ACFF]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#44ACFF]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/features"
              className="hover:text-[#44ACFF]"
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Features{" "}
            </Link>
            <Link
              to="/calculator"
              className="hover:text-[#44ACFF]"
              onClick={() => setIsOpen(false)}
            >
              Calculator
            </Link>
            <Link
              to="/stations"
              className="hover:text-[#44ACFF]"
              onClick={() => setIsOpen(false)}
            >
              Stations
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
