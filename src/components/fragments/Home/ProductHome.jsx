import CardProduct from "@/components/elements/Card/CardProduct";
import { dataItem } from "@/constants/Index";
import React from "react";

export default function ProductHome() {
  return (
    <section className="py-2 mx-4 ">
      <div className="text-center sm:text-start w-full  ">
        <div className="border-b-2 border-zinc-100 mb-4">
          <h1 className="text-white text-[2rem]">Product</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-2 overflow-hidden">
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
