import React, { useContext } from "react";
import "./cart.css";
import { AppContext } from "../../App";

import { img1Thumbnail } from "../pictures/imports";
import iconDelete from "../../images/icon-delete.svg";

const Cart = () => {
  const { amount, setAmount } = useContext(AppContext);

  return (
    <div className="Cart">
      <div className="Cart-heading">
        <h2>Cart</h2>
      </div>
      <div
        className="Cart-content active"
        style={amount > 0 ? { display: "flex" } : { display: "none" }}
      >
        <img src={img1Thumbnail} className="Cart-content-thumbnail" />
        <div className="Cart-content-text">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {amount} <span>{"$" + 125.0 * amount + ".00"}</span>
          </p>
        </div>
        <img src={iconDelete} className="Cart-content-delete" onClick={() => setAmount(0)} />
      </div>
      <div
        className="Cart-content-inactive"
        style={amount > 0 ? { display: "none" } : { display: "flex" }}
      >
        <p>Your cart is empty.</p>
      </div>
      <div className="Cart-checkout" style={amount > 0 ? { display: "flex" } : { display: "none" }}>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
