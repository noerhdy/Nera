import { Minus } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Trash } from "lucide-react";
import { Plus } from "lucide-react";
import React from "react";
import { useState } from "react";

function OrderItem() {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <section className="my-2 border-y-2 border-[#A9A69F]">
        <div className="flex w-full gap-2 ">
          {/* Gambar Produk */}
          <div className="relative flex-shrink-0 size-24">
            <img
              className="object-cover w-full h-auto bg-center aspect-square"
              src="./skuligan.jpg" // Mengambil gambar pertama dari array images
              alt="Product Image"
            />
          </div>

          {/* Detail Produk */}
          <div className="flex justify-between w-full text-wrap ">
            {/* Bagian Kiri - Nama Produk dan Harga */}
            <div className="flex flex-col justify-between ">
              <div className="flex flex-col">
                <h1 className="font-bold text-[1rem] text-start ">Skuligan</h1>
                <span className="font-semibold sm:text-[1rem] text-[0.75rem]">
                  L
                </span>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-medium  text-[0.75rem]">Rp.200.000</h1>
                <p className="font-medium text-[0.75rem] line-through text-zinc-400">
                  Rp.200.000
                </p>
              </div>
            </div>

            {/* Bagian Kanan - Kontrol Kuantitas dan Tombol Hapus */}
            <div className="flex flex-col items-end justify-between ">
              <button
                type="button"
                className="p-2 text-red-900 "
                //   onClick={handleRemove}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-2 border-[#A9A69F]">
          <div className="flex items-center justify-between w-1/4 gap-4 border border-zinc-50 ">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setAmount((prev) => prev - 1)}
              //   onClick={handleMinusQuantity}
            >
              <Minus size={16} />
            </button>
            <span className="font-semibold text-[1rem]">{amount}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setAmount((prev) => prev + 1)}
              //   onClick={handlePlusQuantity}
            >
              <Plus size={16} />
            </button>
          </div>
          <h1 className="font-medium  text-[1rem]">Rp.200.000</h1>
          {/* <p className="font-medium text-[0.75rem] line-through text-zinc-400">
          Rp.200.000
        </p> */}
        </div>
      </section>
    </>
  );
}

export default OrderItem;
