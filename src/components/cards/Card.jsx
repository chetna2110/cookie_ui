import React from "react";

const Card = () => {
  return (
    <div className="bg-amber-100 mt-12 w-96 rounded-md shadow-lg overflow-hidden">
      <img
        src="./image/forms.webp"
        alt="image"
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center">
          <a
            href="http://"
            className="text-lg font-semibold text-black hover:text-amber-800 transition"
          >
            Name of component
          </a>
          <div className="flex items-end justify-end bg-amber-200 w-fit  rounded p-1 ">
            <a
              href="http:// "
              className="text-sm text-amber-600 hover:transition-transform duration-300 hover:scale-110"
            >
              Type of UI
            </a>
          </div>
        </div>
        <p className="text-black text-sm">No. of components</p>
      </div>
    </div>
  );
};

export default Card;
