/* eslint-disable react/prop-types */
const MobileMenu = ({menu}) => {
  return (
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
  );
};

export default MobileMenu;
