import { useData } from "components/hooks/DataContext";
import axios from "axios";
import { useState, useEffect } from "react";
import useRevenueData from "../components/shared/useRevenueData";

const ProductsByCategory = () => {
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
          {/* <div>
            {recipe.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div> */}
          <div>
            {recipe.images.length > 0 && ( // Check if images array is not empty
              <img src={recipe.images[0]} alt={`Image`} /> // Render only the first image
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const { name, goal, sex, age } = useData();
  //const [items, setItems] = useState([]);
  //const response = await fetch("https://source.unsplash.com/random");

  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((data) => console.log(data)); // converter dados para json type

  return (
    <div>
      Hello {name}
      <ProductsByCategory />
    </div>
  );
};
export default Dashboard;
