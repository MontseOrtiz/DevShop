import { useState } from "react";

export default function getUser() {
  const token = window.localStorage.getItem("token");
  const [user, setUser] = useState({});
  let idUser = undefined;
  console.log("soy user11111-----routes>", user);
  const obtenerDatos = () => {
    console.log("entrando 2222");
    if (token) {
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
  // if (token && idUser != undefined) {
  //   useEffect(() => {
  //     // console.log("itemSearch   ", itemsSearch);
  //     // obtenerUser();
  //     obtenerDatos();
  //     console.log("sourle,mlmlmlmlmlkdalskdmalskdlaskjlkasjflaksjfl", user);
  //   }, [token]);
  // }
}
