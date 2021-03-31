import { useState } from "react";
import payload from "../utils/payload";
import axios from "axios";

export default function () {
  const user2 = payload();
  const token = window.localStorage.getItem("token");
  let idUser = user2.id;
  const [user, setUser] = useState();
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  };

  const obtenerInfo = async () => {
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
  obtenerInfo();

  return user;
  //   return {
  //     inputs,
  //     handleInputs,
  //     handleSubmit,
  //   };
}

// export default getUser;
