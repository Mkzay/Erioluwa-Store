/* eslint-disable react/prop-types */
const MobileMenu = ({menu}) => {
  return (
    <ul
      className={`${
        menu
          ? "-translate-y-[250%] duration-1000 ease-out"
          : "translate-y-0 duration-1000 ease-in"
      } w-full h-full flex flex-col items-center gap-2.5 fixed top-0 left-0 text-white text-3xl/[37.2px] font-bold bg-[#1F1F1F99] backdrop-filter backdrop-blur-sm`}
    >
      <h1 className="text-white text-[24.95px]/[24.95px] font-tp font-normal mt-4 mb-[108px] py-3 bg-black/10 rounded-lg w-[358px] text-center">OXFORD BROGUES</h1>
      <li>Home</li>
      <li>Cart</li>
      <li>Support</li>
      <li>FAQs</li>
    </ul>
  );
};

export default MobileMenu;
