import React from "react";
import "./Brands.css";
const Brands = () => {
  return (
    <div className="brands">
      <div className="small-contianer">
        <div className="row">
          <div className="col-5">
            <img src="images/logo-paypal.png" alt="" />
          </div>
          <div className="col-5">
            <img src="images/logo-coca-cola.png" alt="" />
          </div>
          <div className="col-5">
            <img src="images/logo-godrej.png" alt="" />
          </div>
          <div className="col-5">
            <img src="images/logo-philips.png" alt="" />
          </div>
          <div className="col-5">
            <img src="images/logo-white.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brands;
