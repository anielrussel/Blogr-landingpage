import React from "react";
import laptopDesktop from "../assets/illustration-laptop-desktop.svg";
import laptopMobile from "../assets/illustration-laptop-mobile.svg";

const Tooling = () => {
  return (
    <div className="py-16 md:flex">
      <div className="md:max-w-[50%]">
        <img src={laptopDesktop} alt="" className="hidden md:block ml-[-200px] max-w-4xl" />
        <img src={laptopMobile} alt="" className="md:hidden" />
      </div>
      <div className="flex flex-col justify-center items-center text-center px-12 md:max-w-[50%] md:items-start md:text-left md:pr-40">
        <h1 className="text-[#2C2D3F] font-overpass font-bold text-3xl">
          Free, open, simple
        </h1>
        <p className="pt-4 text-lg font-overpass">
          Blogr is an open source application backed by a large community of
          helpful developers. It supports features such as code syntax
          highlighting, RSS feeds, social media integration, third party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and relatively easy to learn.
        </p>
        <h1 className="text-[#2C2D3F] font-overpass font-bold text-3xl pt-16">
          Powerful tooling
        </h1>
        <p className="pt-4 text-lg font-overpass">
          Batteries included. We built a simple and straightforward CLI tools
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  );
};

export default Tooling;
