import { ShoppingCart } from "lucide-react";
import ButtonNav from "../elements/button/ButtonNav";
import { UserRound } from "lucide-react";
import ButtonCta from "../elements/button/ButtonCta";
import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 bg-black py-2 border w-full border-zinc-100/10  z-50 ">
      <div className="flex justify-between items-center px-4 lg:px-12 ">
        <div>
          <NavLink to="/">
            <h1 className="text-white sm:text-[2rem] text-[0.875rem] font-bold">
              DISARRAY
            </h1>
          </NavLink>
        </div>
        <div className="gap-2 flex justify-center items-center">
          <ButtonCta linkPage="/product" classname="active-class">
            Product
          </ButtonCta>
          {/* <ButtonCta linkPage="/about" classname="active-class">
            About Us
          </ButtonCta> */}
          <ButtonCta linkPage="/cart" classname="active-class">
            <Search size={20} />
          </ButtonCta>
          <ButtonCta linkPage="/product" classname="active-class">
            <UserRound size={20} />
          </ButtonCta>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
