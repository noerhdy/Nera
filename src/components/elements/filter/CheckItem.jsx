import { Search } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/stores/Cart";

const CheckItem = ({ onOpenSearch }) => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(""); // Inisialisasi dengan string kosong

  const handleSearch = () => {
    // Hanya mengirimkan query pencarian, tidak perlu setFilterCategory
    dispatch(setSearchQuery(selectedItem));
    onOpenSearch(); // Buka modal pencarian
  };

  return (
    <div className="flex flex-col gap-2 p-4 ">
      <button
        onClick={handleSearch}
        className="flex gap-2 items-center px-2 py-2 text-sm font-semibold transition duration-200 ease-in-out border border-zinc-700 rounded-xl bg-zinc-950 text-[#A9A69F] hover:bg-zinc-900"
      >
        <Search size={16} />
        Search
      </button>
      <button
        onClick={() => setSelectedItem("allProduct")}
        className={`px-2 py-2 text-sm font-semibold border border-zinc-700 flex items-center transition duration-200 ease-in-out rounded-xl
          ${
            selectedItem === "allProduct"
              ? "bg-[#5d5d5d] text-white"
              : "bg-zinc-950 text-[#A9A69F] hover:bg-zinc-900"
          }`}
      >
        All Product
      </button>
      <button
        onClick={() => setSelectedItem("discount")}
        className={`px-2 py-2 text-sm font-semibold border border-zinc-700 flex items-center transition duration-200 ease-in-out rounded-xl
          ${
            selectedItem === "discount"
              ? "bg-[#5d5d5d] text-white"
              : "bg-zinc-950 text-[#A9A69F] hover:bg-zinc-900"
          }`}
      >
        Discount
      </button>
    </div>
  );
};

export default CheckItem;
