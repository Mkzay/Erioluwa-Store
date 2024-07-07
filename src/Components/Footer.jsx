const Footer = () => {
  return (
    <div className="mt-12 pt-20 pb-[100px] px-4 bg-[#1F1F1F] flex flex-col gap-10 lg:mt-20 lg:flex-row lg:pl-24 lg:pr-[200px] lg:gap-[163px]">
      <div className="flex flex-col gap-6 lg:w-[489px]">
        <h1 className="text-[40px]/[50px] text-white font-tp">
          Stay Updated on Latest Product Releases
        </h1>
        <form className="flex flex-col items-start gap-2 lg:flex-row">
          <input
            className="py-[14px] px-6 rounded-[46px] font-tp bg-[#292929] border border-[#3D3D3D] w-full lg:w-[320px]"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="py-[14px] px-8 rounded-[44px] font-tp bg-[#3D3D3D] w-full text-white lg:w-[161px]">
            Submit
          </button>
        </form>
      </div>
      <div className="flex items-center gap-10 font-tp text-[#3D3D3D] text-base/5 uppercase lg:w-[379px]">
        <ul className="flex flex-col gap-4">
          <li className="pb-2 text-xl/6 text-white">Pages</li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">categories</a>
          </li>
          <li>
            <a href="#">catalogue</a>
          </li>
          <li>
            <a href="#">testimonials</a>
          </li>
          <li>
            <a href="#">articles & blogs</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="pb-2 text-xl/6 text-white">Social media</li>
          <li>
            <a href="#">linkedin</a>
          </li>
          <li>
            <a href="#">x</a>
          </li>
          <li>
            <a href="#">instagram</a>
          </li>
          <li>
            <a href="#">facebook</a>
          </li>
          <li>
            <a href="#">pinterest</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
