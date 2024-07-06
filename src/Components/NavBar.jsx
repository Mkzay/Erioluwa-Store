import { useState } from "react";

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
      <ul
        className={`${
          menu
            ? "-translate-y-[250%] duration-1000 ease-out"
            : "translate-y-0 duration-1000 ease-in"
        } w-full h-full flex flex-col items-center gap-2.5 fixed top-[150px] pt-[23px] text-db text-3xl/[37.2px] font-bold backdrop-filter backdrop-blur-sm`}
      >
        <li>Home</li>
        <li>Cart</li>
        <li>Support</li>
        <li>FAQs</li>
      </ul>
    </div>
  );
};

export default NavBar;
