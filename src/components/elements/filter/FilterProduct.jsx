import React, { useState } from "react";
import { Check } from "lucide-react";

export default function FilterProduct() {
  const [selectedOption, setSelectedOption] = useState("featured");

  const options = [
    { value: "featured", label: "Featured" },
    { value: "oldest", label: "Oldest" },
    { value: "popular", label: "Most Popular" },
    { value: "low-price", label: "Lowest Price" },
    { value: "high-price", label: "Highest Price" },
    { value: "name-az", label: "Product Name (A-Z)" },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex flex-col flex-wrap gap-2">
      <div className="flex gap-2">
        <button
          onClick={() => handleOptionChange("all")}
          className={`px-2 py-2  text-sm font-semibold border border-zinc-700 flex items-center transition duration-200 ease-in-out rounded-xl 
          ${
            selectedOption === "all"
              ? "bg-[#5d5d5d] text-white"
              : "bg-zinc-950 text-zinc-700 hover:bg-zinc-800"
          }
        `}
        >
          All
          {selectedOption === "all" && (
            <Check size={16} className="inline-block ml-2" />
          )}
        </button>

        <button
          onClick={() => handleOptionChange("available")}
          className={`px-2 py-2  text-sm font-semibold border border-zinc-700 flex items-center transition duration-200 ease-in-out rounded-xl 
          ${
            selectedOption === "available"
              ? "bg-[#5d5d5d] text-white"
              : "bg-zinc-950 text-zinc-700 hover:bg-zinc-800"
          }
        `}
        >
          Available
          {selectedOption === "available" && (
            <Check size={16} className="inline-block ml-2" />
          )}
        </button>
      </div>

      {/* Tombol filter produk lainnya */}
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleOptionChange(option.value)}
          className={`px-2 py-2 text-sm text-start flex items-center font-semibold transition duration-200 ease-in-out rounded-xl 
            ${
              selectedOption === option.value
                ? " text-white"
                : "bg-zinc-950 text-zinc-700 hover:bg-zinc-800"
            }
          `}
        >
          {option.label}
          {selectedOption === option.value && (
            <Check size={16} className="inline-block ml-2" />
          )}
        </button>
      ))}
    </div>
  );
}
