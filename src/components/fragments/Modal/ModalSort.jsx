import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import FilterProduct from "@/components/elements/filter/FilterProduct";

const ModalSort = ({ isVisible, onClose }) => {
  useEffect(() => {
    // Disable scroll when modal is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to restore scroll when modal is unmounted or visibility changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 z-40 px-4 bg-black bg-opacity-80 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="fixed inset-0 top-0 z-40"
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            exit={{ y: 800 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-end justify-end h-full sm:items-center sm:justify-center">
              <div className="w-full px-4 sm:w-2/5">
                <div className="flex flex-col w-full items-center sm:rounded-[1rem] rounded-none rounded-t-[1rem] shadow-xl bg-zinc-950 py-2 px-4">
                  <div className="flex justify-between w-full gap-2 py-2">
                    <h1 className="text-[#A9A69F] text-[1rem] font-semibold">
                      Sort Products By
                    </h1>
                    <button
                      className="duration-200 ease-in-out text-zinc-400 hover:text-red-500"
                      onClick={onClose}
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="flex flex-col w-full py-4">
                    <FilterProduct />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalSort;
