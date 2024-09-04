import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import React from "react";

function OrderItem() {
  return (
    <div className="w-full gap-2 my-2 overflow-hidden flex border-y-2 border-zinc-600 mx-auto">
      {/* Gambar Produk */}
      <div className="relative w-32 h-32 flex-shrink-0">
        <img
          className="w-full h-auto aspect-square object-cover"
          src="./skuligan.jpg" // Mengambil gambar pertama dari array images
          alt="Product Image"
        />
      </div>

      {/* Detail Produk */}
      <div className="w-full flex justify-between ">
        {/* Bagian Kiri - Nama Produk dan Harga */}
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col">
            <h1 className="font-bold text-[1rem] text-start ">Skuligan</h1>
            <span className="font-semibold sm:text-[1rem] text-[0.75rem]">
              L
            </span>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-medium  text-[0.875rem]">Rp.200.000</h1>
            <p className="font-medium text-[0.75rem] line-through text-zinc-400">
              Rp.200.000
            </p>
          </div>

          <div className="flex items-center gap-2 justify-between w-1/2 ">
            <button
              type="button"
              aria-label="Decrease quantity"
              //   onClick={handleMinusQuantity}
            >
              <Minus size={12} />
            </button>
            <span className="font-semibold text-[1rem]">1</span>
            <button
              type="button"
              aria-label="Increase quantity"
              //   onClick={handlePlusQuantity}
            >
              <Plus size={12} />
            </button>
          </div>
        </div>

        {/* Bagian Kanan - Kontrol Kuantitas dan Tombol Hapus */}
        <div className="flex flex-col justify-between  items-end  ">
          <button
            type="button"
            className=" text-red-900 font-semibold text-[0.875rem]"
            //   onClick={handleRemove}
          >
            Remove
          </button>
          <h1 className="font-semibold  text-[1rem]">Rp.200.000</h1>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
