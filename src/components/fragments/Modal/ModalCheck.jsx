import InputForm from "@/components/elements/input";
import Input from "@/components/elements/input/InputIndex";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ModalCheck = ({ isVisible, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

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

  // Only render ModalCheck if it's mobile size
  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Background opacity animation */}
          <motion.div
            className="fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={onClose}
          ></motion.div>

          {/* Content animation */}
          <motion.div
            className="relative inset-0 z-40"
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            exit={{ y: 800 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="bottom-0 absolute w-full">
              <div className="w-full flex flex-col rounded-t-xl px-4 py-4 overflow-hidden bg-zinc-950">
                <div className="border-b-2 py-2 border-zinc-600">
                  <h1 className="font-semibold text-[1rem]">
                    Checkout Summary
                  </h1>
                </div>
                <div className="flex items-center w-full justify-between">
                  <h1 className="font-medium text-[1rem]">
                    Original Product Price
                  </h1>
                  <h1 className="font-semibold text-[1.2rem]">00</h1>
                </div>
                <h1 className="flex font-semibold text-[1rem] text-zinc-400">
                  (2)item
                </h1>
                <div className="flex items-center w-full justify-between font-medium text-[1rem] text-zinc-400">
                  <h1>Product Discount</h1>
                  <h1>-Rp.200.000</h1>
                </div>
                <div className="flex sm:pt-0 pt-4 items-center w-full justify-between">
                  <h1 className="font-medium text-[1rem]">
                    Total Product Price
                  </h1>
                  <h1 className="font-semibold text-[1.2rem]">Rp. 2.000.000</h1>
                </div>
                <div className="sm:py-8 py-4">
                  <Link to="/">
                    <Button className="rounded-xl text-[1rem] w-full">
                      Check Out
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalCheck;
