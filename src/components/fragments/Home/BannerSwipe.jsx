import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import gambar dari assets
// import imageProductBlack1 from "@/assets/imgProduct/b_1.webp";
// import imageProductBlack2 from "@/assets/imgProduct/b_2.webp";
// import imageProductBlack3 from "@/assets/imgProduct/b_3.webp";
// import imageProductWhite1 from "@/assets/imgProduct/w_1.webp";
// import imageProductWhite2 from "@/assets/imgProduct/w_2.webp";
// import imageProductWhite3 from "@/assets/imgProduct/w_3.webp";

// // Gabungkan gambar dalam array
// const images = [
//   { src: imageProductBlack1, alt: "Slide 1" },
//   { src: imageProductBlack2, alt: "Slide 2" },
//   { src: imageProductBlack3, alt: "Slide 3" },
//   { src: imageProductWhite1, alt: "Slide 4" },
//   { src: imageProductWhite2, alt: "Slide 5" },
//   { src: imageProductWhite3, alt: "Slide 6" },
// ];

const BannerSwipe = () => {
  return (
    <div className="w-full h-full mb-2 relative overflow-hidden">
      <div className="flex justify-center flex-col relative h-full items-center overflow-hidden">
        {/* <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full relative rounded-[1.5rem] overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}> */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full bg-center object-cover"
            src="./byme.jpg"
            alt=""
          />
        </div>
        {/* </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default BannerSwipe;
