/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Checkout from "../Components/Checkout";
import Success from "../Components/Success";

const CartPage = () => {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    totalSum,
  } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const showPaymentMethod = () => {
    setShowCheckout(true);
  };

  const handlePaymentMethodSelected = (paymentDetails) => {
    console.log(paymentDetails);
    setShowCheckout(false);
    setShowSuccess(true);
  };

  const handleSuccessSubmit = () => {
    setShowSuccess(false);
    navigate("/");
  };

  return (
    <div className="cart fixed top-0 pt-[62px] flex flex-col gap-7 bg-white w-full h-full px-[32px] font-cb">
      {showCheckout ? (
        <Checkout onPaymentMethodSelected={handlePaymentMethodSelected} />
      ) : showSuccess ? (
        <Success
          toggleSuccess={() => setShowSuccess(false)}
          toggleHome={handleSuccessSubmit}
        />
      ) : (
        <>
          <div className="flex items-center justify-between w-full lg:hidden">
            <img src="/back.svg" alt="back" onClick={handleBackClick} />
            <div className="flex items-center">
              <h1 className="text-3xl/[37.2px] text-db">Cart</h1>
              <img src="/cart.svg" alt="cart" />
            </div>
            <img src="/menu.svg" alt="menu" />
          </div>
          <div className="flex items-center flex-col gap-5">
            {cart.length === 0 ? (
              <p className="text-lg text-gray-500">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2.5 px-2.5"
                >
                  <div className="bg-[#F8FDFF] h-[123px] w-[136px] rounded-[10px] flex items-center justify-center">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between gap-10 items-center flex-grow">
                    <span className="text-[15px]/[18.6px] text-db mr-2">
                      {item.product.title}
                      <span className="text-sm text-black">
                        {" "}
                        x{item.quantity}
                      </span>
                    </span>
                    <span className="text-[15px]/[18.6px] text-[#787878]">
                      {item.product.price}
                    </span>
                    <div className="mt-[13px] w-[129px] h-[29px] rounded-[5px] bg-[#23232340]/10 text-[#535353] text-[11px]/[12.21px] items-center justify-center gap-4 py-2 hidden lg:flex">
                      <button
                        className="underline"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                      <button onClick={() => decrementQuantity(index)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(index)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex items-center justify-between text-lg/[22.32px] text-db border-t pt-1 w-full border-[#005DA1]">
            <p>Total</p>
            <p>₦{totalSum().toFixed(2)}</p>
          </div>
          <div className="flex flex-col-reverse items-center justify-between gap-5 pb-10">
            <button className="rounded-[50px] border border-db text-db bg-white w-[330px] h-12">
              <Link to="/">Cancel</Link>
            </button>
            <button
              className="rounded-[50px] bg-db text-white w-[330px] h-12"
              onClick={showPaymentMethod}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
