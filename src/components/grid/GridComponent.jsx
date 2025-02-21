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
      {codeData[categoryId].map((card, index) => (
        <CodePreview key={index} item={card} />
      ))}
    </div>
  );
};

export default GridComponent;
