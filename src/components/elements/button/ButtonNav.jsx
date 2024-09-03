import { NavLink } from "react-router-dom";

const ButtonNav = ({ children, linkPage, classname }) => {
  return (
    <NavLink
      to={linkPage}
      className={({ isActive }) =>
        isActive
          ? `text-white   rounded-xl  bg-zinc-800 ${classname} p-4 `
          : `text-zinc-400  bg-zinc-800 p-4 rounded-xl ${classname}`
      }
    >
      <button
        className={`whitespace-nowrap  px-4  text-center lg:text-[1rem] text-[0.825rem] font-semibold  ${classname}  ease-in-out duration-300`}
        type="submit"
      >
        {children}
      </button>
    </NavLink>
  );
};

export default ButtonNav;
