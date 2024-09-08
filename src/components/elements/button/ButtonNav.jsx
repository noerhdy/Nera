import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ButtonNav = ({ children, linkPage, classname }) => {
  return (
    <>
      <NavLink to={linkPage}>
        <Button
          className={`group rounded-xl font-semibold ${classname} sm:bg-transparent sm:hover:bg-transparent bg-[#1a1a1a] hover:bg-[#282828] ease-in-out duration-200`}
          type="submit"
        >
          <h3 className="font-medium text-[0.75rem] sm:text-[1rem] group-hover:text-[#e5e4e2] text-[#A9A69F] ease-in-out duration-500 delay-100">
            {children}
          </h3>
        </Button>
      </NavLink>
    </>
  );
};

export default ButtonNav;
