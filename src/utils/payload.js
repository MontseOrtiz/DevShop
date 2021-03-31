// import axios from "axios";
export default function () {
  //   let responseData;
  const token = window.localStorage.getItem("token");
  if (token) {
    // eslint-disable-next-line no-unused-vars
    const [header, payload, signature] = token.split(".");
    const base64 = payload.replace("-", "+").replace("_", "/");
    const payloadObject = JSON.parse(window.atob(base64));

    // let idUser = payloadObject.id;
    // const config = {
    //   headers: {
    //     Authorization: `JWT ${token}`,
    //   },
    // };

    // axios
    //   .get(
    //     `https://ecomerce-master.herokuapp.com/api/v1/user/${idUser}`,
    //     config
    //   )
    //   .then((res) => {
    //     console.log("obteniendo data de usuario", res.data, res.status);
    //     console.log("soy user", res.data);
    //     responseData = res.data;

    //     // return res.data;
    //   })
    //   .catch((error) => {
    //     console.error(error.response.data);
    //   });

    // const obtenerInfo = async () => {
    //   await axios
    //     .get(
    //       `https://ecomerce-master.herokuapp.com/api/v1/user/${idUser}`,
    //       config
    //     )
    //     .then((res) => {
    //       console.log("obteniendo data de usuario", res.data, res.status);
    //       setUser(res.data);
    //       console.log("soy user", user);
    //     })

    //     .catch((error) => {
    //       console.error(error.response.data);
    //     });
    // };
    // obtenerInfo();

    return payloadObject;
  } else {
    null;
  }
}
