import React from "react";
import { useParams } from "react-router-dom";
import { dataBlog2 } from "../../mockdata/blogData2";

const Blogdetails = () => {
  const { blogId } = useParams();
  const data = dataBlog2[blogId];
  return (
    <div className="flex  flex-col items-center justify-center mt-14 ">
      <h1 className="font-extrabold text-4xl">{data.title}</h1>
      {data.arr.map((item, index) =>
        item.name === "subtitle" ? (
          <div className="mr-80 mt-14 text-3xl font-bold">
            <h2>{item.place}</h2>
          </div>
        ) : (
          <div className="mt-10 ml-[347px] font-medium text-xl text-slate-500 whitespace-pre-line">
            {item.place}
          </div>
        )
      )}
    </div>
  );
};

export default Blogdetails;
