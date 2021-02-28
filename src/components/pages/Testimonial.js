import React, { Component } from "react";
import TestimoniaItems from "./Items/TestimoniaItems";
import TestimoniaData from "../pages/Items/TestimoniaData";
import "./Testimonial.css";
class Testimonial extends Component {
  constructor() {
    super();
    this.state = { TestimoniaData: TestimoniaData };
  }
  maping(e) {
    const testmo = e.map((item) => (
      <TestimoniaItems
        key={item.id}
        img={item.img}
        des={item.des}
        Name={item.Name}
      />
    ));
    return testmo;
  }
  render() {
    return (
      <div className="testimonial">
        <div className="small-contianer">
          <div className="row">{this.maping(this.state.TestimoniaData)}</div>
        </div>
      </div>
    );
  }
}
export default Testimonial;
