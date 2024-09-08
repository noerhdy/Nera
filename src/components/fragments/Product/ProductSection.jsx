import ButtonCta from "@/components/elements/button/ButtonNavModal";
import CardProduct from "@/components/elements/Card/CardProduct";
import { dataItem } from "@/constants/Index";
import React from "react";
import Sidebar from "./Sidebar";
import { ChevronDown } from "lucide-react";

export default function ProductSection({
  onOpenSort,
  onOpenSearch,
  onOpenFilter,
}) {
  return (
    <div className="grid grid-cols-5 gap-2 mx-6 mt-12 ">
      <div className="hidden col-span-1 sm:block size-30 bg-zinc-500">
        {" "}
        <Sidebar onOpenSearch={onOpenSearch} />
      </div>
      <div className="col-span-5 sm:col-span-4">
        <div className="relative w-full ">
          <div className="flex items-center justify-center gap-2 mb-4 border-b-2 sm:justify-end border-zinc-100">
            <h1 className="text-end sm:inline-block hidden text-nowrap text-white text-[0.875rem]">
              Sort product by
            </h1>
            {/* Sort */}
            <button
              onClick={onOpenSort}
              className="flex items-center w-full px-2 py-2 text-sm font-semibold transition duration-200 ease-in-out border border-zinc-700 rounded-xl bg-zinc-950 text-zinc-700 hover:bg-zinc-800 sm:w-auto"
            >
              Search
              <ChevronDown size={16} />
            </button>
            {/* filter */}
            <button
              onClick={onOpenFilter}
              className="flex items-center w-full px-2 py-2 text-sm font-semibold transition duration-200 ease-in-out border sm:w-auto border-zinc-700 rounded-xl bg-zinc-950 text-zinc-700 hover:bg-zinc-800"
            >
              Filter
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 overflow-hidden lg:grid-cols-4 lg:gap-2 ">
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
