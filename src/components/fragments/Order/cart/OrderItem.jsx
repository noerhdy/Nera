import { Minus } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Trash } from "lucide-react";
import { Plus } from "lucide-react";
import React from "react";

function OrderItem() {
  return (
    <>
      <section className="my-2 border-y-2 border-zinc-600">
        <div className="w-full gap-2    flex  ">
          {/* Gambar Produk */}
          <div className="relative size-24 flex-shrink-0">
            <img
              className="w-full h-auto aspect-square object-cover bg-center"
              src="./skuligan.jpg" // Mengambil gambar pertama dari array images
              alt="Product Image"
            />
          </div>

          {/* Detail Produk */}
          <div className="w-full flex justify-between text-wrap ">
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
            <div className="flex  flex-col justify-between   items-end  ">
              <button
                type="button"
                className=" text-red-900  p-2"
                //   onClick={handleRemove}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className=" border-t-2  border-zinc-700 items-center flex justify-between ">
          <div className="flex items-center gap-4 justify-between w-1/4   ">
            <button
              type="button"
              aria-label="Decrease quantity"
              //   onClick={handleMinusQuantity}
            >
              <Minus size={16} />
            </button>
            <span className="font-semibold text-[1rem]">1</span>
            <button
              type="button"
              aria-label="Increase quantity"
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
