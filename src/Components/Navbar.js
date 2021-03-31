// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";
import payload from "../utils/payload";
import getUser from "../hooks/getUser";
import axios from "axios";

function Navbar() {
  // const token = window.localStorage.getItem("token");
  // const user = payload();
  // const user = getUser();
  // const { user, idUser } = getUser();
  // console.log("que obtengo----->", user);
  // console.log("que obtengo", getUser);
  // console.log("soy el usuario", user);

  // useEffect(() => {
  //   const { user, idUser } = getUser();
  // }, [token]);

  const [user, setUser] = useState({});

  const user2 = payload();
  const token = window.localStorage.getItem("token");
  let idUser = user2.id;
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  };

  const obtenerUser = async () => {
    await axios
      .get(
        `https://ecomerce-master.herokuapp.com/api/v1/user/${idUser}`,
        config
      )
      .then((res) => {
        console.log("obteniendo data de usuario", res.data, res.status);
        setUser(res.data);
        console.log("soy user", user);
      })

      .catch((error) => {
        console.error(error.response.data);
      });
  };

  console.log("soy user aslkdjasdlasjdlaks", user);
  console.log("soy el user activo", user.first_name);

  if (token) {
    useEffect(() => {
      // console.log("itemSearch   ", itemsSearch);
      obtenerUser();
    }, [token]);
  }

  console.log("que obtengo----->", user);

  return (
    <div>
      <Link to="/">
        <p>Logo</p>
      </Link>
      <p>Buscador</p>
      <Buscador />
      {token ? (
        <div>
          <Link to="/profile">Bienvenido!! {user.first_name}</Link>
          <Link to="/logout">Cerrar Sesión</Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <p>Login</p>
          </Link>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
        </div>
      )}
      {/* <div>
        <Link to="/">Bienvenido!! </Link>
        <Link to="/logout">Cerrar Sesión</Link>
      </div> */}
      {/* <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/signup">
        <p>Signup</p>
      </Link> */}
    </div>
  );
}

export default Navbar;
