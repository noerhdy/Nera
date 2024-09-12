import React from "react";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { id, name, price, images, slug } = props.data;

  return (
    <>
      <div>
        <Link to={slug} className="relative block overflow-hidden group">
          <div className="relative overflow-hidden appearance-none size-full ">
            <img
              className="object-cover transition duration-500 ease-in-out bg-center aspect-square hover:scale-105"
              src={images[0]}
            ></img>
          </div>
          <div className="relative p-2 text-center sm:text-end">
            <h3 className="text-[0.75rem] sm:text-[1rem] font-medium text-[#E7E7E7]">
              {name}
            </h3>
            <p className="text-[0.75rem] text-[#E7E7E7]">
              Rp.
              {new Intl.NumberFormat("id-ID").format(price)}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardProduct;
