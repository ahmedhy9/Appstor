import React, { Component } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

class Products extends Component {
  render() {
    return (
      <>
        <div className="col-4" onClick={this.props.onClick}>
          <a href="#pr-img">
            <div id={this.props.id} className="item">
              <img src={this.props.img} />

              <h4>{this.props.headline}</h4>
              <p>{this.props.des}</p>
              <div className="riating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </a>
        </div>
      </>
    );
  }
}
export default Products;
