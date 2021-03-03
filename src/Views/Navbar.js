import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <p>Logo</p>
      </Link>
      <p>Buscador</p>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/signup">
        <p>Signup</p>
      </Link>
    </div>
  );
}

export default Navbar;
