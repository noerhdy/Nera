import { Button } from "@/components/ui/button";
import React from "react";
import OrderItem from "./OrderItem";
import ButtonNav from "@/components/elements/button/ButtonNav";

function OrderSection() {
  return (
    <section className="relative h-fit leading-loose overflow-hidden">
      <div className="p-[1.5rem] font-normal h-dvh text-justify text-[0.75rem] sm:text-[1rem] text-white">
        {/* title */}
        <div className="flex w-full justify-between items-start">
          <div className="flex text-start flex-col">
            <h1 className="font-semibold text-[2rem]">Cart</h1>
          </div>
        </div>
        {/* cardempty */}
        {/* <div className="size-full flex  flex-col justify-center items-center">
          <h1 className="font-semibold text-[2rem]">Your Cart is empty</h1>
          <ButtonNav linkPage="/product" classname="active-class">
            Product
          </ButtonNav>
        </div> */}
        {/* endcardempty */}
        <div className="p-4 bg-black flex w-full gap-2">
          <div className="bg-green-500 size-3/5">
            <div className="max-h-80 overflow-y-auto pr-6">
              <OrderItem />
              <OrderItem />
            </div>
          </div>

          <div className="bg-blue-500 size-2/5">
            <div className="flex border-y-2 py-2 border-zinc-600">
              <h1 className="font-semibold text-[1rem]">Checkout Summary</h1>
            </div>
            <div className="flex  items-center w-full justify-between bg-slate-600">
              <h1 className="font-medium text-[1rem]">
                Original Product Price
              </h1>
              <h1 className="font-semibold text-[1.2rem]">00</h1>
            </div>
            <h1 className="font-semibold text-[1rem]">(2)item</h1>
            {/* item2 */}
            <div className="flex  items-center w-full justify-between bg-slate-600">
              <h1 className="font-medium text-[1rem]">Product Discount</h1>
              <h1 className="font-semibold text-[1.2rem]">00</h1>
            </div>
            {/* item3 */}
            <div className="flex  items-center w-full justify-between bg-slate-600">
              <h1 className="font-medium text-[1rem]">Total Product Price</h1>
              <h1 className="font-semibold text-[1.2rem]">00</h1>
            </div>

            <div className=" p-8">
              {/* <Toaster theme="dark" position="top-center" /> */}
              <Button
                // onClick={handleClick}
                className="rounded-full  py-6 text-[1rem] w-full "
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSection;
