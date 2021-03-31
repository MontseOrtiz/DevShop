import React from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  window.localStorage.removeItem("token");
  return <Redirect to="/" />;
}

export default Logout;
