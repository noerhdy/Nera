import BannerSwipe from "@/components/fragments/Home/BannerSwipe";
import ProductHome from "@/components/fragments/Home/ProductHome";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="mb-16 ">
        <div
          className="sm:h-[500px] h-[400px] relative  "
          style={{ clipPath: "polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100%) " }}
        >
          <div className=" fixed  sm:h-[500px]  w-full top-10">
            <BannerSwipe />
          </div>
        </div>
        <ProductHome />
      </div>
    </>
  );
}
