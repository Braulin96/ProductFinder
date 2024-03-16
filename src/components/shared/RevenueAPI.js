import React from "react";
import useRevenueData from "./useRevenueData";

function ApiReact() {
  const { data, isLoading, isError } = useRevenueData();
  console.log("data:", data);
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
          <p>{recipe.id}</p>
          <p>Nome: {recipe.title}</p>
          <img src={recipe.image} alt="Avatar" />
        </div>
      ))}
    </div>
  );
}

export default ApiReact;
