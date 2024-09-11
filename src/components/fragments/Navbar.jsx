import ButtonNav from "../elements/button/ButtonNav";
import { UserRound, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import ButtonNavModal from "../elements/button/ButtonNavModal";

const Navbar = ({ onOpenSearch, onOpenOrder }) => {
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

          <ButtonNav linkPage="/productOverview" classname="active-class">
            Overview
          </ButtonNav>
          <ButtonNav linkPage="/order" classname="active-class">
            Order
          </ButtonNav>
          <ButtonNavModal
            onClick={onOpenOrder}
            classname="sm:bg-transparent sm:hover:bg-transparent"
          >
            cart
          </ButtonNavModal>

          <ButtonNavModal
            onClick={onOpenSearch}
            classname="sm:bg-transparent sm:hover:bg-transparent text-[0.75rem] "
          >
            <Search size={16} />
          </ButtonNavModal>
          <ButtonNav linkPage="eror" classname="active-class">
            <UserRound size={16} />
          </ButtonNav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
