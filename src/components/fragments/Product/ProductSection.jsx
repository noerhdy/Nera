import React from "react";
import CardProduct from "@/components/elements/Card/CardProduct";
import { dataItem } from "@/constants/Index";
import Sidebar from "./Sidebar";
import { ChevronDown } from "lucide-react";

export default function ProductSection({
  onOpenSort,
  onOpenSearch,
  onOpenFilter,
}) {
  return (
    <>
      <div className="flex flex-col w-full h-full gap-4 lg:flex-row ">
        {/* Sidebar */}
        <div className="hidden w-full h-full sm:block sm:sticky sm:top-[4rem] sm:w-1/5 ">
          <Sidebar onOpenSearch={onOpenSearch} />
        </div>

        {/* Product Section */}
        <div className="relative w-full py-2 sm:w-4/5">
          {/* Sort and Filter Buttons */}
          <div className="sticky top-[3rem] py-4 bg-[#111111] z-10 flex items-center justify-center gap-2 mb-4 border-b-2 sm:justify-end border-[#A9A69F]/50">
            <h1 className="hidden text-end sm:inline-block text-[#A9A69F] text-[0.75rem] whitespace-nowrap">
              Sort product by
            </h1>
            <button
              onClick={onOpenFilter}
              className="flex items-center justify-center gap-2 w-full px-2 py-2 text-[0.75rem] font-semibold transition border border-zinc-700 rounded-xl bg-[#1a1a1a] hover:bg-[#282828] text-[#A9A69F] sm:w-auto sm:hidden"
            >
              Filter
              <ChevronDown size={16} />
            </button>
            <button
              onClick={onOpenSort}
              className="flex items-center justify-center gap-2 w-full px-2 py-2 text-[0.75rem] font-semibold transition border border-zinc-700 rounded-xl bg-[#1a1a1a] hover:bg-[#282828] text-[#A9A69F] sm:w-auto "
            >
              Sort
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-2">
            {dataItem.map((item, index) => (
              <div key={index}>
                <CardProduct
                  name={item.name}
                  images={item.images}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
