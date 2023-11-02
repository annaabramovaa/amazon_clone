import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
