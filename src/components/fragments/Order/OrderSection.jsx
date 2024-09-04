import { Button } from "@/components/ui/button";
import React from "react";
import OrderItem from "./OrderItem";
import ButtonNav from "@/components/elements/button/ButtonNav";
import Navbar from "../Navbar";

function OrderSection() {
  return (
    <section className="relative h-dvh bg-black ">
      <div className="p-[1.5rem]  font-normal  text-justify text-[0.75rem] sm:text-[1rem] text-white  leading-loose">
        {/* title */}
        <ButtonNav linkPage="/" classname="active-class">
          Go back
        </ButtonNav>
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
        <div className="p-4 flex flex-col sm:flex-row w-full h-fit justify-center items-center bg-zinc-900/40 gap-2 ">
          {/* sideL */}
          <div className=" sm:size-3/5 size-full">
            <div className="max-h-[500px] overflow-auto pr-0 sm:pr-6">
              <OrderItem />
              <OrderItem />
            </div>
          </div>
          {/* sideR */}
          <div className=" sm:w-2/5 w-full sm:relative bg-zinc-950  absolute  left-0 right-0 bottom-0  px-4">
            <div className="sm:flex hidden border-b-2 py-2 border-zinc-600">
              <h1 className="font-semibold text-[1rem]">Checkout Summary</h1>
            </div>
            <div className="sm:flex hidden items-center w-full justify-between ">
              <h1 className="font-medium text-[1rem]">
                Original Product Price
              </h1>
              <h1 className="font-semibold text-[1.2rem]">00</h1>
            </div>
            <h1 className="sm:flex hidden font-semibold text-[1rem] text-zinc-400">
              (2)item
            </h1>
            {/* item2 */}
            <div className="sm:flex hidden items-center w-full justify-between font-medium text-[1rem] text-zinc-400">
              <h1>Product Discount</h1>
              <h1> -Rp.200.000</h1>
            </div>
            {/* item3 */}
            <div className="flex sm:pt-0 pt-4  items-center w-full justify-between">
              <h1 className="font-medium text-[1rem]">Total Product Price</h1>
              <h1 className="font-semibold text-[1.2rem]">Rp. 2.000.000</h1>
            </div>

            <div className=" p-8">
              {/* <Toaster theme="dark" position="top-center" /> */}
              <Button
                // onClick={handleClick}
                className="rounded-full  py-6 text-[1rem] w-full pointer-events-none "
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
