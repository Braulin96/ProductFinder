//components:
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
//images:
import FitPeople from "assets/images/fitPeople.jpeg";
import FitWoman from "assets/images/fitWoman.webp";

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
    <div className="flex items-center" style={{ height: "100vh" }}>
      <div className="bg-green-200 w-full max-w-7xl mx-auto flex md:flex-row flex-col h-96 gap-y-4">
        <div className="md:w-1/2 w-full bg-blue-400 h-full text-center flex flex-col gap-y-8">
          <h1 className="text-black"> Welcome to Product Finder</h1>
          <p>
            Product Finder is an online platform where you can discover a wide
            range of products including phones, laptops, tablets, and
            smartwatches. Explore our collection and find the perfect product to
            suit your needs.
          </p>
          <button className="px-8 sm:w-fit w-full mx-auto py-2 border-2 border-gray-200 rounded-full">
            Let's start
          </button>
        </div>
        <div className="md:w-1/2 w-full bg-red-300 h-full">
          <Swiper
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
                <div className="w-auto h-96 aspect-square mx-auto rounded-full flex">
                  <img
                    className="rounded-full mx-auto"
                    src={images.image}
                    alt="FitPeople"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Landing;
