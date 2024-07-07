/* eslint-disable react/prop-types */
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "./productData";

const ProductItem = ({ addToCart }) => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));
  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-[150px] px-4 z-20 flex flex-col items-center justify-center gap-10 lg:mt-[300px] lg:items-start lg:pl-[105px] lg:pr-[87px]">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start gap-10">
        <img
          className="w-[358px] h-[380px] rounded-2xl xl:w-[349px] lg:h-[465px]"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-[40px]/[40px] font-tp text-black lg:text-[80px]/[80px]">
            {product.title}
          </h1>
          <p className="text-xl/[25px] text-[#787878] font-cb lg:text-[22px]/[27.28px]">
            {product.price}
          </p>
          <p className="text-lg/[24px] text-black lg:text-[18px]/[22px]">
            {product.description}
          </p>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <label className="text-lg text-black lg:text-[18px]/[22px]">
              Size:
              <input
                type="range"
                min="1"
                max="5"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="ml-2"
              />
              <span>{size}</span>
            </label>
            <label className="text-lg text-black lg:text-[18px]/[22px]">
              Quantity:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="ml-2 w-16"
              />
            </label>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500">
              Favorite
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-[30px]/[30px] font-tp text-black lg:text-[40px]/[40px] mt-10">
        Other Products
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-5">
        {productData
          .filter((item) => item.id !== product.id)
          .map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="flex flex-col gap-4"
            >
              <img
                className="w-[150px] h-[150px] rounded-lg xl:w-[200px] lg:h-[200px]"
                src={product.image}
                alt={product.title}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductItem;
