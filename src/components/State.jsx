import React from "react";
import bgState from "../assets/bg-pattern-circles.svg";
import phones from "../assets/illustration-phones.svg";

const State = () => {
  return (
    <div className="bg-[#2C2D3F] overflow-hidden rounded-tr-[150px] rounded-bl-[150px] pt-8 pb-32 md:pb-0 flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left">
      <img
        src={bgState}
        alt=""
        className="max-w-[700px] ml-[-110px] mt-[-240px]"
      />
      <div className="absolute mt-40 md:flex">
        <div className="md:max-w-[50%] mx-auto">
          <img src={phones} alt="" className="mt-[-400px] md:mt-[-250px]" />
        </div>
        <div className="md:max-w-[50%] mx-auto md:pr-32">
          <h1 className="text-white font-overpass font-semibold text-5xl">
            State of the art infrastracture
          </h1>
          <p className="text-white px-12 md:px-0 font-overpass pt-5">
            With reliability and speed in mind, worldwide data center provide
            the backbone of ultra-fast connectivity. This ensures your site will
            load instantly, no matter where your readers are, keeeping your site
            competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default State;
