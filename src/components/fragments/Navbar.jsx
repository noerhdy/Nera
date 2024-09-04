import ButtonNav from "../elements/button/ButtonNav";
import { UserRound } from "lucide-react";
import ButtonCta from "../elements/button/ButtonCta";
import { NavLink } from "react-router-dom";
import ModalSearch from "./Modal/ModalSearch";
import { useState } from "react";
import { Search } from "lucide-react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 bg-black py-2 border w-full border-zinc-100/10 z-50">
      <div className="flex justify-between items-center px-4 lg:px-12">
        <div>
          <NavLink to="/">
            <h1 className="text-white sm:text-[2rem] text-[0.875rem] font-bold">
              DISARRAY
            </h1>
          </NavLink>
        </div>
        <div className="gap-2 flex justify-center items-center">
          <ButtonNav linkPage="/product" classname="active-class">
            Product
          </ButtonNav>
          <ButtonCta onClick={handleOpen}>
            <Search />
          </ButtonCta>
          <ModalSearch isVisible={isVisible} onClose={handleClose} />
          <ButtonNav linkPage="/product" classname="active-class">
            <UserRound size={20} />
          </ButtonNav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
