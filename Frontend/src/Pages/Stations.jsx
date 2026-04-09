import React from "react";

const stations = [
  {
    name: "FastCharge Hub",
    location: "Islamabad",
    type: "Fast Charger",
    available: true,
  },
  {
    name: "FastCharge Hub",
    location: "Islamabad",
    type: "Fast Charger",
    available: true,
  },
  {
    name: "FastCharge Hub",
    location: "Islamabad",
    type: "Fast Charger",
    available: false,
  },
  {
    name: "FastCharge Hub",
    location: "Islamabad",
    type: "Fast Charger",
    available: true,
  },
  {
    name: "FastCharge Hub",
    location: "Islamabad",
    type: "Fast Charger",
    available: false,
  },
];
const Stations = () => {
  return (
    <section className=" bg-gray-900 px-4  ">
 
        <div className='flex flex-col justify-center items-center max-w-6xl mx-auto px-4 text-center py-24 pt-32 '>
            <h1 className='font-bold text-3xl md:text-5xl text-white '>
              EV Charging Stations
            </h1>
            <h4 className='text-lg text-gray-400  mt-4'>
                Powerful tools to designed to make EV usage smarter and more efficient
            </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 w-full">
          {stations.map((s) => (
            <div className="bg-gray-800 p-5 px-8 py-5 border-2 relative border-[#44ACFF] rounded-md shadow-sm hover:scale-105 flex flex-col justify-center items-start gap-4 ">
              <h3 className='font-semibold text-xl text-[#44ACFF]'> {s.name} </h3>
              <p className=' text-xl text-[#44ACFF]'>  {s.location} </p>
              <p className=' text-xl text-[#44ACFF]'> {s.type} </p>
              <h5 className={`${s.available ? "bg-green-600 opacity-85 font-semibold text-white px-3 py-1 rounded-full " : "bg-red-600 opacity-85 font-semibold text-white px-3 py-1 rounded-full"} absolute top-4 right-3`}>  {s.available ? "Available" : "Busy"} </h5>
            </div>
          ))}
        </div>
     
    </section>
  );
};

export default Stations;
