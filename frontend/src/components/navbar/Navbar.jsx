import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="shop-navbar">
      <div className="shop-nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPSITE</p>
      </div>
      <ul className="shop-nav-menu">
        <li onClick={() => setMenu("shop")}>
          Shop {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>Men {menu === "men" && <hr />}</li>
        <li onClick={() => setMenu("women")}>
          Women {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          Kids {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="shop-nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart" />
        <div className="shop-nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
