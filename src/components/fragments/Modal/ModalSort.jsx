import Modal from "./Modal";
import { X } from "lucide-react";
import FilterProduct from "@/components/elements/filter/FilterProduct";

const ModalSort = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="flex flex-col w-full items-center sm:rounded-[1rem] rounded-none rounded-t-[1rem] shadow-xl bg-zinc-950 py-2 px-4">
        <div className="flex justify-between w-full gap-2 py-2">
          <h1 className="text-[#A9A69F] text-[1rem] font-semibold">
            Sort Products By
          </h1>
          <button
            className="duration-200 ease-in-out text-zinc-400 hover:text-red-500"
            onClick={onClose} // Close modal with animation
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex flex-col w-full py-4">
          <FilterProduct />
        </div>
      </div>
    </Modal>
  );
};

export default ModalSort;
