import Input from "@/components/elements/input/InputIndex";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ModalOrder = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 w-full"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex justify-center ">
            <div className="w-full px-4 py-2 sm:w-1/2 ">
              <Link to="/order">
                <button className="flex flex-col  w-full items-center rounded-[1rem] bg-[#5d5d5d] py-2 px-4 ">
                  <span className="relative w-1/4 h-2 rounded-full sm:hidden bg-[#454545] "></span>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-start font-semibold text-[0.875rem] text-white">
                      <h1>2 Item in My Cart</h1>
                      <h1>Rp.200.000</h1>
                    </div>
                    <div className="relative font-semibold text-[0.875rem] text-white p-3">
                      <div className="absolute top-0 right-0">
                        <span className="relative flex items-center justify-center bg-black rounded-full size-5 ">
                          <span className="text-[0.75rem] ">2</span>
                        </span>
                      </div>
                      <ShoppingCart />
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalOrder;
