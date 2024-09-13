import CheckItem from "@/components/elements/filter/CheckItem";
import CheckSize from "@/components/elements/filter/CheckSize";
import { X } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/stores/ModalSlice";

function Sidebar() {
  const dispatch = useDispatch();

  const handleOpenSearch = () => {
    dispatch(openModal("search"));
  };

  const handleClose = () => {
    dispatch(openModal(null)); // Assuming 'null' closes the modal
  };

  return (
    <div className="px-4 py-4 space-y-2 mt-12 bg-zinc-950 sm:px-0 sm:rounded-[1rem] rounded-t-[1rem]">
      <div className="relative flex items-end justify-end sm:hidden">
        <button
          className="duration-200 ease-in-out text-zinc-400 hover:text-red-500"
          onClick={handleClose}
        >
          <X size={18} />
        </button>
      </div>
      <CheckItem onOpenSearch={handleOpenSearch} />
      <CheckSize />
    </div>
  );
}

export default Sidebar;
