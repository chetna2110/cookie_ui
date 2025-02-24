import React from "react";
import { useParams } from "react-router-dom";
import { dataBlog2 } from "../../mockdata/blogData2";

const Blogdetails = () => {
  const { blogId } = useParams();
  const data = dataBlog2[blogId];

  return (
    <div className="flex flex-col items-center justify-center mt-14 px-6">
      <h1 className="font-extrabold text-4xl text-center">{data.title}</h1>
      <div className="w-full max-w-3xl mt-10">
        {data.arr.map((item, index) => {
          switch (item.name) {
            case "subtitle":
              return (
                <h2
                  key={index}
                  className="mt-10 text-3xl font-bold text-gray-800"
                >
                  {item.place}
                </h2>
              );

            case "subtitle2":
              return (
                <h2
                  key={index}
                  className="mt-10 text-2xl font-semibold"
                >
                  {item.place}
                </h2>
              );

            case "summary":
            case "summary2":
              return (
                <p
                  key={index}
                  className="mt-4 text-lg font-medium text-slate-600 whitespace-pre-line"
                >
                  {item.place}
                </p>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Blogdetails;
