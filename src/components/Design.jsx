import React from "react";
import illustrationMobile from "../assets/illustration-editor-mobile.svg";
import illustrationDesktop from "../assets/illustration-editor-desktop.svg";

const Design = () => {
  return (
    <div className="relative mt-[680px] pt-0 pb-28 flex flex-col justify-center items-center overflow-x-clip">
      <h1 className="text-[#2C2D3F] font-bold text-3xl font-overpass">
        Designed for the future
      </h1>
      <div className="md:flex md:flex-row-reverse">
        <div className="flex justify-center items-center">
          <img src={illustrationMobile} alt="" className="pt-12 md:hidden" />
          <img
            src={illustrationDesktop}
            alt=""
            className="pt-12 hidden md:block max-w-3xl mt-[-130px] mr-[-200px]"
          />
        </div>
        <div>
          <h1 className="text-[#2C2D3F] font-bold text-3xl font-overpass pt-12 px-20 md:px-[150px] text-center md:text-left">
            Introducing an extensible editor
          </h1>
          <p className="px-12 md:px-[150px] text-center text-lg md:text-left py-4 font-overpass">
            Blog features an exceddingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos and Markdowns. Extensibility with plugins and themes,
            provide easy ways to add functionality or chnage the looks of the
            blogs.
          </p>
          <h1 className="text-[#2C2D3F] font-bold text-3xl font-overpass pt-12 px-20 md:px-[150px] text-center md:text-left">
            Robust content management
          </h1>
          <p className="px-12 md:px-[150px] text-center text-lg md:text-left pt-4 pb-48 font-overpass">
            Flexible content management enables users to easily move through
            posts. Increase usability of your blog by adding customized
            categories, sections, formats, or flows. With this functinality,
            you're in full control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
