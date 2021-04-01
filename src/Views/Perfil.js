import React, { useState, useEffect } from "react";
import NavbarComponent from "../Components/Navbar";
import "../styles/Profile.scss";
import avatar from "../assets/avatar.png";
import payload from "../utils/payload";
import axios from "axios";

function Perfil() {
  const token = window.localStorage.getItem("token");
  const [user, setUser] = useState({});
  let idUser = undefined;

  const obtenerDatos = () => {
    if (token != undefined) {
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
            setUser(res.data);
          })

          .catch((error) => {
            console.error(error.response.data);
          });
      };
      obtenerUser();
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
