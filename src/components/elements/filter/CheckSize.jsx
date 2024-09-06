import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const CheckSize = () => {
  const [selectedSizes, setSelectedSizes] = useState({
    M: false,
    L: false,
    XL: false,
  });

  const handleCheckboxChange = (size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [size]: !prevSizes[size],
    }));
  };

  const handleApply = () => {
    const selected = Object.keys(selectedSizes).filter(
      (size) => selectedSizes[size]
    );
    console.log("Selected sizes: ", selected);
    // Tambahkan logika lain di sini, seperti filter produk berdasarkan ukuran
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto">
      <h2 className="mb-4 text-xl font-semibold text-white">Size</h2>
      <div className="flex gap-2 mb-4">
        {["M", "L", "XL"].map((size) => (
          <button
            key={size}
            onClick={() => handleCheckboxChange(size)}
            className={`px-2 py-2 text-sm font-semibold border border-zinc-700 flex items-center justify-center transition duration-200 ease-in-out rounded-xl
            ${
              selectedSizes[size]
                ? "bg-zinc-500 text-white"
                : "bg-zinc-950 text-zinc-700 hover:bg-zinc-800"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <button
        onClick={handleApply}
        className="w-full px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out bg-zinc-700 rounded-xl hover:bg-zinc-950"
      >
        Apply
      </button>
    </div>
  );
};

export default CheckSize;
