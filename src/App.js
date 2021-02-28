import "./App.css";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import { ProductsData } from "./components/pages/Items/ProductsItems";
import DetailsProducts from "./components/pages/secondPage/DetailsProducts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-header">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
