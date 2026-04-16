import React from "react";
import { FaChargingStation } from "react-icons/fa";
import { GiCarBattery } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaRoute } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className=" md:py-20 sm:py-16 ">
      <div className=" flex flex-col gap-6 justify-center p-5 items-center">
        <div className=" flex flex-col gap-3 justify-center p-5 items-center text-center">
          <h1 className="font-bold text-3xl md:text-6xl text-white">
           Smart Features for the Future Driving
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            Powerful tools designed to make your electric driving smarter, easier, and more connected
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
            <FaChargingStation size={80} className=" text-[#44ACFF]" />
            <h3 className="font-bold text-2xl  text-[#44ACFF]">
              Smart Charging Locator
            </h3>
            <p className="text-xl text-gray-400">
             Instantly find nearby EV charging stations with real-time availability and smart suggestions
            </p>
          </div>
          <div className="px-8 py-5 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
            <GiCarBattery size={80} className=" text-[#44ACFF]" />
            <h3 className="font-bold text-2xl text-[#44ACFF]">
              {" "}
              Battery Intelligence System
            </h3>
            <p className="text-xl text-gray-400">
             Track battery health, monitor performance, and get accurate range predictions in real time
            </p>
          </div>
          <div className="px-8 py-5 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
            <GiArtificialIntelligence size={80} className=" text-[#44ACFF]" />
            <h3 className="font-bold text-2xl text-[#44ACFF] ">
              {" "}
              AI Driving Assistant{" "}
            </h3>
            <p className="text-xl text-gray-400">
             Get smart recommendations to optimize your driving, charging, and energy usage
            </p>
          </div>
          <div className="px-8 py-5 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
            <FaRoute size={80} className=" text-[#44ACFF]" />
            <h3 className="font-bold text-2xl text-[#44ACFF] ">
             Intelligent Route Planning
            </h3>
            <p className="text-xl text-gray-400">
              Plan routes based on battery level, traffic, and charging station availability
            </p>
          </div>
        </div>

       <button className="px-10 py-3 rounded-md border-2 border-blue-400 text-white font-semibold ">
          <Link to="/features"> Explore More </Link>
        </button>
      </div>
    </section>
  );
};

export default Features;
