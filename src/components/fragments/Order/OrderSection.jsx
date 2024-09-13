import React from "react";
import { useSelector } from "react-redux";
import { dataItem } from "@/constants/Index";
import ButtonNav from "@/components/elements/button/ButtonNav";
import OrderItem from "./cart/OrderItem";
import SideCheck from "./cart/SideCheck";
import ButtonBack from "@/components/elements/button/ButtonBack";

function OrderSection() {
  const carts = useSelector((store) => store.cart.items);

  const totalPrice = carts.reduce((acc, item) => {
    const product = dataItem.find((product) => product.id === item.productId);
    if (product) {
      const itemTotal = product.price * item.quantity;
      return acc + itemTotal;
    }
    return acc;
  }, 0);

  return (
    <section className="relative h-dvh bg-[#111]">
      <div className="px-4 py-2 font-normal text-justify text-[0.75rem] sm:text-[1rem] text-[#e5e4e2] leading-loose">
        {/* Title */}
        <ButtonBack linkPage="/">Go back</ButtonBack>
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col text-start">
            <h1 className="font-semibold text-[2rem]">Cart</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 sm:flex-row h-fit">
          {/* SideLeft */}
          <div className="sm:size-3/5 size-full">
            <div className="max-h-[500px] overflow-auto pr-0 pb-16 sm:pb-0 sm:pr-6">
              {carts.length > 0 ? (
                carts.map((item, index) => (
                  <OrderItem key={index} data={item} />
                ))
              ) : (
                <div className="bg-zinc text-center">
                  <p>Your cart is empty.</p>
                </div>
              )}
            </div>
          </div>
          {/* SideRight */}
          <SideCheck totalPrice={totalPrice} />
        </div>
      </div>
    </section>
  );
}

export default OrderSection;
