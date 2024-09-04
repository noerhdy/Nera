import InputForm from "@/components/elements/input";
import Input from "@/components/elements/input/InputIndex";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { X } from "lucide-react";

const ModalSearch = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0  z-50 flex  justify-center bg-black bg-opacity-80 sm:px-0 px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="py-10 rounded-lg shadow-lg relative top-40 sm:w-1/2 w-full ">
            <div className="flex gap-2">
              <div className="w-full flex border-2 border-zinc-700 rounded-xl px-4 py-4 items-center overflow-hidden bg-black/80 ">
                <Input
                  classname="text-[1rem] outline-none round text-white bg-transparent    "
                  type="search"
                  placeholder="Search"
                  name="search"
                  autoComplete="user-search"
                />
                <button
                  onClick={onClose}
                  className="  text-[1.5rem] text-white transition duration-200"
                >
                  <Search />
                </button>
              </div>
              <button
                className="px-4 text-[2rem] rounded-xl bg-black/80 text-zinc-500 hover:text-red-500 duration-200 ease-in-out"
                onClick={onClose}
              >
                <X />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalSearch;
