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
    <div className="w-full px-4 pb-6">
      <h2 className="mb-2 text-[1rem] font-semibold text-[#A9A69F] ">Size</h2>
      <div className="flex gap-2 mb-4 ">
        {["M", "L", "XL"].map((size) => (
          <button
            key={size}
            onClick={() => handleCheckboxChange(size)}
            className={`px-4 py-1 text-sm font-semibold border border-zinc-700 flex items-center justify-center transition duration-200 ease-in-out rounded-full text-[0.75rem]
            ${
              selectedSizes[size]
                ? "bg-[#5d5d5d] text-white"
                : "bg-zinc-950 text-[#A9A69F] hover:bg-zinc-800"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <button
        onClick={handleApply}
        className="w-full px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out bg-[#5d5d5d] rounded-xl hover:bg-[#A9A69F]"
      >
        Apply
      </button>
    </div>
  );
};

export default CheckSize;
