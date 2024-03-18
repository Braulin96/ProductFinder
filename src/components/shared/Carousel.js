import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = ({ slides }) => {
  return (
    <Swiper
      className="flex w-full"
      modules={[Autoplay]}
      spaceBetween={50}
      //disableOnInteraction={true}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Setting autoplay to true with a delay of 5000ms (5 seconds)
      //Autoplay={false}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((elements, index) => (
        <SwiperSlide className="m-auto" key={index}>
          <img className="mx-auto max-w-[300px] max-h-[300px]" src={elements} alt={elements} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
