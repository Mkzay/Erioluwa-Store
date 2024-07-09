const Hero = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="w-full h-[929.54px] absolute top-0 lg:hidden"
        src="Imgs/Rectangle 1.png"
        alt="product image"
      />
      <img
        className="w-[1376px] h-[829px] top-20 px-8 absolute hidden lg:flex"
        src="Imgs/desk.png"
        alt="product image"
      />
      <div className="z-20 mt-[307px] px-4 text-white lg:[159px] lg:pl-[68px] lg:pr-[60px] lg:w-[1137px]">
        <h1 className="font-tp  text-[46px]/[55.2px] mb-4 lg:pr-[482px] lg:mb-[79px]">
          Discover Timeless Elegant Luxury Men&apos;s Brogues
        </h1>
        <p className="font-cb text-xl/[24.8px] mb-8 lg:pr-[690px]">
          Our exclusive collection of executive men&apos;s brogues, crafted to
          elevate your style effortlessly.
        </p>
        <div className="font-cb flex flex-col gap-2 lg:flex-row">
          <button className="text-base/4 text-black bg-white rounded-[44px] py-4 px-8 h-12 w-[358px] lg:w-[209px] lg:h-[54px]">
            Browse Products
          </button>
          <button className="text-base/4 text-white border border-white rounded-[44px] py-4 px-8 h-12 w-[358px] lg:w-[145px] lg:h-[54px]">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
