import { useState } from "react";
import productData from "./productData";

const Products = () => {
  const [quantities, setQuantities] = useState(productData.map(() => 1));

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  return (
    <div className="mt-[53px] flex items-center justify-center flex-wrap gap-4">
      {productData.map((product, index) => (
        <div
          key={index}
          className="h-[250px] w-[157px] border border-db rounded-2xl pt-[15px] pl-[11px] pr-2.5"
        >
          <div className="rounded-[10px] flex justify-center bg-[#F8FDFF]">
            <img src={product.image} alt={product.title} className="h-[88px]" />
          </div>
          <div className="mt-[9px]">
            <span className="text-[10px]/[12.4px]">{product.status}</span>
            <h1 className="text-[15px]/[18.6px] text-db">{product.title}</h1>
            <p className="text-[15px]/[18.6px] text-[#787878]">
              {product.price}
            </p>
          </div>
          <div className="mt-[13px] w-[129px] h-[29px] rounded-[5px] bg-gray-300 text-[#535353] text-[10px]/[12.21px] flex items-center gap-6 py-2 pl-[15px] pr-[7.67px]">
            <button>Add to cart</button>
            <div className="flex gap-2">
              <button onClick={() => decrementQuantity(index)}>-</button>
              <span>{quantities[index]}</span>
              <button onClick={() => incrementQuantity(index)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
