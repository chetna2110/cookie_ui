import React from 'react'
import { data2 } from '../../mockdata/cardData2';
import Card from '../cards/Card';

const Grid2 = () => {
  return (
    <div>
      <p className="ml-11 font-bold text-amber-800 text-2xl mt-16 bg-amber-100 rounded w-fit p-3 hover:transition-transform duration-200 hover:scale-105">
        Marketing UI
      </p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ml-8 ">
        {data2.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default Grid2
