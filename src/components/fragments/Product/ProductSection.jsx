import React from "react";
import CardProduct from "@/components/elements/Card/CardProduct";
import { dataItem } from "@/constants/Index";
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/stores/ModalSlice";

export default function ProductSection() {
  const dispatch = useDispatch();
  const selectedSizes = useSelector((state) => state.cart.selectedSizes);
  const searchQuery = useSelector((state) => state.cart.searchQuery);
  const isSortVisible = useSelector((state) => state.modal.sortModal);
  const isFilterVisible = useSelector((state) => state.modal.filterModal);

  const filteredProducts = dataItem.filter((item) => {
    const matchesSize =
      selectedSizes.length === 0 ||
      Object.keys(item.sizes).some(
        (size) => selectedSizes.includes(size) && item.sizes[size].stock > 0
      );

    const matchesSearchQuery = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesSize && matchesSearchQuery;
  });

  return (
    <div className="w-full h-full gap-4 lg:flex-row">
      <div className="hidden w-full h-full sm:block sm:sticky sm:top-[4rem] sm:w-1/5"></div>

      <div className="relative w-full py-2">
        <div className="sticky top-[3rem] py-4 bg-[#111111] z-10 flex items-center justify-center gap-2 mb-4 border-b-2 sm:justify-end border-[#A9A69F]/50">
          <h1 className="hidden text-end sm:inline-block text-[#A9A69F] text-[0.75rem] whitespace-nowrap">
            Sort product by
          </h1>
          <button
            onClick={() => dispatch(openModal("sort"))}
            className="flex items-center justify-center gap-2 w-1/2 px-2 py-2 text-[0.75rem] font-semibold transition border border-zinc-700 rounded-xl bg-[#1a1a1a] hover:bg-[#282828] text-[#A9A69F] sm:w-auto"
          >
            Sort
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-2">
          {filteredProducts.map((item, index) => (
            <CardProduct key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
