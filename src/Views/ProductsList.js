import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "../Components/CardProduct";
import NavbarComponent from "../Components/Navbar";
import { useParams } from "react-router-dom";
import "../styles/CardProduct.scss";

function ProductsList({ user }) {
  const { itemsSearch } = useParams();
  const [productsList, setProductsList] = useState([]);
  const [busquedaList, setbusquedaList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [mensaje, setMensaje] = useState("Cargando...");

  //Obtener todos los productos
  const obtainProducts = async () => {
    let list;
    setShowList([]);
    const baseUrl = "https://ecomerce-master.herokuapp.com/api/v1/item";
    await axios
      .get(baseUrl)
      .then((res) => {
        setProductsList(res.data);
        setShowList(res.data);
        console.log("soy la respuesta", res.data);
        list = res.data;
      })
      .catch((err) => console.log(err));
    return list;
  };

  const buscador = async () => {
    let respuesta = await obtainProducts();
    console.log("respuests buscador", respuesta);

    setbusquedaList([]);
    setShowList([]);
    for (let i = 0; i < respuesta.length; i++) {
      const minusculas = respuesta[i]["product_name"].toLowerCase();
      if (minusculas.includes(itemsSearch) === true) {
        busquedaList.push(respuesta[i]);
      }
    }

    console.log("soy busqueda", busquedaList);
    setShowList(busquedaList);
    console.log("soy show list "), showList;
    if (showList.length === 0) {
      setMensaje(
        " Lo sentimos no hay resultados acerca de tu busqueda, busca de nuevo"
      );
    }
  };

  if (itemsSearch) {
    useEffect(() => {
      console.log("itemSearch   ", itemsSearch);
      buscador();
    }, [itemsSearch]);
  } else {
    useEffect(() => {
      console.log("useeffect cambiolkasjda");
      obtainProducts();
    }, []);
  }

  return (
    <div className="div-all-products">
      <NavbarComponent user={user} />
      <h2 className="titulo-productos">Nuestros Productos</h2>
      {/* <div className="container-fluid d-flex flex-row flex-wrap justify-content-around"> */}
      <div className="container-fluid px-5">
        <div className="row">
          {showList.length != 0 ? (
            showList.map((producto) => {
              return <CardProduct producto={producto} key={producto._id} />;
            })
          ) : (
            <p>{mensaje}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
