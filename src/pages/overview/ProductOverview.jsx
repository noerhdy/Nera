import CheckSize from "@/components/elements/filter/CheckSize";
import { Button } from "@/components/ui/button";
import { dataSize } from "@/constants/Index";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductOverview = () => {
  const [images] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(0);
  const [activeTab, setActiveTab] = useState("materials");
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (size) => {
    setSelectedSize(size); // Set only the selected size
  };

  const handleClearSize = () => {
    setSelectedSize(""); // Reset the selected size
  };

  return (
    <div className="w-full h-full px-4 pt-24 mb-16 sm:px-12">
      <div className="flex flex-col size-full gap-6 lg:flex-row ease-in-out transition duration-200">
        {/* Product Images */}
        <div className="flex flex-col gap-4 lg:w-2/5 ">
          <img
            src={activeImg}
            alt="Active product"
            className="object-cover max-w-screen-2xl  aspect-square"
          />
          <div className="flex flex-row flex-wrap justify-between w-full gap-2 sm:flex-nowrap">
            {Object.values(images).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className="object-cover size-36 cursor-pointer sm:size-48 lg:size-36 "
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col items-start gap-4 text-white lg:w-3/5 ease-in-out transition duration-200">
          <div>
            <h1 className="text-[1.5rem]">Anatomize</h1>
            <h1 className="font-semibold text-[1rem]">Rp. 2.000.000</h1>
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

            {/* Conditionally display Clear Button */}
            {selectedSize && (
              <button
                onClick={handleClearSize}
                className="text-[0.75rem] uppercase text-[#A9A69F] hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quantity Selector and Checkout */}
          <div className="flex items-center justify-between  w-3/4 gap-4 sm:w-2/5  ">
            <div className="flex items-center justify-between w-full gap-4 border py-2 px-2 border-[#A9A69F] ">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setAmount((prev) => Math.max(prev - 1, 0))} // Prevent negative quantity
              >
                <Minus size={12} />
              </button>
              <span className="font-semibold text-[0.75rem]">{amount}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                <Plus size={12} />
              </button>
            </div>
            <Link to="/">
              <Button className="py-2 text-[1rem] uppercase w-full">
                Add to cart
              </Button>
            </Link>
          </div>

          {/* Tabs Section */}
          <div className="text-black py-2  ">
            <ul
              className="flex   flex-wrap sm:flex-row flex-col text-sm font-medium text-start [&_li]:bg-zinc-950"
              role="tablist"
            >
              <li className="" role="presentation">
                <button
                  className={`inline-block w-full text-start  p-4 border-t-2 rounded-t-lg uppercase ${
                    activeTab === "materials"
                      ? "text-white border-white"
                      : "text-gray-500 border-transparent "
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
                      ? "text-white border-white"
                      : "text-gray-500 border-transparent "
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
                      ? "text-white border-white"
                      : "text-gray-500 border-transparent "
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
            <div className="container size-full ">
              {activeTab === "materials" && (
                <div
                  className="bg-gray-50 aspect-video gap-2 flex-col p-4 flex items-start justify-center
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
                    <li>Heavyweight 230 gsm</li>
                    <li>16s</li>
                    <li>Plastisol Ink printed details</li>
                  </ul>
                </div>
              )}

              {activeTab === "sizechart" && (
                <div
                  className="bg-gray-50 w-full flex items-center justify-center"
                  id="sizechart"
                  role="tabpanel"
                  aria-labelledby="sizechart-tab"
                >
                  <img
                    className="object-contain w-full aspect-video" // Keep aspect ratio and prevent distortion
                    src="./skuligan.jpg" // Replace with dynamic image if needed
                    alt="Size Chart Image"
                  />
                </div>
              )}

              {activeTab === "sizeguide" && (
                <div
                  className=" bg-gray-50 aspect-video p-4  flex flex-col gap-4 justify-center" // Consistent height
                  id="sizeguide"
                  role="tabpanel"
                  aria-labelledby="sizeguide-tab"
                >
                  <h1 className="w-full text-[1.5rem] uppercase py-2">
                    Size Guide
                  </h1>
                  <table className="w-full text-left rtl:text-right py-2 text-black table-fixed">
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

                  <h1 className="w-3/4 text-[0.875rem] text-black uppercase py-2">
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
