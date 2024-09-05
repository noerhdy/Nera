import Input from "@/components/elements/input/InputIndex";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Search, X } from "lucide-react";

const ModalOrder = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 w-full z-50"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className=" flex justify-center">
            <div className="sm:w-1/2 w-full py-2 px-4 ">
              <button
                className="flex flex-col  w-full items-center rounded-[1rem] bg-black py-2 px-4 "
                onClick={onClose}
              >
                <span className="rounded-full relative sm:hidden h-2 w-1/4 bg-zinc-900 "></span>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col items-start font-semibold text-[0.875rem] text-white">
                    <h1>2 Item in My Cart</h1>
                    <h1>Rp.200.000</h1>
                  </div>
                  <div className="relative font-semibold text-[0.875rem] text-white p-3">
                    <div className="absolute top-0 right-0">
                      <span className="relative flex items-center justify-center rounded-full size-5 bg-red-500 ">
                        <span className="text-[0.75rem] ">2</span>
                      </span>
                    </div>
                    <ShoppingCart />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalOrder;
