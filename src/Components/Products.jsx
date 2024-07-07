/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import productData from "./productData";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";

const Products = ({ toggleSuccess, showSuccess, toggleHome }) => {
  const [quantities, setQuantities] = useState(productData.map(() => 1));
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isPaymentMethodVisible, setIsPaymentMethodVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const incrementQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;
    });
  };

  const decrementQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index]--;
      }
      return newQuantities;
    });
  };

  const addToCart = (product, quantity) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.title === product.title
      );

      if (existingItemIndex !== -1) {
        const newCartItems = [...prevCartItems];
        newCartItems[existingItemIndex].quantity += quantity;
        return newCartItems;
      } else {
        return [...prevCartItems, { ...product, quantity }];
      }
    });
    setIsCartVisible(true);
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  };

  const incrementCartQuantity = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems[index].quantity++;
      return newCartItems;
    });
  };

  const decrementCartQuantity = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      if (newCartItems[index].quantity > 1) {
        newCartItems[index].quantity--;
      }
      return newCartItems;
    });
  };

  const calculateTotalSum = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  const totalSum = calculateTotalSum();

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handlePaymentMethodSelected = (paymentData) => {
    setSelectedPaymentMethod(paymentData);
    setIsPaymentMethodVisible(false);
    toggleSuccess();
  };

  const showPaymentMethod = () => {
    setIsCartVisible(false); // Hide cart when proceeding to payment
    setIsPaymentMethodVisible(true);
  };

  return (
    <div>
      <div className="mt-[53px] pb-60 flex items-center justify-center flex-wrap gap-4 font-cb lg:mt-[153px] lg:px-20">
        {productData.map((product, index) => (
          <div
            key={index}
            className="h-[250px] w-[157px] border border-db rounded-2xl pt-[15px] pl-[11px] pr-2.5"
          >
            <div className="rounded-[10px] flex justify-center bg-[#F8FDFF]">
              <img
                src={product.image}
                alt={product.title}
                className="h-[88px]"
              />
            </div>
            <div className="mt-[9px]">
              <span
                className={`text-[10px]/[12.4px] ${
                  product.status === "In-stock" ||
                  product.status === "New stock"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {product.status}
              </span>
              <h1 className="text-[15px]/[18.6px] text-db">{product.title}</h1>
              <p className="text-[15px]/[18.6px] text-[#787878]">
                {product.price}
              </p>
            </div>
            <div className="mt-[13px] w-[129px] h-[29px] rounded-[5px] bg-gradient-to-r from-cg1 to-cg2 text-[#535353] text-[10px]/[12.21px] flex items-center gap-5 py-2 pl-[15px] pr-[7.67px] font-hn">
              <button
                onClick={() => addToCart(product, quantities[index])}
                disabled={product.status === "Sold out"}
              >
                {product.status === "Sold out" ? "Sold out" : "Add to cart"}
              </button>
              <div className="flex gap-2">
                <button onClick={() => decrementQuantity(index)}>-</button>
                <span>{quantities[index]}</span>
                <button onClick={() => incrementQuantity(index)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isCartVisible && (
        <Cart
          cartItems={cartItems}
          totalSum={totalSum}
          incrementQuantity={incrementCartQuantity}
          decrementQuantity={decrementCartQuantity}
          removeFromCart={removeFromCart}
          toggleCart={toggleCart}
          showPaymentMethod={showPaymentMethod}
        />
      )}
      {isPaymentMethodVisible && (
        <Checkout
          onPaymentMethodSelected={handlePaymentMethodSelected}
          toggleCheckout={toggleCart}
          toggleSuccess={toggleSuccess}
        />
      )}
      {showSuccess && (
        <Success toggleSuccess={toggleSuccess} toggleHome={toggleHome} />
      )}
    </div>
  );
};

export default Products;
