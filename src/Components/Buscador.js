import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
// import PropTypes from "prop-types";

function Buscador() {
  const history = useHistory();
  const [palabra, setPalabra] = useState("");
  // const [productsList, setProductsList] = useState([]);
  // const [busquedaList, setbusquedaList] = useState([]);

  // const obtainProducts = async () => {
  //   const baseUrl = "https://ecomerce-master.herokuapp.com/api/v1/item";
  //   await axios
  //     .get(baseUrl)
  //     .then((res) => {
  //       console.log(res.status);
  //       setProductsList(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const buscador = () => {
    // console.log("lo que muestra el buscador ------>----->", productsList);
    setbusquedaList([]);

    // console.log(productsList);
    // for (let i = 0; i < productsList.length; i++) {
    //   const minusculas = productsList[i]["product_name"].toLowerCase();
    //   if (minusculas.includes(palabra) === true) {
    //     busquedaList.push(productsList[i]);
    //   }
    // }
    // setMostrarList(setbusquedaList);

    palabra.toLocaleLowerCase();
    palabra.length === 0
      ? history.push("/")
      : history.push(`/search/${palabra}`);
    // console.log(
    //   "lista  con busqueda hecha buscada ----------------------> ",
    //   busquedaList
    // );
  };

  // useEffect(() => {
  //   obtainProducts();
  // }, []);

  return (
    <div>
      <h1>hola</h1>
      <input
        onChange={(e) => {
          console.log(e.target.value);
          setPalabra(e.target.value.toLocaleLowerCase());
        }}
      />
      <button onClick={buscador}>Buscar</button>
    </div>
  );
}

export default Buscador;
