import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Trash2, Plus, Minus } from "lucide-react";
import { changeQuantity, removeFromCart } from "@/stores/Cart";
import { dataItem } from "@/constants/Index";

const OrderItem = (props) => {
  const { productId, quantity: initialQuantity, size } = props.data;
  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(initialQuantity);
  const [availableStock, setAvailableStock] = useState(0); // State for available stock
  const dispatch = useDispatch();

  useEffect(() => {
    const productDetail = dataItem.find((product) => product.id === productId);
    setDetail(productDetail || {});

    // Set the available stock based on the selected size
    if (productDetail && productDetail.sizes && productDetail.sizes[size]) {
      setAvailableStock(productDetail.sizes[size].stock); // Get stock for the selected size
    }
  }, [productId, size]);

  const handleMinusQuantity = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    dispatch(changeQuantity({ productId, quantity: newQuantity, size }));
  };

  const handlePlusQuantity = () => {
    if (quantity + 1 <= availableStock) {
      // Only increase if stock is available
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      dispatch(changeQuantity({ productId, quantity: newQuantity, size }));
    } else {
      alert(`Maximum stock for ${size} is ${availableStock}`);
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ productId, size }));
  };

  return (
    <section className="my-2 border-y-2 border-[#A9A69F]">
      <div className="flex w-full gap-2">
        {/* Product Image */}
        <div className="relative flex-shrink-0 size-24">
          <img
            className="object-cover w-full h-auto bg-center aspect-square"
            src={detail?.images?.[0]}
            alt={detail.name}
          />
        </div>

        {/* Product Details */}
        <div className="flex justify-between w-full text-wrap">
          {/* Left - Product Name and Price */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="font-bold text-[1rem] text-start">
                {detail.name}
              </h1>
              <span className="font-semibold sm:text-[1rem] text-[0.75rem]">
                {size}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-medium text-[0.75rem]">
                Rp.{detail.price?.toLocaleString("id-ID")}
              </h1>
              {detail.discountPrice && (
                <p className="font-medium text-[0.75rem] line-through text-zinc-400">
                  Rp.{detail.discountPrice.toLocaleString("id-ID")}
                </p>
              )}
            </div>
          </div>

          {/* Right - Quantity Controls and Remove Button */}
          <div className="flex flex-col items-end justify-between">
            <button
              type="button"
              className="p-2 text-red-900"
              onClick={handleRemove}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-[#A9A69F]">
        <div className="flex items-center justify-between w-1/4 gap-4">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={handleMinusQuantity}
          >
            <Minus size={16} />
          </button>
          <span className="font-semibold text-[1rem]">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={handlePlusQuantity}
            disabled={quantity >= availableStock} // Disable if at max stock
            className={`${
              quantity >= availableStock
                ? "text-zinc-600  cursor-not-allowed"
                : ""
            }`}
          >
            <Plus size={16} />
          </button>
        </div>
        <h1 className="font-medium text-[1rem]">
          Rp.{(detail.price * quantity).toLocaleString("id-ID")}
        </h1>
      </div>
    </section>
  );
};

export default OrderItem;
