import React from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  const token = window.localStorage.getItem("token");
  window.localStorage.removeItem("token");
  console.log("entrando logout", token);

  return <Redirect to="/" />;
}

export default Logout;
