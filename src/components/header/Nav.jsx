import React from "react";
import { navmenu } from "../../mockdata/data";

const Nav = () => {
  return (
    <nav className="bg-amber-100 flex items-center justify-between shadow-lg hover:shadow-orange-200 p-4 sm:px-6 lg:px-8">
      {/* Left Section */}
      <div className="flex items-center gap-x-4 sm:gap-x-8 w-full sm:w-auto">
        {/* Logo */}
        <div className="flex items-center justify-center relative">
          <img
            src="./image/logo.png"
            alt=""
            className="size-20 absolute left-0 -top-[18px]"
          />
          <p className="ml-14 lg:text-xl text-sm italic font-semibold">
            Cookie UI
          </p>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center">
          <ul className="flex gap-2 sm:gap-4 lg:gap-6">
            {navmenu.map((item) => (
              <li
                key={item.id}
                className="transition-transform duration-300 hover:scale-110"
              >
                <a
                  href={item.link}
                  className="font-semibold hover:bg-amber-700 hover:text-white px-3 py-2 rounded-lg transition-transform duration-300 text-sm sm:text-base"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
        {/* Search */}
        <div className="flex-grow sm:flex-grow-0 w-full sm:w-auto">
          <input
            type="search"
            placeholder="Search..."
            className="w-full sm:w-64 md:w-80 lg:w-96 h-10 border border-amber-500 rounded-lg focus:outline-none pl-2 focus:border-amber-800 focus:shadow-md transition-all duration-300"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-amber-600 rounded-lg px-4 sm:px-6 py-2 font-semibold hover:ring-4 ring-amber-500 hover:bg-amber-700 hover:text-white hover:animate-bounce transition-all duration-300 text-sm sm:text-base">
            Sign in
          </button>
          <button className="bg-amber-600 rounded-lg px-4 sm:px-6 py-2 font-semibold hover:ring-4 ring-amber-500 hover:bg-amber-700 hover:text-white hover:animate-bounce transition-all duration-300 text-sm sm:text-base">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
