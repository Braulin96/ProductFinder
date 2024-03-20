//components:
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
//images:
import Woman from "assets/images/thirdLady.jpeg";
import Fragrance from "assets/images/category/perfume.jpeg";
import Groceries from "assets/images/category/berries.jpeg";
import HomeDecoration from "assets/images/category/home.jpeg";
import Mobile from "assets/images/category/mobile.jpeg";
import Skincare from "assets/images/category/skin.jpeg";
import Laptop from "assets/images/category/laptop.jpeg";
//lay and secondLady, thirdlady

const elements = [
  {
    name: "smartphone",
    image: Mobile,
  },
  {
    name: "laptop",
    image: Laptop,
  },
  {
    name: "fragrance",
    image: Fragrance,
  },
  {
    name: "skincare",
    image: Skincare,
  },
  {
    name: "groceries",
    image: Groceries,
  },
  {
    name: "home",
    image: HomeDecoration,
  },
];

const Home = () => {
  return (
    <div
      className="flex flex-col items-center relative sm:px-4 bg-[#D9D9D9] px-2 sm:py-0 py-2"
      style={{ height: "100vh" }}
    >
      <div className="my-auto md:px-12 py-12 rounded-3xl w-full max-w-7xl mx-auto flex md:flex-row flex-col gap-y-8 z-20 bg-gray-50 bg-opacity-60 shadow-xl gap-x-4 px-4 animate-fade-up animate-duration-500 animate-delay-500">
        <div className="md:w-1/2 w-full h-full text-center flex flex-col sm:gap-y-8 gap-y-4 text-secondary-gray my-auto justify-center">
          <h1 className="sm:text-4xl text-3xl animate-fade-up animate-duration-[1s] animate-delay-1000">
            Welcome to
            <span className="text-primary-blue font-bold ml-2">
              Product Finder
            </span>
          </h1>
          <p className="sm:text-lg text-left animate-fade-up animate-duration-[1s] animate-delay-[1.2s]">
            Product Finder is an online platform where you can discover a wide
            range of products including phones, laptops, tablets, and
            smartwatches. Explore our collection and find the perfect product to
            suit your needs.
          </p>
          <Link
            to="questions"
            className="hidden slide md:flex px-16 sm:w-fit w-full mx-auto py-2 rounded-lg bg-primary-blue text-white font-bold mt-4 animate-fade-up animate-duration-[1s] animate-delay-[1.6s]"
          >
            Let's Start
          </Link>
        </div>
        <div className="md:w-1/2 w-full h-full flex animate-fade-left animate-duration-[1s] animate-delay-[2.2s]">
          <Swiper
            className="my-auto"
            modules={[Autoplay]}
            spaceBetween={50}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={1}
          >
            {elements.map((images) => (
              <SwiperSlide key={images.name}>
                <div className="w-auto sm:max-h-96 max-h-72 aspect-square mx-auto rounded-full flex justify-center">
                  <img
                    style={{ opacity: "0.8" }}
                    className="rounded-full mx-auto shrink h-full border border-[#65a3e1]"
                    src={images.image}
                    alt="FitPeople"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link
          to="questions"
          className="slide md:hidden flex px-24 w-fit mx-auto py-2 rounded-lg bg-primary-blue text-white font-bold "
        >
          <p className="mx-auto">Let's Start</p>
        </Link>
      </div>
      <div className="absolute z-10 h-full md:flex hidden">
        <div className="relative">
          <img style={{ height: "100vh", opacity: "0.7" }} src={Woman} />
          <div className="absolute w-12 aspect-square bg-primary-blue rounded-full z-40 top-20 right-8 bg-opacity-40 animate-fade-down animate-duration-[1s] animate-delay-[2.6s]"></div>
          <div className="absolute w-24 aspect-square bg-[#d5ae83] rounded-full z-40 bottom-8 left-8 bg-opacity-40 animate-fade-up animate-duration-[1s] animate-delay-[3s]"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
