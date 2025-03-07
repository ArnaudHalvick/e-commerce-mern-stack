import "./CartItems.css";

import remove_icon from "../assets/cart_cross_icon.png";

import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { cartItems, all_product, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart-section">
      <div className="cart-header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="cart-divider" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-item">
                <img className="cart-product-image" src={e.image} alt="" />
                <p className="cart-product-title">{e.name}</p>
                <p className="cart-product-price">${e.new_price}</p>
                <button className="cart-quantity-button">
                  {cartItems[e.id]}
                </button>
                <p className="cart-product-total">
                  ${e.new_price * cartItems[e.id]}
                </p>
                <img
                  className="cart-remove-icon"
                  onClick={() => removeFromCart(e.id)}
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr className="cart-divider" />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
