import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        freeMode={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={require("../images/carousel/image_carousel3.png")}
            alt="Carousel 1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../images/carousel/image_carousel2.png")}
            alt="Carousel 2"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../images/carousel/image_carousel1.png")}
            alt="Carousel 3"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../images/carousel/image_carousel4.png")}
            alt="Carousel 4"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../images/carousel/image_carousel5.png")}
            alt="Carousel 5"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../images/carousel/image_carousel6.png")}
            alt="Carousel 6"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../images/carousel/image_carousel7.png")}
            alt="Carousel 7"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../images/carousel/image_carousel8.png")}
            alt="Carousel 8"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
