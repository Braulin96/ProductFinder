import { useData } from "components/hooks/DataContext";
import axios from "axios";
import { useState, useEffect } from "react";
import useRevenueData from "../components/shared/useRevenueData";
import OpenModal from "components/shared/OpenModal";
import Carousel from "components/shared/Carousel";

const ProductsByCategory = () => {
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
    <div  className="flex flex-col items-center relative sm:px-4"
    style={{ height: "100vh" }}>
      <div className=" w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4 bg-blue-500 h-fit">
          {data.map((recipe) => (
            <div
              className="mt-8 bg-red-400 col-span-1 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl h-full flex py-4 transition-all duration-500 max-w-[400px]"
              key={recipe.title}
            >
              <div className="overflow-hidden w-1/2 my-auto px-2 relative">
                {/* {recipe.images.length > 0 && ( // Check if images array is not empty
                  <img className="" src={recipe.images[0]} alt={`Image`} /> // Render only the first image
                )}   */}
                <img className="" src={recipe.thumbnail} alt={`Image`} />
              </div>
              <div className="px-6 flex flex-col w-1/2 my-auto h-full">
                <div className="my-auto">
                  {/* <p>Id:{recipe.id}</p> */}
                  {/* <p>Brand:{recipe.brand}</p> */}
                  <p className="mt-0 capitalize"> {recipe.title}</p>
                  <p>Price: {recipe.price} £</p>
                  {/* <p>Category: {recipe.category}</p> */}
                </div>
                <OpenModal openModalButton="Know More" title={recipe.title}>
                  <div>
                    <p className="mt-0 capitalize">
                      Description: {recipe.description}
                    </p>
                    <p className="mt-0 capitalize">Category: {recipe.category}</p>
                    <p className="mt-0 capitalize">Price: {recipe.price}£</p>
                    <p className="mt-0 capitalize">
                      Discount percentage: {recipe.discountPercentage}%
                    </p>
                    <p className="mt-0 capitalize">Stock: {recipe.stock}</p>
                  </div>
                  <div className="py-4">
                  <Carousel slides={recipe.images}/>
                  </div>
        
                </OpenModal>
              </div>
              {/* <div>
                {recipe.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index}`} />
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
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
