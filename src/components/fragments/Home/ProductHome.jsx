import CardProduct from "@/components/elements/Card/CardProduct";
import { dataItem } from "@/constants/Index";
import React from "react";

export default function ProductHome() {
  return (
    <section className="py-2 mx-4 sm:mx-12 ">
      <div className="w-full text-start ">
        <div className="mb-4 border-b-2 border-[#A9A69F]/50">
          <h1 className="text-[#e5e4e2] text-[1rem] sm:text-[1.5rem]">
            Product
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 overflow-hidden lg:grid-cols-4 lg:gap-2">
        {dataItem.map((item, index) => (
          <div key={index} className="">
            <CardProduct
              name={item.name}
              images={item.images}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
