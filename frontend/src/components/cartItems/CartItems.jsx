import "./CartItems.css";

import remove_icon from "../assets/cart_cross_icon.png";

import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const {
    cartItems,
    all_product,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const [editableQuantities, setEditableQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    // Ensure value is a valid number and not less than 1
    const newValue = Math.max(1, parseInt(value) || 1);
    setEditableQuantities({ ...editableQuantities, [id]: newValue });

    // Update cart with the new quantity immediately
    const currentQuantity = cartItems[id];

    if (newValue !== currentQuantity) {
      // If new quantity is greater, add the difference
      if (newValue > currentQuantity) {
        for (let i = 0; i < newValue - currentQuantity; i++) {
          addToCart(id);
        }
      }
      // If new quantity is less, remove the difference
      else if (newValue < currentQuantity) {
        for (let i = 0; i < currentQuantity - newValue; i++) {
          removeFromCart(id);
        }
      }
    }
  };

  const handleQuantityBlur = (id) => {
    // Clear the editable state
    const newEditableQuantities = { ...editableQuantities };
    delete newEditableQuantities[id];
    setEditableQuantities(newEditableQuantities);
  };

  const handleRemoveAll = (id) => {
    // Remove all items of this product
    const quantity = cartItems[id];
    for (let i = 0; i < quantity; i++) {
      removeFromCart(id);
    }
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
                <div className="cart-quantity-controls">
                  <button
                    className="cart-quantity-adjust-btn"
                    onClick={() => removeFromCart(e.id)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="cart-quantity-input"
                    value={
                      editableQuantities[e.id] !== undefined
                        ? editableQuantities[e.id]
                        : cartItems[e.id]
                    }
                    onChange={(event) =>
                      handleQuantityChange(e.id, event.target.value)
                    }
                    onBlur={() => handleQuantityBlur(e.id)}
                    min="1"
                  />
                  <button
                    className="cart-quantity-adjust-btn"
                    onClick={() => addToCart(e.id)}
                  >
                    +
                  </button>
                </div>
                <p className="cart-product-total">
                  ${e.new_price * cartItems[e.id]}
                </p>
                <img
                  className="cart-remove-icon"
                  onClick={() => handleRemoveAll(e.id)}
                  src={remove_icon}
                  alt=""
                  title="Remove all"
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
          <p className="cart-totals-value">${getTotalCartAmount()}</p>
        </div>
        <div className="cart-totals-item">
          <p className="cart-totals-label">Shipping Fee</p>
          <p className="cart-totals-value">Free</p>
        </div>
        <hr className="cart-divider" />
        <div className="cart-totals-item">
          <p className="cart-totals-label">Total</p>
          <p className="cart-totals-value cart-total-amount">
            ${getTotalCartAmount()}
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
