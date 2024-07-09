import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="top-[76px] absolute flex items-center justify-between py-3 px-4 w-[358px] h-16 rounded-lg bg-white/10 z-50 lg:w-[1223px] xl:w-full xl:px-48 lg:h-[26px] lg:bg-white lg:top-[38px]">
      <h1 className="text-white text-[24.95px]/[24.95px] font-tp lg:text-xl/6 lg:text-[#070707]">
        OXFORD BROGUES
      </h1>
      <button className="lg:hidden" onClick={handleMenu}>
        <img src="/Icon.png" alt="menu bar" />
      </button>
      <MobileMenu menu={menu} handleMenu={handleMenu} />
      <ul className="hidden items-center gap-[62px] text-[#070707] text-xl/[24.8px] font-cb lg:flex">
        <Link to="./">
          <li>Home</li>
        </Link>
        <Link to="./cart">
          <li>Cart</li>
        </Link>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default NavBar;
