//components:
import { useData } from "components/hooks/DataContext";
import useRevenueData from "../components/hooks/useRevenueData";
import OpenModal from "components/shared/OpenModal";
import Carousel from "components/shared/Carousel";

const ProductsByCategory = () => {
  const { data, isLoading, isError } = useRevenueData();
  // isLoading and isError you do not need to declare, automatically from react-query
  console.log("dataCategory:", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4 py-4">
        {data.map((recipe) => (
          <div
            className="sm:col-span-1 rounded-lg overflow-hidden shadow-xl hover:shadow-2x flex py-4 transition-all duration-500 md:max-w-[400px] w-full h-[200px]"
            key={recipe.title}
          >
            <div className="overflow-hidden w-1/2 my-auto px-2 relative">
              <img className="" src={recipe.thumbnail} alt={`Image`} />
            </div>
            <div className="px-6 flex flex-col w-1/2 my-auto h-full">
              <div className="my-auto">
                <p className="mt-0 capitalize"> {recipe.title}</p>
                <p>Price: {recipe.price} £</p>
              </div>
              <div>
                <OpenModal
                  className="ml-auto"
                  openModalButton="Know More"
                  title={recipe.title}
                >
                  <div>
                    <p className="mt-0 capitalize">
                      Description: {recipe.description}
                    </p>
                    <p className="mt-0 capitalize">
                      Category: {recipe.category}
                    </p>
                    <p className="mt-0 capitalize">Price: {recipe.price}£</p>
                    <p className="mt-0 capitalize">
                      Discount percentage: {recipe.discountPercentage}%
                    </p>
                    <p className="mt-0 capitalize">Stock: {recipe.stock}</p>
                  </div>
                  <div className="py-4">
                    <Carousel slides={recipe.images} />
                  </div>
                </OpenModal>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex">
        {data.map((recipe) =>
          recipe.images.map((image, index) => (
            <img
            width={150}
              key={`${recipe.id}-${index}`}
              src={image}
              alt={`recipe-${index}`}
            />
          ))
        )}
      </div> */}
    </div>
  );
};

const Dashboard = () => {
  const { name, category } = useData();

  return (
    <div
      className="flex flex-col items-center relative sm:px-4"
      style={{ height: "100vh" }}
    >
      <div className=" w-full max-w-7xl mx-auto sm:px-2 px-4">
        Hello {name}, we have selected the best options in the market for you based on the category chose - {category}
        <ProductsByCategory />
      </div>
    </div>
  );
};
export default Dashboard;
