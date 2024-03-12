import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import { useSwiper } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import { FiChevronLeft } from "react-icons/fi";
import FitPeople from "assets/images/fitPeople.jpeg";

SwiperCore.use([Navigation, Pagination]);

// const elements = [
//   {
//     image: FitPeople,
//     title: "What is your first name",
//     description: "description for example 1",
//   },
//   {
//     image: FitPeople,
//     title: "example 2",
//     description: "description for example 2",
//   },
//   {
//     image: FitPeople,
//     title: "example 3",
//     description: "description for example 3",
//   },
//   {
//     image: FitPeople,
//     title: "example 4",
//     description: "description for example 4",
//   },
// ];

const styles = {
  slide: {
    backgroundColor: "white",
    boxShadow: "rgb(149 157 165 / 20%) 0px 8px 24px",
    height: "100vh",
    height: "100svh",
    width: "100%",
    maxHeight: 1000,
    maxWidth: 600,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "black",
    position: "relative",
  },
  container: {
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    background: "#00000020",
    background: "gray",
  },
};

const Slide = ({ img, title, description, start, children }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  return (
    <div style={styles.container} className="flex">
      <div style={styles.slide} className="flex flex-col">
        {!swiper.isBeginning && (
          <a
            className="p-4"
            style={{ zIndex: 1 }}
            onClick={() => swiper.slidePrev()}
          >
            <FiChevronLeft style={{ color: "white" }} size={28} />
          </a>
        )}
        <div className="p-4 md:p-12 h-full flex flex-col" style={{ zIndex: 1 }}>
          <div className="font-medium h-full flex">
            <div className="bg-white bg-opacity-80 m-auto w-full aspect-square rounded-lg px-8 justify-center flex flex-col text-center text-secondary-gray">
              {/* <h2
                className="pb-2"
                style={{ fontSize: "1.6rem"}}
              >
                {title}
              </h2>
              <p style={{ fontSize: "1.1rem"}}>
                {description}
              </p> */}
              {children}
            </div>
          </div>
          <div className="mt-auto">
            {swiper.isEnd ? (
              <a
                className="rounded-full font-semibold flex bg-white py-1.5 justify-center text-[#334251] hover:text-[#334251] w-full"
                //to={start}
              >
                Start
              </a>
            ) : (
              <a
                onClick={() => swiper.slideNext()}
                className="rounded-full font-semibold flex bg-white py-1.5 justify-center text-[#334251] hover:text-[#334251] w-full"
              >
                Next
              </a>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          zIndex: 0,
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "cener",
          opacity: 0.4,
        }}
      />
    </div>
  );
};

const Onboarding = ({ elements, start, children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Swiper slidesPerView="auto" className="w-full flex justify-around">
        {elements.map((elements, index) => (
          <SwiperSlide key={index}>
            <Slide
              children={elements.description}
              //start={start}
              img={elements.image}
              //   title={elements.title}
              //   description={elements.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Onboarding;
