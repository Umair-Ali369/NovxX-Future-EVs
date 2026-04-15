import React from "react";
import { Link } from "react-router-dom";

const Try = () => {
  return (
    <section className="flex flex-col gap-6 justify-center p-5 text-center items-center md:py-20 sm:py-16 py-12">
      <h2 className="font-bold text-3xl md:text-6xl text-white  ">
        {" "}
        Try Battery Range Estimation{" "}
      </h2>
      <p className='text-xl md:text-2xl text-gray-400'> Drive smarter plan every trip with confidence </p>
      <button className="px-5 py-3 rounded-md bg-blue-500 text-white font-semibold ">
        <Link to="/calculator"> Let's Try It </Link>
      </button>
    </section>
  );
};

export default Try;
