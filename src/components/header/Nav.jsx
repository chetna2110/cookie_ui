import React from "react";
import { navmenu } from "../../mockdata/data";
const Nav = () => {
  return (
    <nav>
      <div className="bg-amber-100  gap-x-28 flex justify-between mt-3 ml-3 mr-3 rounded-xl shadow-lg hover:shadow-orange-200">
        <div className=" gap-x-28 flex justify-start">
          <div className=" ml-24 p-5">logo</div>

          <div className="  flex items-center justify-center">
            <ul className="flex space-x-6 p-5">
              {navmenu.map((item) => {
                return (
                  <li key={item.id} className="transition-transform duration-300 hover:scale-110">
                    <a
                      href={item.link}
                      className="font-semibold hover:bg-amber-700 hover:text-white  hover:scale-110  px-3 py-2 rounded-lg transition-transform  duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="  space-x-10 p-5">
          <button class="bg-amber-600 rounded-lg p-2 font-semibold ring-4 ring-amber-500 hover:bg-amber-700 hover:text-white hover:animate-bounce">
            Sign in
          </button>
          <button class="bg-amber-600 rounded-lg p-2 font-semibold ring-4 ring-amber-500 hover:bg-amber-700 hover:text-white boxShadow hover:animate-bounce">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
