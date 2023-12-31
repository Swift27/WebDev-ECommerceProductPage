import React, { useContext, useState } from "react";

import "./navbar.css";
import Menu from "../../components/menu/Menu";
import Cart from "../../components/cart/Cart";
import App, { AppContext } from "../../App";

import iconMenu from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import iconCart from "../../images/icon-cart.svg";
import imageAvatar from "../../images/image-avatar.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const { amount } = useContext(AppContext);

  return (
    <>
      <div className="Navbar">
        {toggleCart && <Cart />}
        <div className="Navbar-left">
          <div className="Navbar-left-menu-small">
            <img src={iconMenu} alt="iconMenu" onClick={() => setToggleMenu(!toggleMenu)} />
          </div>
          <img src={logo} className="Navbar-logo" />
          <div className="Navbar-left-menu-big">
            <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          </div>
        </div>
        <div className="Navbar-right">
          <div className="Navbar-cart">
            <img src={iconCart} onClick={() => setToggleCart(!toggleCart)} />
            <p
              className="Navbar-cart-amount"
              style={amount > 0 ? { display: "flex" } : { display: "none" }}
            >
              {amount}
            </p>
          </div>
          <img src={imageAvatar} className="Navbar-avatar" />
        </div>
      </div>
      <div className="Navbar-left-menu-small">
        {toggleMenu && <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />}
      </div>
    </>
  );
};

export default Navbar;
