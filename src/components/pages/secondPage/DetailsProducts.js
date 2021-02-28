import React, { Component } from "react";
import "./DetailsProducts.css";
class DetailsProducts extends Component {
  render() {
    return (
      <div className="DetailsProducts">
        <div className="small-contianer singl-products">
          <div className="row">
            <div className="col-2">
              <img id="pr-img" src={this.props.img} width="100%" />
              <div className="small-img-row">
                <div className="small-img-col">
                  <img src={this.props.subimg.img1a} width="100%" />
                </div>
                <div className="small-img-col">
                  <img src={this.props.subimg.img1c} width="100%" />
                </div>
                <div className="small-img-col">
                  <img src={this.props.subimg.img1b} width="100%" />
                </div>
                <div className="small-img-col">
                  <img src={this.props.subimg.img1d} width="100%" />
                </div>
              </div>
            </div>
            <div className="col-2">
              <p>Home /T-shirt by HRX</p>

              <h2>{this.props.headline} </h2>
              <h4>{this.props.pric}</h4>
              <select>
                <option>Select Size </option>
                <option>xxx</option>
                <option>xxl</option>
                <option>xx</option>
                <option>m</option>
                <option>s</option>
              </select>
              <input type="number" value="1" />
              <a href="#" className="btn-commn">
                Add to cart
              </a>
              <h3>Products Details</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                pariatur minima sequi, temporibus officiis optio illo
                consequuntur iusto voluptatum explicabo?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailsProducts;
