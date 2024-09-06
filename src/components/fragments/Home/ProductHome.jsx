import CardProduct from "@/components/elements/Card/CardProduct";
import { dataItem } from "@/constants/Index";
import React from "react";

export default function ProductHome() {
  return (
    <section className="py-2 mx-4 sm:mx-12 ">
      <div className="w-full text-center sm:text-start ">
        <div className="mb-4 border-b-2 border-zinc-100">
          <h1 className="text-white text-[2rem]">Product</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 overflow-hidden lg:grid-cols-3 lg:gap-2">
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
      <div className=""></div>
    </section>
  );
}
