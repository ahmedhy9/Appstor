import React from "react";
import "./Offer.css";
import { Link } from "react-router-dom";
import DetailsProducts from "./secondPage/DetailsProducts";
const Offer = () => {
  return (
    <div className="offer">
      <div className="small-contianer">
        <div className="row">
          <div className="col-2">
            <img src="images/exclusive.png" className="offer-img" />
          </div>
          <div className="col-2">
            <p>Exclusive Available on redStore</p>
            <h2>smart Band 4</h2>
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium adipisci quam, et magni nihil possimus!
            </small>
            <br />

            <a className="btn-commn">By now</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
