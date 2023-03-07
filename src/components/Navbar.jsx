import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import menuClose from "../assets/icon-close.svg";
import arrow from "../assets/icon-arrow-light.svg";
import arrowRed from "../assets/icon-arrow-dark.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showLists, setShowLists] = useState(false);

  const handleMouseEnter = () => {
    setShowLinks(true);
  };

  const handleMouseLeave = () => {
    setShowLinks(false);
  };

  const handleClick = () => {
    setShowLists(!showLists);
  };

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="py-16 md:px-40 px-4 w-full z-[55]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-16">
          <img src={logo} alt="logo" />
          <ul className="md:flex gap-6 hidden text-white font-medium">
            <li className="flex items-center gap-2 cursor-pointer hover:underline">
              Products <img src={arrow} alt="" />
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:underline">
              Company <img src={arrow} alt="" />
            </li>
            <div>
              <li
                className="flex items-center gap-2 cursor-pointer hover:underline"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Connect <img src={arrow} alt="" />
              </li>
              {showLinks && (
                <div
                  className=" absolute flex flex-col gap-3 mt-1 ml-[-18px] bg-white text-black p-4 w-40 rounded-md"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li className="cursor-pointer hover:font-extrabold">
                    Contact
                  </li>
                  <li className="cursor-pointer hover:font-extrabold">
                    Newsletter
                  </li>
                  <li className="cursor-pointer hover:font-extrabold">
                    LinkedIn
                  </li>
                </div>
              )}
            </div>
          </ul>
        </div>
        <div className="md:flex gap-1 items-center hidden">
          <button className="text-white font-medium py-2 px-8 rounded-full hover:bg-white/50">
            Log In
          </button>
          <button className="text-white font-medium py-2 px-8 rounded-full hover:bg-white/50">
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <div onClick={handleNav}>
            {!nav ? (
              <img src={hamburger} alt="" />
            ) : (
              <img src={menuClose} alt="" />
            )}
            <div>
              <div
                className={
                  !nav
                    ? "absolute top-[-100%]"
                    : "absolute right-0 left-0 top-0 text-black bg-white max-w-[470px] mx-auto mt-28 rounded-lg p-8 ease-in-out duration-700"
                }
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ul className="text-center flex flex-col gap-4 font-semibold font-overpass border-b-[1px] pb-4">
                  <li className="flex items-center justify-center gap-2">
                    Products <img src={arrowRed} alt="" />
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    Company <img src={arrowRed} alt="" />
                  </li>
                  <div>
                    <li
                      className="flex items-center justify-center gap-2"
                      onClick={handleClick}
                    >
                      Connect <img src={arrowRed} alt="" />
                    </li>
                    {showLists && (
                      <div className="bg-gray-200/50 py-6 flex flex-col gap-2 text-gray-600 rounded-md mt-4">
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                      </div>
                    )}
                  </div>
                </ul>
                <div className="flex flex-col gap-4 justify-center items-center mt-8">
                <button className="font-bold text-lg font-overpass">Log In</button>
                <button className="font-bold text-lg font-overpass text-white bg-[#FF8F70] py-2 px-10 rounded-full">Log In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
