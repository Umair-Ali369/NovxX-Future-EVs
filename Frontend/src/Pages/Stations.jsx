import React, { useState } from "react";
import { useEffect } from "react";
const Stations = () => {
  const [stations, setStations] = useState([])

    useEffect(() => {
    const fetchStations = async () => {
      try {
        const res = await fetch("http://localhost:9000/stations");
        const data = await res.json();
        setStations(data);
      } catch (err) {
        console.error("Error fetching stations:", err);
      }
    };
    fetchStations();
  }, []);
  
  return (
    <section className=" bg-gray-900 px-4  ">
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto px-4 text-center py-24 pt-32 ">
        <h1 className="font-bold text-3xl md:text-5xl text-white ">
          EV Charging Stations
        </h1>
        <h4 className="text-lg text-gray-400  mt-4">
          Powerful tools to designed to make EV usage smarter and more efficient
        </h4>
      </div>
      <input
        type="text"
        placeholder="Search by city..."
        className="w-full max-w-full mx-auto mb-6 p-3 rounded-md bg-gray-800 text-white border border-gray-600"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 w-full">
        {/* {stations.map((s) => (
            <div className="bg-gray-800 p-5 px-8 py-5 border-2 relative border-[#44ACFF] rounded-md shadow-sm hover:scale-105 flex flex-col justify-center items-start gap-4 ">
              <h3 className='font-semibold text-xl text-[#44ACFF]'> {s.name} </h3>
              <p className=' text-xl text-[#44ACFF]'>  {s.location} </p>
              <p className=' text-xl text-[#44ACFF]'> {s.type} </p>
              <h5 className={`${s.available ? "bg-green-600 opacity-85 font-semibold text-white px-3 py-1 rounded-full " : "bg-red-600 opacity-85 font-semibold text-white px-3 py-1 rounded-full"} absolute top-4 right-3`}>  {s.available ? "Available" : "Busy"} </h5>
            </div>
          ))} */}
        {stations.map((s) => {
          const isAvailable = s.slots > 0;

          return (
            <div
              key={s.id}
              className="bg-gray-800 p-6 border border-[#44ACFF]/40 rounded-xl shadow-md hover:scale-105 transition duration-300 relative flex flex-col gap-3"
            >
              {/* Status Badge */}
              <span
                className={`absolute top-4 right-4 text-sm px-3 py-1 rounded-full font-semibold ${
                  isAvailable
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {isAvailable ? "Available" : "Busy"}
              </span>

              {/* Name */}
              <h3 className="text-xl font-bold text-[#44ACFF]">⚡ {s.name}</h3>

              {/* Location */}
              <p className="text-gray-300">📍 {s.location}</p>

              {/* Type */}
              <p className="text-gray-300">🔌 {s.type} Charging</p>

              {/* Slots */}
              <p className="text-gray-300">
                📊 {s.slots} / {s.totalSlots} Slots Available
              </p>

              {/* Distance */}
              <p className="text-gray-300">📏 {s.distance} km away</p>

              {/* Buttons */}
              <div className="flex gap-3 mt-3">
                <button className="bg-[#44ACFF] text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
                  View
                </button>
                <button className="border border-[#44ACFF] text-[#44ACFF] px-4 py-2 rounded-md hover:bg-[#44ACFF] hover:text-white transition">
                  Navigate
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stations;
