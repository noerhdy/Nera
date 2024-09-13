import ButtonNav from "../elements/button/ButtonNav";
import { UserRound, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 w-full py-2 bg-[#111111]  ">
      <div className="flex items-center justify-between px-4 lg:px-12">
        <div>
          <NavLink to="/">
            <h1 className="text-[#e5e4e2] sm:text-[2rem] text-[0.875rem] font-bold">
              DISARRAY
            </h1>
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ButtonNav linkPage="/product" classname="active-class">
            Product
          </ButtonNav>
          <ButtonNav linkPage="" classname="active-class">
            <UserRound size={16} />
          </ButtonNav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
