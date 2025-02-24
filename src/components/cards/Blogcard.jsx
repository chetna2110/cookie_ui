import React from 'react'
import { Link } from 'react-router-dom';

const Blogcard = ({item}) => {
  return (
    <Link to={item.link}>
      <div className="bg-amber-200 mt-12 grid grid-cols-1 w-96 rounded-lg  shadow-lg hover: shadow-amber-600 hover:shadow-lg  overflow-hidden ml-4 hover:transition-transform duration-300 hover:scale-110 border-2 border-amber-800 ">
        <div className="w-full h-48 object-cover bg-amber-50 ">
          <span className="text-6xl flex items-center justify-center mt-16 hover:hue-rotate-60">
            {item.emojis}
          </span>
        </div>

        <div className=" w-full h-14 pl-7 pr-6 flex items-center justify-center duration-300 ">
          <div className=" text-amber-800 font-bold text-lg">{item.title}</div>
        </div>
      </div>
    </Link>
  );
}

export default Blogcard
