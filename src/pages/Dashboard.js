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
    <div className="flex gap-x-8 h-[400px]">
      {data.map((recipe) => (
        <div
          className="mt-8 w-fit rounded-lg overflow-hidden shadow-2xl h-full"
          key={recipe.title}
        >
          <div className="h-1/2 overflow-hidden">
            {recipe.images.length > 0 && ( // Check if images array is not empty
              <img src={recipe.images[0]} alt={`Image`} /> // Render only the first image
            )}
          </div>
          <div className="px-6 py-3 h-1/2 flex flex-col">
            {/* <p>Id:{recipe.id}</p> */}
            <p>Brand:{recipe.brand}</p>
            <p>Nome: {recipe.title}</p>
            <p>Price: {recipe.price} £</p>
            <p>Category: {recipe.category}</p>
            <p className="text-[#39402d] mt-auto ml-auto font-semibold"> Know More</p>
          </div>
          
          {/* <div>
            {recipe.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div> */}
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
