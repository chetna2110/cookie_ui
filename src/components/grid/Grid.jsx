import React from "react";
import Card from "../cards/Card";
import { data } from "../../mockdata/cardData";

const Grid = () => {
  return (
    <div >
        <p className="ml-11 font-bold text-amber-800 text-2xl mt-9 bg-amber-100 rounded w-fit p-3 hover:transition-transform duration-200 hover:scale-105">Application UI</p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ml-8 ">
        {data.map((item,index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
