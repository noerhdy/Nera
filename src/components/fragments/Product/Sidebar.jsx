import CheckItem from "@/components/elements/filter/CheckItem";
import CheckSize from "@/components/elements/filter/CheckSize";
import { X } from "lucide-react";
import React from "react";

function Sidebar({ onOpenSearch, onClose }) {
  return (
    <>
      <div className="px-4 py-4 space-y-2 mt-12 bg-zinc-950 sm:px-0 rounded-[1rem] sm:rounded-none ">
        <div className="relative flex items-end justify-end sm:hidden">
          <button
            className="duration-200 ease-in-out text-zinc-400 hover:text-red-500"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>
        <CheckItem onOpenSearch={onOpenSearch} />
        <CheckSize />
      </div>
    </>
  );
}

export default Sidebar;
