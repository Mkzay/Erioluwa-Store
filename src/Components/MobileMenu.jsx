/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MobileMenu = ({ menu, handleMenu }) => {
  return (
    <div
      className={`${
        menu
          ? "-translate-y-[250%] duration-1000 ease-out"
          : "translate-y-0 duration-1000 ease-in"
      } w-full h-full flex flex-col items-center gap-2.5 fixed top-0 left-0 text-white text-3xl/[37.2px] font-bold bg-[#1F1F1F99] backdrop-filter backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between w-[358px] mt-4 mb-[108px] py-3 px-10 bg-black/10 rounded-lg text-center">
        <h1 className="text-white text-[18px]/[24.95px] font-tp font-normal">
          OXFORD BROGUES
        </h1>
        <button onClick={handleMenu}>X</button>
      </div>
      <ul className="flex flex-col items-center gap-2.5 text-3xl/[37.2px] font-bold">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <li>Support</li>
        <li>FAQs</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
