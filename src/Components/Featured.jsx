import { Link } from "react-router-dom";
import productData from "./productData";

const Featured = () => {
  return (
    <div className="mt-[150px] px-4 z-20 flex flex-col items-center justify-center gap-10 lg:mt-[300px] xl:px-20 lg:items-start lg:pl-[105px] lg:pr-[87px]">
      <h1 className="text-[40px]/[40px] font-tp text-black lg:text-[80px]/[80px]">
        Featured Products
      </h1>
      <div className="flex flex-col items-center justify-center gap-8 lg:gap-5 lg:flex-row lg:flex-wrap">
        {productData.map((product, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Link to={`/product/${product.id}`}>
              <img
                className="w-[358px] h-[380px] rounded-2xl xl:w-[349px] lg:h-[465px]"
                src={product.image}
                alt={product.title}
              />
            </Link>
            <div className="flex items-center justify-between">
              <p className="text-xl/[25px] text-black font-tp lg:text-[22px]/[27.5px]">
                {product.title}
              </p>
              <p className="text-xl/[24.8px] text-[#787878] font-cb lg:text-[22px]/[27.28px]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
