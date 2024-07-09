/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productData from "./productData";
import { CartContext } from "../Contexts/CartContext";

const ProductItem = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));
  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <div className=" px-4 z-20 flex flex-col items-center justify-center gap-10 lg:mt-[30px] lg:items-start lg:pl-[105px] lg:pr-[87px]">
      <div className="flex flex-col items-center justify-center mt-[58px] lg:flex-row lg:justify-start gap-10">
        <img
          className="w-[358px] h-[380px] rounded-2xl xl:w-[349px] lg:h-[465px]"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-col gap-4 lg:gap-6">
          <p className="text-[#008C27] text-lg/[22.3px] font-cb -mb-3">
            {product.status}
          </p>
          <h1 className="text-3xl/[40px] font-tp text-black lg:text-[80px]/[80px]">
            {product.title}
          </h1>
          <p className="text-xl/[25px] text-[#787878] font-cb lg:text-[22px]/[27.28px]">
            {product.price}
          </p>
          <p className="text-lg/[24px] text-black lg:text-[18px]/[22px] font-cb1">
            {product.description1}
          </p>
          <ul className="text-lg/[24px] text-black lg:text-[18px]/[22px] font-cb1 list-disc ml-5">
            <li>{product.description2}</li>
            <li>{product.description3}</li>
            <li>{product.description4}</li>
            <li>{product.description5}</li>
          </ul>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <label className="text-lg text-black lg:text-[18px]/[22px]">
              Size:
              <input
                type="range"
                min="1"
                max="5"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="ml-2 w-10/12"
              />
              <span>{size}</span>
            </label>
            <div className="mb-[112px]">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500">
                Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

{
  /*     <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-5">
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
      </div> */
}
