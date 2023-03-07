import React from "react";
import hero from "../assets/bg-pattern-intro-desktop.svg";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#FF525D] h-[700px] w-full absolute top-0 overflow-y-hidden overflow-x-hidden rounded-bl-rd">
        <img
          src={hero}
          alt="hero"
          className="absolute z-[1] md:mt-[-1200px] md:max-w-[2800px] md:ml-[-400px] max-w-[1500px] ml-[-400px] mt-[-400px]"
        />
        <div className="text-center mt-[250px] z-10 relative max-w-[450px] md:max-w-none mx-auto">
        <h1 className="text-white text-5xl md:text-6xl font-bold font-overpass pb-4">A modern publishing platform</h1>
        <p className="text-white text-lg font-overpass">Grow your audience and build your online brand</p>
        <div className="mt-16 flex gap-5 justify-center">
          <button className="text-[#FF525D] bg-white font-bold font-ubuntu py-3 px-5 rounded-full text-lg hover:bg-white/50 hover:text-white">Start for Free</button>
          <button className="text-white font-bold font-ubuntu py-3 px-5 rounded-full text-lg border-2 hover:bg-white hover:text-[#FF525D] hover:border-white">Learn More</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
