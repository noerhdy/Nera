import ButtonNav from "../elements/button/ButtonNav";
import { UserRound } from "lucide-react";
import ButtonCta from "../elements/button/ButtonNavModal";
import { NavLink } from "react-router-dom";
import ModalSearch from "./Modal/ModalSearch";
import { useState } from "react";
import { Search } from "lucide-react";

const Navbar = ({ onOpenSearch, onOpenOrder }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full py-2 bg-black border border-zinc-100/10">
      <div className="flex items-center justify-between px-4 lg:px-12">
        <div>
          <NavLink to="/">
            <h1 className="text-white sm:text-[2rem] text-[0.875rem] font-bold">
              DISARRAY
            </h1>
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ButtonNav linkPage="/product" classname="active-class">
            Product
          </ButtonNav>
          <ButtonNav linkPage="/order" classname="active-class">
            Order
          </ButtonNav>
          <ButtonCta
            onClick={onOpenOrder}
            classname="sm:bg-transparent sm:hover:bg-transparent"
          >
            cart
          </ButtonCta>
          <ButtonCta
            onClick={onOpenSearch}
            classname="sm:bg-transparent sm:hover:bg-transparent"
          >
            <Search size={20} />
          </ButtonCta>
          <ButtonNav linkPage="eror" classname="active-class">
            <UserRound size={20} />
          </ButtonNav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
