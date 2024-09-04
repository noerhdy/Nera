import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ButtonCta = ({ onClick, children }) => {
  return (
    <button
      className="cursor-pointer group flex items-center"
      onClick={onClick}
    >
      <h3 className="font-medium text-sm group-hover:-translate-y-1 translate-x-0  group-hover:text-red-500 text-zinc-500 ease-in-out duration-500 delay-100">
        {children}
      </h3>
    </button>
  );
};

export default ButtonCta;
