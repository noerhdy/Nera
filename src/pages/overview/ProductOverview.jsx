import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { dataSize } from "@/constants/Index";
import { Minus, Plus } from "lucide-react";
import { dataItem } from "@/constants/Index";
import { addtoCart } from "@/stores/Cart";
import { useSelector } from "react-redux";
import { useModalContext } from "@/features/modals/ModalContext";

const ProductOverview = () => {
  const { slug } = useParams();
  const carts = useSelector((store) => store.cart.items);
  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const [activeTab, setActiveTab] = useState("materials");
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();
  const { handleOpenModal } = useModalContext();

  // Fetch product details based on slug
  useEffect(() => {
    const findDetail = dataItem.find((item) => item.slug === slug); // Find instead of filter for single match
    if (findDetail) {
      setDetail(findDetail);
    } else {
      window.location.href = "/"; // Redirect jika produk tidak ditemukan
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    if (detail && detail.images && detail.images.length > 0) {
      setActiveImage(detail.images[0]); // images [index 0] saat pertama kali dimuat
    }
  }, [detail]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleClearSize = () => {
    setSelectedSize("");
  };

  const handleAddToCart = () => {
    dispatch(
      addtoCart({
        productId: detail.id,
        quantity: quantity,
      })
    );
    handleOpenModal("order");
  };

  return (
    <div className="w-full h-full px-4 pt-24 mb-16 sm:px-12">
      <div className="flex flex-col gap-6 transition duration-200 ease-in-out size-full lg:flex-row">
        {/* Product Images */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          {detail.images && detail.images.length > 0 ? (
            <>
              <img
                src={activeImage} // Tampilkan gambar pertama
                alt={detail.name}
                className="bg-center bg-cover aspect-square"
              />
              <div className="flex flex-row flex-wrap w-full gap-2">
                {detail.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Detail image ${index + 1}`}
                    className={`object-cover cursor-pointer size-24 lg:size-28 brightness-50 ${
                      activeImage === img ? " brightness-100" : ""
                    }`}
                    onClick={() => setActiveImage(img)}
                    // Kamu bisa tambahkan logika onClick di sini jika ingin gambar besar berubah
                  />
                ))}
              </div>
            </>
          ) : (
            <p>No images available</p>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col items-start gap-4 text-white lg:w-2/5">
          <div>
            <h1 className="text-[1.5rem]">{detail.name}</h1>
            <h1 className="font-semibold text-[1rem]">
              Rp.{" "}
              {detail.price
                ? new Intl.NumberFormat("id-ID").format(detail.price)
                : "0"}
            </h1>
          </div>

          {/* Size Selection */}
          <div>
            <h2 className="mb-2 text-[0.75rem] font-semibold text-[#A9A69F]">
              Size
            </h2>
            <div className="flex gap-2 mb-4">
              {["M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`px-4 py-1 text-sm font-semibold border border-zinc-700 flex items-center justify-center transition duration-200 ease-in-out text-[0.75rem]
                  ${
                    selectedSize === size
                      ? "bg-[#5d5d5d] text-white"
                      : "bg-zinc-950 text-[#A9A69F] hover:bg-zinc-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {selectedSize && (
              <button
                onClick={handleClearSize}
                className="text-[0.75rem] uppercase text-[#A9A69F] hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex items-center justify-between w-3/4 gap-4 sm:w-2/5">
            <div className="flex items-center justify-between w-full gap-4 border py-2 px-2 border-[#A9A69F]">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={handleMinusQuantity}
                // disabled={quantity === 1}
              >
                <Minus size={12} />
              </button>
              <span className="font-semibold text-[0.75rem]">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={handlePlusQuantity}
              >
                <Plus size={12} />
              </button>
            </div>

            <Button
              className="py-2 text-[1rem] bg-zinc-600 hover:bg-zinc-800 uppercase w-full"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>

          <div className="py-2 text-black ">
            <ul
              className="flex flex-wrap sm:flex-row flex-col text-sm font-medium text-start [&_li]:bg-zinc-950"
              role="tablist"
            >
              <li className="" role="presentation">
                <button
                  className={`inline-block w-full text-start  p-4 border-t-2 rounded-t-lg uppercase ${
                    activeTab === "materials"
                      ? "text-[#e5e4e2] border-[#A9A69F]"
                      : "text-[#A9A69F] bg-zinc-900 border-transparent "
                  }`}
                  id="materials-tab"
                  type="button"
                  role="tab"
                  aria-controls="materials"
                  aria-selected={activeTab === "materials"}
                  onClick={() => setActiveTab("materials")}
                >
                  Materials
                </button>
              </li>

              <li className="" role="presentation">
                <button
                  className={`inline-block w-full text-start p-4 border-t-2 rounded-t-lg uppercase ${
                    activeTab === "sizechart"
                      ? "text-[#e5e4e2] border-[#A9A69F]"
                      : "text-[#A9A69F] bg-zinc-900 border-transparent "
                  }`}
                  id="sizechart-tab"
                  type="button"
                  role="tab"
                  aria-controls="sizechart"
                  aria-selected={activeTab === "sizechart"}
                  onClick={() => setActiveTab("sizechart")}
                >
                  Size Chart
                </button>
              </li>

              <li className="" role="presentation">
                <button
                  className={`inline-block w-full text-start p-4 border-t-2 rounded-t-lg uppercase ${
                    activeTab === "sizeguide"
                      ? "text-[#e5e4e2] border-[#A9A69F]"
                      : "text-[#A9A69F] bg-zinc-900 border-transparent "
                  }`}
                  id="sizeguide-tab"
                  type="button"
                  role="tab"
                  aria-controls="sizeguide"
                  aria-selected={activeTab === "sizeguide"}
                  onClick={() => setActiveTab("sizeguide")}
                >
                  Size Guide
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="container size-fit bg-zinc-950 text-[#e5e4e2]">
              {activeTab === "materials" && (
                <div
                  className=" aspect-video gap-2 flex-col p-4 flex items-start justify-center
          [&_p]:text-[0.75rem] " // Consistent height
                  id="materials"
                  role="tabpanel"
                  aria-labelledby="materials-tab"
                >
                  <h1 className="text-[1rem]">Material</h1>
                  <p>
                    Our material we used has better heat retention and
                    comfortable when used in all activities. With a thicker
                    material thickness than other materials, the material will
                    last much longer and continue to maintain its color after
                    several times washed.
                  </p>
                  <p>
                    For the best quality, we used Plastisol Ink for printing
                    details. This ink are the best choice because it has the
                    best quality screen printing colors, the colors look bright
                    and not dull.
                  </p>

                  <ul className="list-disc space-y-2 text-[0.75rem] ml-4">
                    <li>100% heavy cotton</li>
                    <li>{detail.material}</li>
                    <li>16s</li>
                    <li>Plastisol Ink printed details</li>
                  </ul>
                </div>
              )}

              {activeTab === "sizechart" && (
                <div
                  className="size-fit "
                  id="sizechart"
                  role="tabpanel"
                  aria-labelledby="sizechart-tab"
                >
                  <img
                    className="object-contain size-full" // Keep aspect ratio and prevent distortion
                    src={detail.imgsize} // Replace with dynamic image if needed
                    alt="Size Chart Image"
                  />
                </div>
              )}

              {activeTab === "sizeguide" && (
                <div
                  className="flex flex-col justify-center gap-4 p-4 text-[#e5e4e2]  aspect-video" // Consistent height
                  id="sizeguide"
                  role="tabpanel"
                  aria-labelledby="sizeguide-tab"
                >
                  <h1 className="w-full text-[1.5rem] uppercase py-2">
                    Size Guide
                  </h1>
                  <table className="w-full py-2 text-left table-fixed rtl:text-right">
                    <thead className="uppercase text-[0.75rem]">
                      <tr className="border-b dark:bg-gray-800 [&_th]:size-1/4">
                        <th>Size</th>
                        <th>Height</th>
                        <th>Weight</th>
                      </tr>
                    </thead>
                    <tbody className="text-[0.75rem] [&_td]:py-2">
                      {dataSize.map((item, index) => (
                        <tr
                          className="border-b dark:bg-gray-800 [&_td]:size-3/4"
                          key={index}
                        >
                          <td>{item.size}</td>
                          <td>{item.height}</td>
                          <td>{item.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h1 className="w-3/4 text-[0.875rem]  uppercase py-2">
                    Just a size guide for definite size, keep compare with size
                    chart
                  </h1>
                </div>
              )}
            </div>
          </div>
          {/* End Tabs Section */}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
