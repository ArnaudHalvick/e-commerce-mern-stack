import "./CartItems.css";

import remove_icon from "../assets/cart_cross_icon.png";

import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { cartItems, all_product, removeFromCart } = useContext(ShopContext);

  // Calculate cart totals
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

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

      {/* Cart Totals Section */}
      <div className="cart-totals">
        <h2 className="cart-totals-title">Cart Totals</h2>
        <div className="cart-totals-item">
          <p className="cart-totals-label">Subtotal</p>
          <p className="cart-totals-value">${getTotalAmount()}</p>
        </div>
        <div className="cart-totals-item">
          <p className="cart-totals-label">Shipping Fee</p>
          <p className="cart-totals-value">Free</p>
        </div>
        <hr className="cart-divider" />
        <div className="cart-totals-item">
          <p className="cart-totals-label">Total</p>
          <p className="cart-totals-value cart-total-amount">
            ${getTotalAmount()}
          </p>
        </div>
        <button className="checkout-button">PROCEED TO CHECKOUT</button>

        {/* Promo Code Section */}
        <div className="promo-code-section">
          <p className="promo-code-text">
            If you have a promo code, Enter it here
          </p>
          <div className="promo-code-input-container">
            <input
              type="text"
              className="promo-code-input"
              placeholder="promo code"
            />
            <button className="promo-code-submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
