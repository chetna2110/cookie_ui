import React from 'react'

const bloggrid = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ml-8 ">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default bloggrid
