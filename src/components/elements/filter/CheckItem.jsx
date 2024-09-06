import React, { useState } from "react";

const CheckItem = () => {
  const [selectedItem, setSelectedItem] = useState(""); // Inisialisasi dengan string kosong

  const handleItemChange = (value) => {
    setSelectedItem(value);
  };

  return (
    <div className="flex flex-col flex-wrap gap-2">
      <div className="flex gap-2">
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
    </div>
  );
};

export default CheckItem;
