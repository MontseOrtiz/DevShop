import React from "react";
import { Route } from "react-router-dom";
// import Home from "./Views/Home";
import Login from "./Views/Login";
import ProductsList from "./Views/ProductsList";
import Signup from "./Views/Signup";
import SingleProduct from "./Views/SingleProduct";

function Routes() {
  return (
    <>
      <Route exact path="/">
        {/* <Home /> */}
        <ProductsList />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/item/:iditem">
        <SingleProduct />
      </Route>
    </>
  );
}

export default Routes;
