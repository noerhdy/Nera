import React from "react";

const CardProduct = ({ images, name, price }) => {
  return (
    <>
      <a href="#" className="group relative block overflow-hidden">
        <div className="size-full overflow-hidden ">
          <img
            src={images}
            alt={name}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
          />
        </div>

        <div className="relative text-center sm:text-end p-2">
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <p className="text-sm text-white">Rp. {price}.000</p>
        </div>
      </a>
    </>
  );
};

export default CardProduct;
