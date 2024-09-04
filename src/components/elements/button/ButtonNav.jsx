import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ButtonNav = ({ children, linkPage, classname }) => {
  return (
    <>
      <Button
        className={`group rounded-xl font-semibold ${classname} sm:bg-transparent sm:hover:bg-transparent bg-zinc-900 ease-in-out duration-200 text-[0.725rem] sm:text-[1rem]`}
        type="submit"
      >
        <NavLink to={linkPage}>
          <h3 className="font-medium text-[1rem] group-hover:text-red-500 text-zinc-500 ease-in-out duration-500 delay-100">
            {children}
          </h3>
        </NavLink>
      </Button>
    </>
  );
};

export default ButtonNav;
