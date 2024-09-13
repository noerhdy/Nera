import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ButtonBack = ({ children, classname }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button
      className={`group rounded-xl font-semibold ${classname}sm:bg-transparent sm:hover:bg-transparent  bg-[#1a1a1a] hover:bg-[#282828]  ease-in-out duration-200 text-[0.725rem] sm:text-[1rem]`}
      type="submit"
      onClick={handleClick}
    >
      <div className="font-medium  group-hover:text-[#e5e4e2] text-[#A9A69F] ease-in-out duration-500 delay-100">
        {children}
      </div>
    </Button>
  );
};

export default ButtonBack;
