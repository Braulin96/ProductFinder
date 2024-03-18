import React from "react";
import useRevenueData from "./useRevenueData";


function ApiReact() {
  const { data, isLoading, isError } = useRevenueData();
  // isLoading and isError you do not need to declare, automatically from react-query

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h2>API React</h2>
      {data.map((recipe) => (
        <div className="mt-8" key={recipe.title}>
          <p>Id:{recipe.id}</p>
          <p>Brand:{recipe.brand}</p>
          <p>Nome: {recipe.title}</p>
          <p>Price: {recipe.price}</p>
          <p>Category: {recipe.category}</p>
          <div>
            {recipe.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApiReact;
