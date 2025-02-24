import React from 'react'
import { useParams } from 'react-router-dom'
import { dataBlog2 } from '../../mockdata/blogData2';


const Blogdetails = () => {
    const { blogId } = useParams();
    const data = dataBlog2[blogId];
  return (
    <div className="flex items-center justify-center">
      <h1>{data.title}</h1>
      <div className='flex flex-col'>
        <h2>{data.subtitle}</h2>
      </div>
      <div className='flex flex-col'>
        <p>{data.summary}</p>
      </div>
    </div>
  );
}

export default Blogdetails
