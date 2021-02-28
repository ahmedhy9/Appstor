import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h1>
            Give Your Workout A <br />
            New Style
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            <br />
            excepturi modi illo quasi rerum fugit repudiandae, sapiente
            veritatis quo cupiditate.
          </p>
          <a href="#" className="btn-commn">
            Explore Now
          </a>
        </div>
        <div className="col-2">
          <img src="images/image1.png" />
        </div>
      </div>
    </div>
  );
};
export default Header;
