import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
// import Home from "./Views/Home";
import Login from "./Views/Login";
import Perfil from "./Views/Perfil";
import ProductsList from "./Views/ProductsList";
import Signup from "./Views/Signup";
import SingleProduct from "./Views/SingleProduct";
import CreateProduct from "./Views/CreateProduct";
import { Redirect } from "react-router-dom";

function Routes() {
  const Logout = () => {
    window.localStorage.removeItem("token");
    return <Redirect to="/" />;
  };

  return (
    <>
      <Route exact path="/">
        {/* <Home /> */}
        <ProductsList />
      </Route>
      <Route exact path="/search/:itemsSearch">
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
      <Route path="/profile">
        <Perfil />
      </Route>
      <Route path="/create-product">
        <CreateProduct />
      </Route>
      <Route exact path="/logout" component={Logout} />
    </>
  );
}

export default Routes;
