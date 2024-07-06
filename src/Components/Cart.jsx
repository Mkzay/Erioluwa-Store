/* eslint-disable react/prop-types */
const Cart = ({
  cartItems,
  totalSum,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  toggleCart,
}) => {
  return (
    <div className="cart absolute top-[62px] flex flex-col gap-7 bg-white w-full h-full px-[32px] font-cb">
      <div className="flex items-center justify-between w-full">
        <img src="/back.svg" alt="back" onClick={toggleCart} />
        <div className="flex items-center">
          <h1 className="text-3xl/[37.2px] text-db">Cart</h1>
          <img src="/cart.svg" alt="cart" />
        </div>
        <img src="/menu.svg" alt="menu" />
      </div>
      <div className="flex items-center flex-col gap-5">
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 border border-[#1770A3] rounded-[15px] h-[153px] w-[333px] px-2.5"
            >
              <div className="bg-[#F8FDFF] h-[123px] w-[136px] rounded-[10px] flex items-center justify-center">
                <img src={item.image} alt={item.title} className="h-[75px]" />
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-[#008C27] text-[10px]/[12.4px]">
                  {item.status}
                </span>
                <span className="text-[15px]/[18.6px] text-db">
                  {item.title}
                  <span className="text-sm text-black"> x{item.quantity}</span>
                </span>
                <span className="text-[15px]/[18.6px] text-[#787878]">
                  {item.price}
                </span>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                  <button onClick={() => decrementQuantity(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(index)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex items-center justify-between text-lg/[22.32px] text-db border-t pt-1 w-full border-[#005DA1]">
        <p>Total</p>
        <p>₦{totalSum.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-between gap-5 pb-10">
        <button className="rounded-[50px] border border-db text-db bg-white h-12 w-40">
          Cancel
        </button>
        <button className="rounded-[50px] bg-db text-white h-12 w-40">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Cart;
