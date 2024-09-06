import { Search } from "lucide-react";
import React, { useState } from "react";

const CheckItem = ({ onOpenSearch }) => {
  const [selectedItem, setSelectedItem] = useState(""); // Inisialisasi dengan string kosong

  const handleItemChange = (value) => {
    setSelectedItem(value);
  };

  return (
    <div className="flex flex-col gap-2 p-4 ">
      <button
        onClick={onOpenSearch}
        className="flex items-center px-2 py-2 text-sm font-semibold transition duration-200 ease-in-out border border-zinc-700 rounded-xl bg-zinc-950 text-zinc-700 hover:bg-zinc-800"
      >
        <Search size={16} />
        Search
      </button>
      <button
        onClick={() => handleItemChange("allProduct")}
        className={`px-2 py-2 text-sm font-semibold border border-zinc-700 flex items-center transition duration-200 ease-in-out rounded-xl 
          ${
            selectedItem === "allProduct"
              ? "bg-zinc-400 text-white"
              : "bg-zinc-950 text-zinc-700 hover:bg-zinc-800"
          }
        `}
      >
        All Product
      </button>

      <button
        onClick={() => handleItemChange("discount")}
        className={`px-2 py-2 text-sm font-semibold border border-zinc-700 flex items-center transition duration-200 ease-in-out rounded-xl 
          ${
            selectedItem === "discount"
              ? "bg-zinc-500 text-white"
              : "bg-zinc-950 text-zinc-700 hover:bg-zinc-800"
          }
        `}
      >
        Discount
      </button>
    </div>
  );
};

export default CheckItem;
