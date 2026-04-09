import React from "react";
import { FaChargingStation } from "react-icons/fa";
import { GiCarBattery } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaRoute } from "react-icons/fa6";

const Features = () => {
  return (
    <section className=" md:py-20 sm:py-16 ">
      <div className=" flex flex-col gap-6 justify-center p-5 items-center">
        <div className=" flex flex-col gap-3 justify-center p-5 items-center">
          <h1 className="font-bold text-3xl md:text-6xl text-white">
            {" "}
            Features{" "}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            {" "}
            Smart tools designed to keep your EV experience effortless,
            connected, and ready for the road ahead{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
            <FaChargingStation size={80} className=" text-[#44ACFF]" />
            <h3 className="font-bold text-2xl  text-[#44ACFF]">
              {" "}
              Charging Station Finder{" "}
            </h3>
            <p className="text-xl text-gray-400">
              {" "}
              Locate nearby EV charging station{" "}
            </p>
          </div>
          <div className="px-8 py-5 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
            <GiCarBattery size={80} className=" text-[#44ACFF]" />
            <h3 className="font-bold text-2xl text-[#44ACFF]">
              {" "}
              Battery Intelligence{" "}
            </h3>
            <p className="text-xl text-gray-400">
              {" "}
              Tract battery health and estimate range{" "}
            </p>
          </div>
          <div className="px-8 py-5 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
            <GiArtificialIntelligence size={80} className=" text-[#44ACFF]" />
            <h3 className="font-bold text-2xl text-[#44ACFF] ">
              {" "}
              AI Assistant{" "}
            </h3>
            <p className="text-xl text-gray-400">
              {" "}
              Get smart recommendation for your EV usage{" "}
            </p>
          </div>
          <div className="px-8 py-5 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
            <FaRoute size={80} className=" text-[#44ACFF]" />
            <h3 className="font-bold text-2xl text-[#44ACFF] ">
              {" "}
              Smart Route Planning{" "}
            </h3>
            <p className="text-xl text-gray-400">
              {" "}
              Plane routes based on charging availability and battery level{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
