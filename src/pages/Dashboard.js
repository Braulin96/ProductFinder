//components:
import { useData } from "components/hooks/DataContext";
import useRevenueData from "components/hooks/useRevenueData";
import OpenModal from "components/shared/OpenModal";
import Carousel from "components/shared/Carousel";
import SpeedDialNav from "components/shared/SpeedDialNav";

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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4 py-4">
      {data.map((recipe) => (
        <div
          className="sm:col-span-1 rounded-lg overflow-hidden shadow-xl hover:shadow-2x flex py-4 transition-all duration-500 md:max-w-[400px] w-full h-[200px] font-light"
          key={recipe.title}
        >
          <div className="overflow-hidden w-1/2 my-auto px-2 relative">
            <img className="" src={recipe.thumbnail} alt={`Image`} />
          </div>
          <div className="px-6 flex flex-col w-1/2 my-auto h-full">
            <div className="my-auto">
              <p className="mt-0 capitalize"> {recipe.title}</p>
              <p>
                Price:<span className="ml-1 font-normal">{recipe.price} £</span>
              </p>
            </div>
            <div className="flex">
              <OpenModal
                className="ml-auto"
                openModalButton="Know More"
                title={recipe.title}
              >
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
                  <Carousel slides={recipe.images} />
                </div>
              </OpenModal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const { name, category } = useData();

  return (
    <div
      className="flex flex-col items-center relative sm:px-4 text-secondary-gray"
      style={{ height: "100vh" }}
    >
      <div className="w-full max-w-7xl mx-auto sm:px-2 px-4 sm:py-20 py-10 flex flex-col relative">
        <h1 className="sm:text-3xl text-2xl sm:text-center text-left mb-8 font-extralight sm:leading-10 leading-8">
          Hello <span className="font-light">{name}</span>, we have selected the
          best options in the market for you based on the category chose - <span className="text-primary-blue">{category}.</span>
        </h1>
        <ProductsByCategory />
        <div className="mt-auto absolute -bottom-10 sm:-bottom-5 right-0">
          <SpeedDialNav />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
