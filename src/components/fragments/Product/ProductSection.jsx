import ButtonCta from "@/components/elements/button/ButtonNavModal";
import CardProduct from "@/components/elements/Card/CardProduct";
import { dataItem } from "@/constants/Index";
import React from "react";
import Sidebar from "./Sidebar";
import { ChevronDown } from "lucide-react";

export default function ProductSection() {
  return (
    <div className="grid grid-cols-5 mt-12 mx-6 gap-2">
      <div className="col-span-1 sm:block hidden size-30 bg-zinc-500">
        {" "}
        <Sidebar />
      </div>
      <div className="col-span-5 sm:col-span-4">
        <div className=" w-full relative ">
          <div className="border-b-2 border-zinc-100 mb-4 flex items-center justify-end gap-2">
            <h1 className="text-end sm:inline-block hidden text-nowrap text-white text-[0.875rem]">
              Sort product by
            </h1>
            <ButtonCta linkPage="/cart" classname="px-8 ">
              <div className="flex items-center justify-around ">
                <h3>sort</h3>
                <ChevronDown size={20} />
              </div>
            </ButtonCta>
            <div className="w-full gap-2 flex justify-between sm:hidden ">
              <ButtonCta
                linkPage="/cart"
                classname="active-class sm:hidden block"
              >
                filter
              </ButtonCta>
              <ButtonCta
                linkPage="/cart"
                classname="sm:hidden block active-class"
              >
                sort
              </ButtonCta>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-2 overflow-hidden ">
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
      </div>
    </div>
  );
}
