/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart([...cart, { product, quantity }]);
  };

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const totalSum = () => {
    const sum = cart.reduce((total, item) => {
      const price = parseFloat(item.product.price) || 0;
      const itemTotal = price * item.quantity;
      console.log(`Item: ${item.product.title}, Price: ${price}, Quantity: ${item.quantity}, Item Total: ${itemTotal}`);
      return total + itemTotal;
    }, 0);
    console.log(`Total Sum: ${sum}`);
    return sum;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        totalSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
