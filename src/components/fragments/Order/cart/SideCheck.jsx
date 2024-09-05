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
    <div className=" sm:w-2/5 w-full sm:relative bg-zinc-950  absolute  left-0 right-0 bottom-0  px-4">
      <div className="sm:flex hidden border-b-2 py-2 border-zinc-600">
        <h1 className="font-semibold text-[1rem]">Checkout Summary</h1>
      </div>
      <div className="sm:flex hidden items-center w-full justify-between ">
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
      <div className="flex sm:pt-0 pt-4  items-center w-full justify-between">
        <h1 className="font-medium text-[1rem]">Total Product Price</h1>
        <h1 className="sm:block hidden font-semibold text-[1.2rem]">
          Rp. 2.000.000
        </h1>
        <div className="flex sm:hidden  items-center gap-2">
          <h1 className="font-semibold text-[1.2rem]">Rp. 2.000.000</h1>
          <ChevronUp onClick={handleOpen} className="animate-pulse" />
        </div>
      </div>
      {/* button */}
      <div className="sm:py-8 py-4">
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
