import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import imageProductBanner1 from "@/assets/img/banner/11.jpg";
import imageProductBanner2 from "@/assets/img/banner/7.jpg";
import imageProductBanner3 from "@/assets/img/banner/8.jpg";
import imageProductBanner4 from "@/assets/img/banner/6.jpg";
import imageProductBanner5 from "@/assets/img/banner/10.jpg";

// Gabungkan gambar dalam array
const images = [
  { src: imageProductBanner1, alt: "Slide 1" },
  { src: imageProductBanner2, alt: "Slide 2" },
  { src: imageProductBanner3, alt: "Slide 3" },
  { src: imageProductBanner4, alt: "Slide 4" },
  { src: imageProductBanner5, alt: "Slide 5" },
];

const BannerSwipe = () => {
  return (
    <div className="w-full h-full mb-2 relative overflow-hidden">
      <div className="flex justify-center flex-col relative h-full items-center overflow-hidden">
        <Swiper
          modules={[, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full relative overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center bg-center"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSwipe;
