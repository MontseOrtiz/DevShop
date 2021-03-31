// import React from "react";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Buscador from "./Buscador";
import payload from "../utils/payload";
import getUser from "../hooks/getUser";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Navbar() {
  const token = window.localStorage.getItem("token");
  const [user, setUser] = useState({});
  const qwer = () => {
    if (token) {
      console.log("sin token ");
      const user2 = payload();
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
      obtenerUser();
      console.log("soy user aslkdjasdlasjdlaks", user);
      console.log("soy el user activo", user.first_name);
    }
  };

  useEffect(() => {
    // console.log("itemSearch   ", itemsSearch);
    // obtenerUser();
    qwer();
  }, [token]);

  // console.log("user delde el navbar sldjalskjdlasjdlkasjldjasldkj", user);
  // const token = window.localStorage.getItem("token");
  // const [ifUser, setIfUser] = useState(user ? true : false);
  // if ((user = {})) {
  //   setIfUser(false);
  // }
  // setIfUser(true);
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

  // console.log("soy el user nav --------------------------------->", userName);
  // const [user, setUser] = useState({});
  // const token = window.localStorage.getItem("token");
  // const qwer = () => {
  //   console.log("sin token ");
  //   const user2 = payload();
  //   let idUser = user2.id;
  //   const config = {
  //     headers: {
  //       Authorization: `JWT ${token}`,
  //     },
  //   };

  //   const obtenerUser = async () => {
  //     await axios
  //       .get(
  //         `https://ecomerce-master.herokuapp.com/api/v1/user/${idUser}`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("obteniendo data de usuario", res.data, res.status);
  //         setUser(res.data);
  //         console.log("soy user", user);
  //       })

  //       .catch((error) => {
  //         console.error(error.response.data);
  //       });
  //   };
  //   obtenerUser();
  //   console.log("soy user aslkdjasdlasjdlaks", user);
  //   console.log("soy el user activo", user.first_name);
  // };
  // if (token) {
  //   useEffect(() => {
  //     // console.log("itemSearch   ", itemsSearch);
  //     // obtenerUser();
  //     qwer();
  //   }, [token]);
  // }
  // const log = () => {
  //   console.log("cerrando sesion");
  //   window.localStorage.removeItem("token");
  //   return <Redirect to="/" />;
  // };

  // console.log("que obtengo----->", user);
  // if (ifUser) {
  //   return (
  //     <div>
  //       <Link to="/">
  //         <p>Logo</p>
  //         {/* <p>{userName}</p> */}
  //         <p>{user.first_name}</p>
  //       </Link>
  //       <p>Buscador</p>
  //       <Buscador />

  //       <div>
  //         <Link to="/profile">Bienvenido!! {user.first_name}</Link>
  //         {/* <button onClick={log}>Cerrar Sesión</button>
  //           <Link to="/profile">Bienvenido!! </Link> */}
  //         <Link to="/logout"> Cerrar sesion</Link>
  //       </div>

  //       {/* <div>
  //         <Link to="/">Bienvenido!! </Link>
  //         <Link to="/logout">Cerrar Sesión</Link>
  //       </div>
  //       <Link to="/login">
  //         <p>Login</p>
  //       </Link>
  //       <Link to="/signup">
  //         <p>Signup</p>
  //       </Link> */}
  //     </div>
  //   );
  // }

  return (
    <div>
      <Link to="/">
        <p>Logo</p>
        {/* <p>{userName}</p> */}
        {/* <p>{user.first_name}</p> */}
      </Link>
      <p>Buscador</p>
      <Buscador />

      {token ? (
        <div>
          <Link to="/profile">Bienvenido!! {user.first_name}</Link>
          {/* <button onClick={log}>Cerrar Sesión</button>
          <Link to="/profile">Bienvenido!! </Link> */}
          <Link to="/logout"> Cerrar sesion</Link>
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
