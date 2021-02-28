import React, { Component } from "react";
class TestimoniaItems extends Component {
  render() {
    return (
      <div className="col-3">
        <i className="fa fa-quote-left"></i>
        <p>{this.props.des}</p>
        <div className="riating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <img src={this.props.img} />
        <h3>{this.props.Name}</h3>
      </div>
    );
  }
}
export default TestimoniaItems;
