import React, { useState, useEffect } from "react";
import NavbarComponent from "../Components/Navbar";
import "../styles/Profile.scss";
import avatar from "../assets/avatar.png";
import payload from "../utils/payload";
import axios from "axios";

function Perfil() {
  // console.log("soy el perfil--------------------->>", user);

  const token = window.localStorage.getItem("token");
  const [user, setUser] = useState({});
  let idUser = undefined;
  console.log("soy user11111-----routes>", user);

  const obtenerDatos = () => {
    console.log("entrando 2222");
    if (token != undefined) {
      console.log("entrando");
      const user2 = payload();
      idUser = user2.id;
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
            console.log("soy user2222-----routes>", user);
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

  const role = user.role;
  let nombre = user.first_name;
  let admin;
  if (role === "ADMIN") {
    admin = true;
  }

  useEffect(() => {
    obtenerDatos();
    console.log("sourle,mlmlmlmlmlkdalskdmalskdlaskjlkasjflaksjfl", user);
  }, [token]);

  return (
    <div className="profile-container">
      <NavbarComponent />
      <div className="profile-content ">
        <div className="avatar">
          <img src={avatar} alt={"Avatar"} className="img-avatar" />
          <p>Hola {user.first_name}</p>
        </div>
        <div className="info">
          <h2>Tus datos</h2>
          <p>Nombre: {user.first_name}</p>
          <p>Apellido:{user.last_name}</p>
          <p>Correo: {user.email}</p>
          {admin ? <p>Role: {role}</p> : <p>Role:{role}</p>}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
