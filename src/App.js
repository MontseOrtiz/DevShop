import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";

import React, { useState, useEffect } from "react";
// import Navbar from "./Components/Navbar";

// import axios from "axios";
// import payload from "./utils/payload";

function App() {
  // const token = window.localStorage.getItem("token");
  // const [user, setUser] = useState({});
  // const obtenerDatos = () => {
  //   if (token) {
  //     console.log("sin token ");
  //     const user2 = payload();
  //     let idUser = user2.id;
  //     const config = {
  //       headers: {
  //         Authorization: `JWT ${token}`,
  //       },
  //     };

  //     const obtenerUser = async () => {
  //       await axios
  //         .get(
  //           `https://ecomerce-master.herokuapp.com/api/v1/user/${idUser}`,
  //           config
  //         )
  //         .then((res) => {
  //           console.log("obteniendo data de usuario", res.data, res.status);
  //           setUser(res.data);
  //           console.log("soy user", user);
  //         })

  //         .catch((error) => {
  //           console.error(error.response.data);
  //         });
  //     };
  //     obtenerUser();
  //     console.log("soy user aslkdjasdlasjdlaks", user);
  //     console.log("soy el user activo", user.first_name);
  //   }
  // };
  // if (token) {
  //   useEffect(() => {
  //     // console.log("itemSearch   ", itemsSearch);
  //     // obtenerUser();
  //     obtenerDatos();
  //   }, [token]);
  // }

  return (
    <Router>
      {/* <Navbar user={user} /> */}
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;
