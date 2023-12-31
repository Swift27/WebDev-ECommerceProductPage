import React, { useContext, useState } from "react";
import "./main.css";
import { AppContext } from "../../App";

import MainPictures from "../../components/pictures/Pictures";

import iconCart from "../../images/icon-cart-white.svg";

const Main = () => {
  const { amount, setAmount } = useContext(AppContext);
  const [tempAmount, setTempAmount] = useState(0);

  return (
    <div className="Main">
      <MainPictures />
      <div className="Main-content">
        <div className="Main-content-heading">
          <h4>SNEAKER COMPANY</h4>
          <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className="Main-content-text">
          <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durbale
            rubber outer sole, they'll withstand everything the weather can offer.
          </p>
        </div>
        <div className="Main-content-price">
          <div className="Main-content-price-top">
            <h2>$125.00</h2>
            <h3>50%</h3>
          </div>
          <div className="Main-content-price-bottom">
            <h4>$250.00</h4>
          </div>
        </div>
        <div className="Main-content-cart">
          <div className="Main-content-cart-amount">
            <button onClick={() => setTempAmount(tempAmount - 1)}>-</button>
            <h4>{tempAmount > 0 ? tempAmount : 0}</h4>
            <button onClick={() => setTempAmount(tempAmount + 1)}>+</button>
          </div>
          <div className="Main-content-cart-add">
            <img src={iconCart} />
            <button onClick={() => setAmount(amount + tempAmount)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
