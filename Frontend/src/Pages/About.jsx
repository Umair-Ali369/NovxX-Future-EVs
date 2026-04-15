import React from "react";
import mission from "../assets/images/our-vission.png";
import future from "../assets/images/future.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className=" bg-gray-900">
      <div className=" relative flex flex-col justify-center items-center px-4 text-center h-auto sm:h-screen w-full">
        <div className=' bg-center absolute inset-0 z-10 bg-[url("https://static.vecteezy.com/system/resources/previews/008/551/618/non_2x/abstract-speed-electric-cars-in-the-illustration-electric-cars-are-powered-by-electric-energy-future-energy-on-blue-background-vector.jpg")] bg-cover opacity-20'></div>
        <div className="relative z-10 flex flex-col justify-center gap-4 items-center max-w-6xl mx-auto px-4 text-center ">
          <h1 className="font-bold text-3xl md:text-5xl text-white mt-4 ">
            Building the future of Electric Moblity
          </h1>
          <h4 className="text-lg text-gray-300  mt-4">
            NovxX is creating the smart, affordable, and sustainable Eelectric
            Vehicles for the future generation. This EV platform builidng on
            intelligent solution for electric vehicles users, especially in
            emerging market.
          </h4>
          <button className="px-5 py-3 rounded-md bg-blue-500 text-white font-semibold ">
            Join The Future
          </button>
        </div>
      </div>

      <div className=" flex flex-col gap-4 justify-center p-16 items-center">
        <div className="grid grid-cols-1  gap-5">
          <div className="flex md:flex-row flex-col gap-5 justify-center md:justify-between p-4 mb-5">
            <div className="px-8 py-5 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
              <h3 className="font-bold text-2xl text-[#44ACFF]">
               Problem
              </h3>
              <p className="text-xl text-gray-400">
                EV users face challenges with battery range, charging availability, and efficiency
              </p>
            </div>
            <div className="px-8 py-5 border-2 border-[#44ACFF] rounded-md hover:shadow-xl bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center">
              <h3 className="font-bold text-2xl text-[#44ACFF]">
               Our Solution
              </h3>
              <p className="text-xl text-gray-400">
               NovxX provides intelligent tools to solve these challenges through data and optimization
              </p>
            </div>
          </div>
          <div className="px-8 py-5 flex flex-col justify-cneter md:items-start items-center gap-4 text-center md:text-start">
            <h3 className="font-bold text-2xl md:text-4xl text-[#44ACFF]">
              {" "}
              My Story{" "}
            </h3>
            <p className="text-xl text-gray-400">
              {" "}
              I started this journey with a simple goal : to build something
              meaningfull for the future. With limited resources but a big
              vision. I'm interested in Electric Vehicle technology and I'm
              building this step by step , learning, creating and sharing my
              journey to the public.
              <br />I already reading a books on Electric Vehicle technology to
              understand how they are build and how they work. The First book I
              am reading is about basics of <strong>How Car works </strong>
              and next one is{" "}
              <strong> Electric Vehicle Technology explained </strong>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 py-16 justify-center md:justify-between items-center">
            <div className="px-8 py-5 flex flex-col justify-cneter md:items-start items-center gap-4 text-center md:text-start">
              <h3 className="font-bold text-2xl md:text-4xl text-[#44ACFF]">
                {" "}
                Our Mission{" "}
              </h3>
              <p className="text-xl text-gray-400">
                {" "}
                To build a world where transportation is clean, intelligent, and
                make electric vehicle technology smarter, more accessible, and
                efficient for everyone{" "}
              </p>
            </div>
            <div className="max-w-xl w-auto">
              <img
                src={mission}
                alt="Our Mission"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-5 py-16 justify-center md:justify-between items-center">
            <div className="px-8 py-5 flex flex-col justify-cneter md:items-start items-center gap-4 text-center md:text-start">
              <h3 className="font-bold text-2xl md:text-4xl text-[#44ACFF]">
                {" "}
                Future Dirction{" "}
              </h3>
              <p className="text-xl text-gray-400">
                {" "}
                We are developing a smart EV ecosystem that inclcudes battery
                intelligence, charging optimization, and AI-driven insights.
                This is just the beginning. In the coming years, we aim to
                launch real products, expand infrastructure, and bring electric
                mobility to more people
              </p>
            </div>
            <div className="max-w-xl w-auto">
              <img
                src={future}
                alt="My Future Vission"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center max-w-6xl mx-auto py-16">
        <h2 className="font-bold text-2xl md:text-4xl my-5 text-white text-center">
          Join Us As We Build the Future of Mobility.
        </h2>
        <button className="px-5 py-3 rounded-md border-2 border-blue-400 text-white font-semibold ">
          <Link> Join Now </Link>
        </button>
      </div>
    </section>
  );
};

export default About;
