//components:
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
//images:
import FitPeople from "assets/images/fitPeople.jpeg";
import FitWoman from "assets/images/fitWoman.webp";
import Woman from "assets/images/secondWomen.jpeg";

const elements = [
  {
    name: "smartphone",
    image: FitPeople,
  },
  {
    name: "laptop",
    image: FitWoman,
  },
  {
    name: "skincare",
    image: FitPeople,
  },
  {
    name: "groceries",
    image: FitWoman,
  },
];

const Landing = () => {
  return (
    <div
      className="flex flex-col items-center bg-gray-100 relative sm:px-4"
      style={{ height: "100vh" }}
    >
      <div className="my-auto md:px-12 py-12 rounded-3xl w-full max-w-7xl mx-auto flex md:flex-row flex-col gap-y-8 z-20 bg-gray-50 bg-opacity-60 shadow-xl gap-x-4">
        <div className="md:w-1/2 w-full h-full text-center flex flex-col sm:gap-y-8 gap-y-4 text-gray-800 my-auto justify-center">
          <h1 className="sm:text-4xl text-3xl">
            Welcome to
            <span className="text-primary-sage font-bold ml-2">
              Product Finder
            </span>
          </h1>
          <p className="sm:text-lg text-md md:text-left text-center">
            Product Finder is an online platform where you can discover a wide
            range of products including phones, laptops, tablets, and
            smartwatches. Explore our collection and find the perfect product to
            suit your needs.
          </p>
          <Link to ='questions' className="hidden md:flex px-16 sm:w-fit w-full mx-auto py-2 rounded-full bg-primary-sage text-white font-bold mt-4">
            Let's Start
          </Link>
        </div>
        <div className="md:w-1/2 w-full h-full flex">
          <Swiper
            className="my-auto"
            modules={[Autoplay]}
            spaceBetween={50}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Setting autoplay to true with a delay of 5000ms (5 seconds)
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // effect={'cube'}
          >
            {elements.map((images) => (
              <SwiperSlide key={images.name}>
                <div className="w-auto sm:max-h-96 max-h-72 aspect-square mx-auto rounded-full flex justify-center">
                  <img
                    style={{ opacity: "0.8" }}
                    className="rounded-full mx-auto shrink h-full"
                    src={images.image}
                    alt="FitPeople"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link
           to ='questions'
          className="md:hidden flex px-24 sm:w-fit w-full mx-auto py-2 rounded-full bg-primary-sage text-white font-bold "
        >
          <p className="mx-auto"> Let's Start</p>
        </Link>
      </div>
      <div className="absolute z-10 h-full md:flex hidden">
        <img style={{ height: "100vh", opacity: "0.6" }} src={Woman} />
      </div>
    </div>
  );
};
export default Landing;
