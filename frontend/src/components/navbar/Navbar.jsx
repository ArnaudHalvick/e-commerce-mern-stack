import "./Navbar.css";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");

  return (
    <div className="shop-navbar">
      <div className="shop-nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPSITE</p>
      </div>
      <ul className="shop-nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop {menu === "shop" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men">Men {menu === "men" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women {menu === "women" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids {menu === "kids" && <hr />}</Link>
        </li>
      </ul>
      <div className="shop-nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="shop-nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
