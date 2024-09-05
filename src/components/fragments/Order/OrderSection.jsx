import React from "react";
import OrderItem from "./cart/OrderItem";
import ButtonNav from "@/components/elements/button/ButtonNav";
import SideCheck from "./cart/SideCheck";

function OrderSection() {
  return (
    <section className="relative h-dvh bg-black ">
      <div className="px-4 py-2  font-normal  text-justify text-[0.75rem] sm:text-[1rem] text-white  leading-loose">
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
        <div className=" flex flex-col sm:flex-row w-full h-fit justify-center items-center bg-zinc-900/40 gap-2 ">
          {/* SideLeft */}
          <div className=" sm:size-3/5 size-full">
            <div className="max-h-[500px] overflow-auto pr-0 sm:pr-6">
              <OrderItem />
              <OrderItem />
            </div>
          </div>
          {/* SideRight */}
          <SideCheck />
        </div>
      </div>
    </section>
  );
}

export default OrderSection;
