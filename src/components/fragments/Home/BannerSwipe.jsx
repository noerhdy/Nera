import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import imageProductBanner1 from "@/assets/img/banner/1.jpg";
import imageProductBanner2 from "@/assets/img/banner/2.jpg";
import imageProductBanner3 from "@/assets/img/banner/3.jpg";
import imageProductBanner4 from "@/assets/img/banner/4.jpg";

// Gabungkan gambar dalam array
const images = [
  { src: imageProductBanner1, alt: "Slide 1" },
  { src: imageProductBanner2, alt: "Slide 2" },
  { src: imageProductBanner3, alt: "Slide 3" },
  { src: imageProductBanner4, alt: "Slide 4" },
];

const BannerSwipe = () => {
  return (
    <div className="relative w-full sm:h-full h-dvh mb-2 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center h-full overflow-hidden">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="box-border relative overflow-hidden size-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                <img
                  className="box-border object-cover object-center bg-center size-full"
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
