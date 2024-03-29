//components:
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = ({ slides }) => {
  return (
    <Swiper
      className="flex w-full"
      modules={[Autoplay]}
      spaceBetween={50}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1}
    >
      {slides.map((elements, index) => (
        <SwiperSlide className="m-auto" key={index}>
          <img className="mx-auto max-w-[300px] max-h-[300px]" src={elements} alt={elements} loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
