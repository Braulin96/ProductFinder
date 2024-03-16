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
    background: "#f3f4f6",
  },
};

const Slide = ({ img, children }) => {
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
              {children}
            </div>
          </div>
          <div className="mt-auto">
            {swiper.isEnd ? (
              <Link 
              to ='dashboard'
                className="rounded-full font-semibold flex bg-white py-1.5 justify-center text-[#334251] hover:text-[#334251] w-full"
                //to={start}
              >
                Start
              </Link>
            ) : (
              <a
                onClick={() => swiper.slideNext()}
                className="rounded-full font-semibold flex bg-primary-sage bg-opacity-80 py-1.5 justify-center hover:text-[#334251] w-full text-white"
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

const Onboarding = ({ elements, start, children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Swiper slidesPerView="auto" className="w-full flex justify-around">
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
