import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={item.link} className="block">
      <div className="bg-amber-100 mt-12 grid grid-cols-1 w-96 rounded-md shadow-lg overflow-hidden ml-4">
        <img
          src={item.path}
          alt="image"
          className="w-full h-48 object-cover"
        />
        <div className="flex justify-between -mb-9 p-4">
          <span className="text-lg font-semibold text-black hover:text-amber-800 transition">
            {item.componentName}
          </span>
          <div className="bg-amber-300 rounded p-1 hover:transition-transform duration-300 hover:scale-110">
            <span className="text-sm text-amber-800 font-semibold">
              {item.uiName}
            </span>
          </div>
        </div>
        <div className="mt-0 p-4">
          <p className="text-black text-sm">{item.componentCount}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
