import React from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Navbar() {
  // console.log(user);
  return (
    <div>
      <Link to="/">
        <p>Logo</p>
      </Link>
      <p>Buscador</p>
      <Buscador />
      <div>
        <Link to="/">Bienvenido!!</Link>
        <Link to="/logout">Cerrar Sesión</Link>
      </div>
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
