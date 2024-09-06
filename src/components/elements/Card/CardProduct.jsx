import React from "react";

const CardProduct = ({ images, name, price }) => {
  return (
    <>
      <a href="#" className="group relative block overflow-hidden">
        <div className="relative  size-full appearance-none overflow-hidden ">
          <img
            className="object-cover aspect-square bg-center duration-500 ease-in-out transition hover:scale-105"
            src={images}
          ></img>
        </div>
        <div className="relative text-center sm:text-end p-2">
          <h3 className="text-[1rem] font-medium text-white">{name}</h3>
          <p className="text-[0.725rem] text-white">Rp. {price}.000</p>
        </div>
      </a>
    </>
  );
};

export default CardProduct;
