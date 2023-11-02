import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://m.media-amazon.com/images/I/71mEsHyzSCL._SY355_.jpg"
        alt=""
        className="checkoutProduct_image"
      />
      <div className="checkoutproduct_info">
        <p className="checkoutProduct_title">
          Bennett™ Mystic Formal Business Briefcase Bag Crossbody Messenger
          College Bags For Men Women MacBook INoteBook ITablet Laptop Upto 15.6
          Inch | Handbags with Shoulder Straps (Blue) 6 Months Warranty
        </p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutproduct_rating">⭐⭐</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
