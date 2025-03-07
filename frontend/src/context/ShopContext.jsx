import { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

// TODO: make cart use ids instead of index because if product order changes, the index will change

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // TODO: Fix cart functions because they don't handle negative values, can lead to NaN, undefined, etc.
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const ctxValue = { all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={ctxValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
