import feature_image from "../assets/images/feature-hero.png";
import charging_image from "../assets/images/charging.jpg";
import battery_image from "../assets/images/battery.png";
import aiDrive_image from "../assets/images/AI-Drive.png";
import route from "../assets/images/route.png";

const Features = () => {
  return (
    <section className=" bg-gray-900  ">
      <div className="relative h-screen w-full flex items-center justify-center ">
        <div className=' bg-center absolute inset-0 z-10 bg-[url("https://copilot.microsoft.com/th/id/BCO.89e4adc5-10be-436e-aa93-ce4e7d000407.png")] bg-cover opacity-20'></div>
        <div className="relative z-10 flex flex-col justify-center items-center max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-bold text-3xl md:text-5xl text-white ">
            Powerful Features for Smarter Electric Driving
          </h1>
          <h4 className="text-lg text-gray-300  mt-4">
            Explore the intelligent tools behind NovxX designed to optimize
            performance, reduce costs, and transform your EV experience
          </h4>
          <div className="flex flex-col sm:flex-row gap-4  mt-4">
            <button className="px-5 py-3 rounded-md bg-blue-500 text-white font-semibold ">
              {" "}
              Get Started{" "}
            </button>
            <button className="px-5 py-3 rounded-md border-2 border-blue-400 text-white font-semibold ">
              Try Demo{" "}
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 justify-center p-8 items-center">
        <div className="grid grid-cols-1  gap-5">
          <div className="flex flex-col md:flex-row gap-5 py-16 justify-center md:justify-between items-center">
            <div className="px-8 py-5 flex flex-col justify-cneter md:items-start items-center gap-4 text-center md:text-start">
              <h3 className="font-bold text-2xl md:text-4xl text-[#44ACFF]">
                Find charging stations instantly
              </h3>
              <p className="text-xl text-gray-400">
                Locate nearby EV charging stations with real-time availability
                and intelligent recommendations based on your location and
                battery level
              </p>
              <strong className="text-xl text-gray-300">
                Future-ready with expanding smart charging networks
              </strong>
            </div>
            <div className="max-w-xl w-auto">
              <img
                src={charging_image}
                alt="Charging Station"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-5 py-16 justify-center md:justify-between items-center">
            <div className="px-8 py-5 flex flex-col justify-cneter md:items-start items-center gap-4 text-center md:text-start">
              <h3 className="font-bold text-2xl md:text-4xl text-[#44ACFF]">
                Monitory Battery health
              </h3>
              <p className="text-xl text-gray-400">
                Track battery performance, analyze usage patterns, and get
                accurate range predictions to avoid unexpected stops
              </p>
              <strong className="text-xl text-gray-300">
                Future Vision : Predictive insights for long-term battery health
                optimization
              </strong>
            </div>
            <div className="max-w-xl w-auto">
              <img
                src={battery_image}
                alt="Battery Health"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 py-16 justify-center md:justify-between items-center">
            <div className="px-8 py-5 flex flex-col justify-cneter md:items-start items-center gap-4 text-center md:text-start">
              <h3 className="font-bold text-2xl md:text-4xl text-[#44ACFF]">
                Smart Driving Powered by AI
              </h3>
              <p className="text-xl text-gray-400">
                Get personalized recommendations to improve driving efficiency,
                optimize charging timing, and reduce energy waste
              </p>
              <strong className="text-xl text-gray-300">
                Future Vision : AI that learns your driving behavior and adapts
                automatically
              </strong>
            </div>
            <div className="max-w-xl w-auto">
              <img
                src={aiDrive_image}
                alt="Battery Health"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-5 py-16 justify-center md:justify-between items-center">
            <div className="px-8 py-5 flex flex-col justify-cneter md:items-start items-center gap-4 text-center md:text-start">
              <h3 className="font-bold text-2xl md:text-4xl text-[#44ACFF]">
                Intelligence Route Planning
              </h3>
              <p className="text-xl text-gray-400">
                Generate optimized routes based on battery level, traffic
                conditions, and charging station availability
              </p>
              <strong className="text-xl text-gray-300">
                Future Vision: Fully automated trip planning with zero range
                anxiety
              </strong>
            </div>
            <div className="max-w-xl w-auto">
              <img
                src={route}
                alt="Battery Health"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 justify-center p-5 items-center md:py-20 sm:py-16 py-12 max-w-5xl text-center mx-auto">
        <h2 className="font-bold text-3xl md:text-6xl my-5 text-white text-center">
          {" "}
          One Connected Experience{" "}
        </h2>
        <p className="text-xl text-gray-400">
          From route planning to battery insights & charging every feature works
          together seamlessly to give you a smoothand intelligent driving
          experience
        </p>
      </div>
      <div className=" flex flex-col gap-4 justify-center p-5 items-center md:py-20 sm:py-16 py-12 max-w-5xl text-center mx-auto">
        <h2 className="font-bold text-3xl md:text-6xl my-5 text-white text-center">
          {" "}
          Experience the Future of EV Technology{" "}
        </h2>
        <p className="text-xl text-gray-400">
          Join NovxX and take control of your electric driving experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4  mt-4">
          <button className="px-5 py-3 rounded-md bg-blue-500 text-white font-semibold ">
            {" "}
            Get Started{" "}
          </button>
          <button className="px-5 py-3 rounded-md border-2 border-blue-400 text-white font-semibold ">
            {" "}
            Explore More{" "}
          </button>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Features;
