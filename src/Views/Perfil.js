import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import payload from "../utils/payload";
// import axios from "axios";
import Navbar from "../Components/Navbar";

function Perfil({ user }) {
  console.log("soy el perfil--------------------->>", user);
  const role = user.role;
  let admin;
  if (role === "ADMIN") {
    admin = true;
  }
  //   const [userName, setUserName] = useState({});
  //   setUserName(user.first_name);

  //   const [user, setUser] = useState({});

  //   const user2 = payload();
  //   const token = window.localStorage.getItem("token");
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

  //   console.log("soy user aslkdjasdlasjdlaks", user);
  //   console.log("soy el user activo", user.first_name);

  //   if (token) {
  //     useEffect(() => {
  //       // console.log("itemSearch   ", itemsSearch);
  //       obtenerUser();
  //     }, [token]);
  //   }

  return (
    <div>
      <Navbar user={user} />
      <p>Soy el perfil</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      {admin ? <p>soy admin</p> : <p>no soy admin</p>}
    </div>
  );
}

export default Perfil;
