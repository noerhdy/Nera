import React from "react";

const CardProduct = ({ images, name, price }) => {
  return (
    <>
      <a href="#" className="relative block overflow-hidden group">
        <div className="relative overflow-hidden appearance-none size-full ">
          <img
            className="object-cover transition duration-500 ease-in-out bg-center aspect-square hover:scale-105"
            src={images}
          ></img>
        </div>
        <div className="relative p-2 text-center sm:text-end">
          <h3 className="text-[0.75rem] sm:text-[1rem] font-medium text-[#E7E7E7]">
            {name}
          </h3>
          <p className="text-[0.75rem] text-[#E7E7E7]">Rp. {price}</p>
        </div>
      </a>
    </>
  );
};

export default CardProduct;
