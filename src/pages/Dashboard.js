//components:
import { useData } from "components/hooks/DataContext";
import useRevenueData from "components/hooks/useRevenueData";
import OpenModal from "components/shared/OpenModal";
import Carousel from "components/shared/Carousel";
import SpeedDialNav from "components/shared/SpeedDialNav";
import Skeleton from "@mui/material/Skeleton";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const ProductsByCategory = () => {
  const { data, isLoading, isError } = useRevenueData();
  // isLoading and isError you do not need to declare, automatically from react-query
  const isMobile = useMediaQuery("(max-width:768px)");

  return isError ? (
    <div
      className="h-full flex flex-col justify-center items-center"
      style={{ height: "60vh" }}
    >
      <p className="text-center sm:text-2xl text-xl mb-4 text-secondary-gray font-light animate-fade-up animate-duration-[1s] animate-delay-[500]">
        An error as occurred trying to get the products you request, we are
        sorry to inform that is temporary unavailable, please try again latter.
      </p>
      <Link
        to="/"
        className="slide px-8 w-fit mx-auto py-2 rounded-lg bg-primary-blue text-white font-bold mt-4 animate-fade-up animate-duration-[1s] animate-delay-[1s]"
      >
        Back to Home Page
      </Link>
    </div>
  ) : (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4 py-4">
      {isLoading && (
        <>
          {[...Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              className="mx-auto"
              width={isMobile ? "100%" : 350}
              height={180}
            />
          ))}
        </>
      )}
      {!isLoading &&
        data.map((recipe,index) => (
          <div
            className="bg-white hover:bg-tertiary-brown sm:col-span-1 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl flex py-4 transition-all duration-1000 md:max-w-[400px] w-full h-[200px] font-light animate-fade-up animate-duration-[1s] animate-delay-[1s]"
            key={index}
          >
            <div className="overflow-hidden w-1/2 my-auto px-2 relative">
              <img src={recipe.thumbnail} alt={recipe.title} loading="lazy"/>
            </div>
            <div className="px-6 flex flex-col w-1/2 my-auto h-full">
              <div className="my-auto">
                <p className="mt-0 capitalize"> {recipe.title}</p>
                <p>
                  Price:
                  <span className="ml-1 font-normal">{recipe.price} £</span>
                </p>
              </div>
              <div className="flex">
                <OpenModal
                  className="ml-auto"
                  openModalButton="Know More"
                  title={recipe.title.toUpperCase()}
                >
                  <div className="text-secondary-gray">
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
  );
};

const Dashboard = () => {
  const { name, category } = useData();
  const { isLoading, isError } = useRevenueData();
  return (
    <div
      className="flex flex-col items-center relative sm:px-4 text-secondary-gray"
      style={{ height: "100vh" }}
    >
      <div className="w-full max-w-7xl mx-auto sm:px-2 px-4 sm:py-20 py-10 flex flex-col relative">
        {isLoading ? (
          <div className="py-4">
            <Skeleton
              variant="rounded"
              className="mx-auto"
              width="100%"
              height={20}
            />
          </div>
        ) : (
          <h1
            className={`sm:text-3xl text-2xl sm:text-center text-left mb-8 font-extralight sm:leading-10 leading-8 animate-fade-up animate-duration-[1s] animate-delay-500 ${
              isError ? "hidden" : ""
            }`}
          >
            Hello <span className="font-light">{name}</span>, we have selected
            the best options in the market for you based on the category chose -{" "}
            <span className="text-primary-blue">{category}.</span>
          </h1>
        )}
        <ProductsByCategory />
        <div className="mt-auto absolute -bottom-10 sm:-bottom-5 right-0 ">
          {isLoading ? (
            <Skeleton
              variant="circular"
              className="mx-auto"
              width={50}
              height={50}
            />
          ) : (
            <SpeedDialNav />
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
