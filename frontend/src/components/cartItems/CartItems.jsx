import "./CartItems.css";

import remove_icon from "../assets/cart_cross_icon.png";

import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { cartItems, all_product, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => removeFromCart(e.id)}
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
