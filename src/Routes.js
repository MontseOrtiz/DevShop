import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
// import Home from "./Views/Home";
import Login from "./Views/Login";
import Perfil from "./Views/Perfil";
import ProductsList from "./Views/ProductsList";
import Signup from "./Views/Signup";
import SingleProduct from "./Views/SingleProduct";
import axios from "axios";
import payload from "./utils/payload";
import { Redirect } from "react-router-dom";
// import Logout from "./Components/Logout";

function Routes({ user3, setUser3 }) {
  const Logout = () => {
    window.localStorage.removeItem("token");
    return <Redirect to="/" />;
  };
  // const token = window.localStorage.getItem("token");
  // const [user, setUser] = useState({});
  // let idUser = undefined;
  // console.log("soy user11111-----routes>", user);
  // const obtenerDatos = () => {
  //   if (token) {
  //     console.log("sin token ");
  //     const user2 = payload();
  //     idUser = user2.id;
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
  //           console.log("soy user2222-----routes>", user);
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
  // if (token && idUser != undefined) {
  //   useEffect(() => {
  //     // console.log("itemSearch   ", itemsSearch);
  //     // obtenerUser();
  //     obtenerDatos();
  //     console.log("sourlekdalskdmalskdlaskjlkasjflaksjfl", user);
  //   }, [token]);
  // }

  return (
    <>
      <Route exact path="/">
        {/* <Home /> */}
        <ProductsList />
      </Route>
      <Route exact path="/search/:itemsSearch">
        <ProductsList />
      </Route>
      <Route exact path="/login" setUser3={setUser3}>
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/item/:iditem">
        <SingleProduct />
      </Route>
      <Route path="/profile">
        <Perfil user3={user3} />
      </Route>
      <Route exact path="/logout" component={Logout} />
    </>
    //   <>
    //   <Route exact path="/">
    //     {/* <Home /> */}
    //     <ProductsList user={user} />
    //   </Route>
    //   <Route exact path="/search/:itemsSearch">
    //     <ProductsList user={user} />
    //   </Route>
    //   <Route exact path="/login">
    //     <Login user={user} />
    //   </Route>
    //   <Route exact path="/signup">
    //     <Signup user={user} />
    //   </Route>
    //   <Route exact path="/item/:iditem">
    //     <SingleProduct user={user} />
    //   </Route>
    //   <Route path="/profile">
    //     <Perfil user={user} />
    //   </Route>
    //   <Route exact path="/logout" component={Logout} />
    // </>
  );
}

export default Routes;
