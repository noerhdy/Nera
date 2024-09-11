import CardProduct from "@/components/elements/Card/CardProduct";
import { dataItem } from "@/constants/Index";
import React from "react";

export default function ProductHome() {
  return (
    <section className="flex flex-col w-full h-full px-4 sm:px-12">
      {/* Sticky header */}
      <div className="sticky z-10 w-full  top-[3rem] ">
        <div className="mb-4 border-b-2 py-2 border-[#A9A69F]/50 bg-[#111111]">
          <h1 className="text-[#e5e4e2] text-[1rem] sm:text-[1.5rem]">
            Product
          </h1>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-2 overflow-hidden lg:grid-cols-4 lg:gap-2">
        {dataItem.map((item, index) => (
          <div key={index} className="">
            <CardProduct
              name={item.name}
              images={item.images[0]}
              price={item.price.toFixed(3)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
