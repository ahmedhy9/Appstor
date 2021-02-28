import React, { Component } from "react";
import Products from "../Products";
// import ProductsData from "./ProductsData";
export const ProductsData = require("./Data.json");

function ProductsItems({ Setpric, setheadline, setimg, setSubImg }) {
  const cloData = (pric, headline, img, subimg) => {
    Setpric(pric);
    setheadline(headline);
    setimg(img);
    setSubImg(subimg);
  };

  const proudctItems = ProductsData.map((item) => {
    return (
      <Products
        id={item.id}
        img={item.img}
        headline={item.headline}
        des={item.des}
        onClick={() => cloData(item.des, item.headline, item.img, item.subimg)}
      />
    );
  });

  return (
    <>
      <h2 className="title">Featured products</h2>

      <div className="row">{proudctItems}</div>
    </>
  );
}

export default ProductsItems;
