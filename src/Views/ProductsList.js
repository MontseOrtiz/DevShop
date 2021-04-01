import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "../Components/CardProduct";
import NavbarComponent from "../Components/Navbar";
import { useParams } from "react-router-dom";
import "../styles/CardProduct.scss";
import sinResultado from "../assets/sin_resultado.png";

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
        list = res.data;
      })
      .catch((err) => console.log(err));
    return list;
  };

  const buscador = async () => {
    let respuesta = await obtainProducts();

    setbusquedaList([]);
    setShowList([]);
    for (let i = 0; i < respuesta.length; i++) {
      const minusculas = respuesta[i]["product_name"].toLowerCase();
      if (minusculas.includes(itemsSearch) === true) {
        busquedaList.push(respuesta[i]);
      }
    }

    setShowList(busquedaList);
    if (showList.length === 0) {
      setMensaje(
        " Lo sentimos no hay resultados acerca de tu busqueda, busca de nuevo"
      );
    }
  };

  useEffect(() => {
    if (itemsSearch) {
      buscador();
    }
  }, [itemsSearch]);

  useEffect(() => {
    if (!itemsSearch) {
      obtainProducts();
    }
  }, []);

  return (
    <div className="div-all-products">
      <NavbarComponent />
      <div className="contenido">
        <h2 className="titulo-productos text-pattern">Nuestros Productos</h2>
        <div className="container-fluid px-5">
          <div className="row">
            {showList.length != 0 ? (
              showList.map((producto) => {
                return <CardProduct producto={producto} key={producto._id} />;
              })
            ) : (
              <>
                <p className="mensaje">{mensaje}</p>
                <img
                  src={sinResultado}
                  alt={"Sin resultado"}
                  className="img-mensaje"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
