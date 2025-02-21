import React from 'react'
import Blogcard from '../cards/Blogcard';
import { datablog } from '../../mockdata/blogData';

const Bloggrid = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ml-8 ">
        {datablog.map((item, index) => (
          < Blogcard  key={index}item={item} />
        ))}
        
      </div>
    </div>
  );
}

export default Bloggrid
