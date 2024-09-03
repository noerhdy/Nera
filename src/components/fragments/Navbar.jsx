import { ShoppingCart } from "lucide-react";
import ButtonNav from "../elements/button/ButtonNav";
import { UserRound } from "lucide-react";
import ButtonCta from "../elements/button/ButtonCta";

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 bg-black  py-2 border border-zinc-100/10  z-50 ">
      <div className="flex justify-between items-center px-4 lg:px-12">
        <div>
          <h1 className="text-white text-[2rem] font-bold">NERA</h1>
        </div>
        <div className="gap-2 flex justify-center items-center">
          <ButtonCta linkPage="/" classname="active-class">
            Product
          </ButtonCta>
          {/* <ButtonCta linkPage="/about" classname="active-class">
            About Us
          </ButtonCta> */}
          <ButtonCta linkPage="/cart" classname="active-class">
            <ShoppingCart size={22} />
          </ButtonCta>
          <ButtonCta linkPage="/product" classname="active-class">
            <UserRound />
          </ButtonCta>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
