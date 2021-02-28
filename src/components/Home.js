import React, { useState } from "react";
import Header from "./Header";
import Brands from "./pages/Brands";
import Gtegories from "./pages/Gtegories";
import ProductsItems from "./pages/Items/ProductsItems";
import Offer from "./pages/Offer";
import DetailsProducts from "./pages/secondPage/DetailsProducts";
import Testimonial from "./pages/Testimonial";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  const [pric, Setpric] = useState("");
  const [headline, setheadline] = useState("");
  const [img, setimg] = useState("");
  const [subimg, setSubImg] = useState("");
  return (
    <>
      <div className="main-header">
        <Header />
      </div>
      <Gtegories />
      <div className="small-contianer">
        <ProductsItems
          Setpric={Setpric}
          setheadline={setheadline}
          setimg={setimg}
          setSubImg={setSubImg}
        />
      </div>
      <DetailsProducts
        pric={pric}
        headline={headline}
        img={img}
        subimg={subimg}
      />
      <Offer />
      <Testimonial />
      <Brands />
    </>
  );
}
export default Home;
