import React from "react";
import { Route } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Product from "./Views/Product";
import Signup from "./Views/Signup";

function Routes() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/item/:iditem">
        <Product />
      </Route>
    </>
  );
}

export default Routes;
