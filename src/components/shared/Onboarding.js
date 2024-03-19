//components:
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { useSwiper } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
//icons:
import { FiChevronLeft } from "react-icons/fi";

SwiperCore.use([Navigation, Pagination]);
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
    backgroundColor: "white",
    position: "relative",
  },
  container: {
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    background: "#00000020",
    background: "black",
  },
};

const Slide = ({ img, children }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  return (
    <div style={styles.container} className="flex overflow-scroll">
      <div style={styles.slide} className="flex flex-col">
        {!swiper.isBeginning && (
          <a
            className="pt-4 px-4"
            style={{ zIndex: 1 }}
            onClick={() => swiper.slidePrev()}
          >
            <FiChevronLeft style={{ color: "#1976d2" }} size={28} />
          </a>
        )}
        <div className="p-4 md:p-12 h-full flex flex-col" style={{ zIndex: 1 }}>
          <div className="font-medium h-full flex">
            <div className="bg-white bg-opacity-80 m-auto w-full py-8 md:py-10 lg:py-12 rounded-lg px-8 justify-center flex flex-col text-center text-secondary-gray shadow-xl">
              {children}
            </div>
          </div>
          <div className="mt-auto">
            {swiper.isEnd ? (
              <Link
                to="/dashboard"
                className="rounded-lg cursor-pointer font-semibold flex bg-primary-blue py-1.5 justify-center text-white w-full"
                //to={start}
              >
                Start
              </Link>
            ) : (
              <a
                onClick={() => swiper.slideNext()}
                className="rounded-lg font-semibold cursor-pointer flex bg-primary-blue bg-opacity-80 py-1.5 justify-center w-full text-white"
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
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />
    </div>
  );
};

const Onboarding = ({ elements }) => {
  return (
    <div className="overflow-scroll">
      <Swiper
        slidesPerView="auto"
        className="w-full flex justify-around overflow-scroll"
      >
        {elements.map((elements, index) => (
          <SwiperSlide key={index}>
            <Slide children={elements.description} img={elements.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Onboarding;
