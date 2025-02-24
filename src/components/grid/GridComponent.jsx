import React from "react";
import { useParams } from "react-router-dom";
import codeData from "../../mockdata/codeData";
import CodePreview from "../codeSection/CodePreview";


const GridComponent = () => {
  const { categoryId } = useParams();

  if (!categoryId || !codeData[categoryId]) {
    return <div>No data available for this category.</div>;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-9 text-4xl font-bold  text-amber-800 ">
        <p className="leading-relaxed">Tailwind CSS</p>
        <p>
          {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}{" "}Components
        </p>
        
      </div>
      {codeData[categoryId].map((card, index) => (
        <CodePreview key={index} item={card} />
      ))}
    </div>
  );
};

export default GridComponent;
