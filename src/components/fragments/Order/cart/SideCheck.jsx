import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import React from "react";
import ModalCheck from "../../Modal/ModalCheck";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SideCheck() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full px-4 rounded-xl sm:w-2/5 sm:relative bg-zinc-950">
      <div className="hidden py-2 border-b-2 sm:flex border-[#A9A69F">
        <h1 className="font-semibold text-[1rem]">Checkout Summary</h1>
      </div>
      <div className="items-center justify-between hidden w-full sm:flex ">
        <h1 className="font-medium text-[1rem]">Original Product Price</h1>
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
      <div className="flex items-center justify-between w-full pt-4 sm:pt-0">
        <h1 className="font-medium text-[1rem]">Total Product Price</h1>
        <h1 className="sm:block hidden font-semibold text-[1.2rem]">
          Rp. 2.000.000
        </h1>
        <div className="flex items-center gap-2 sm:hidden">
          <h1 className="font-semibold text-[1.2rem]">Rp. 2.000.000</h1>
          <ChevronUp onClick={handleOpen} className="animate-pulse" />
        </div>
      </div>
      {/* button */}
      <div className="py-4 sm:py-8">
        {isMobile ? (
          // If mobile, just show disabled button without Link
          <Button className="rounded-xl text-[1rem] w-full" disabled>
            Check Out
          </Button>
        ) : (
          // If not mobile, enable the Link and Button
          <Link to="/">
            <Button className="rounded-xl text-[1rem] w-full">Check Out</Button>
          </Link>
        )}
      </div>
      <ModalCheck isVisible={isVisible} onClose={handleClose} />
    </div>
  );
}

export default SideCheck;
