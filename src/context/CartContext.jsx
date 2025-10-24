  import { createContext, useState } from "react";

  const CartContext = createContext();

  export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantityToAdd = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: quantityToAdd }];
      }
    });
  };





    const removeFromCart = (id) => {
      setCartItems((prevItems) =>
        prevItems
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0)
      );
    };

    const clearCart = () => setCartItems([]);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
      <CartContext.Provider
        value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export default CartContext;
