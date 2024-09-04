import { Button } from "@/components/ui/button";

const ButtonNavModal = ({ onClick, children, classname }) => {
  return (
    <Button
      className={`group rounded-xl font-semibold   ${classname} bg-zinc-900 ease-in-out duration-200 text-[0.725rem] sm:text-[1rem]`}
      type="submit"
      onClick={onClick}
    >
      <div className="font-medium text-[1rem] group-hover:text-red-500 text-zinc-500 ease-in-out duration-500 delay-100">
        {children}
      </div>
    </Button>
  );
};

export default ButtonNavModal;
