import { useState } from "react";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="mt-[3.875rem] pl-7 pr-[1.875rem] flex items-center justify-center gap-[7.3125rem] w-full font-cb">
      <h1 className="text-db text-2xl/[37.2px]">Erioluwa Store</h1>
      <button onClick={handleMenu}>
        <img src="/menu.svg" alt="menu bar" />
      </button>
      <MobileMenu menu={menu} />
    </div>
  );
};

export default NavBar;
