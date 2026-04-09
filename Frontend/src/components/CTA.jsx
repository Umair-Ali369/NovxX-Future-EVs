import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className=" p-5 md:py-20 sm:py-16 py-12">
      <div className="flex flex-col gap-6 justify-center items-center max-w-6xl mx-auto">
        <h2 className="font-bold text-4xl md:text-6xl my-5 text-white text-center">
          Ready to Go Electric?{" "}
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-4xl">
          Join the movement toward cleaner, smarter mobility. Electric vehicles
          deliver innovation, efficiency, and a greener tomorrow, all starting
          with your choice today
        </p>
        <button className="px-5 py-3 rounded-md border-2 border-blue-400 text-white font-semibold ">
          <Link> Get Started Now </Link>
        </button>
      </div>
    </section>
  );
};

export default CTA;
