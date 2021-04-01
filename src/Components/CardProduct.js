import React from "react";
import "../styles/CardProduct.scss";
import { Link } from "react-router-dom";
import sinImagen from "../assets/sin_imagen.jpg";

function CardProduct({ producto }) {
  const token = window.localStorage.getItem("token");
  const hayUsuario = () => {
    if (token) {
      return alert("Agregado a tu carrito");
    }
    return alert(
      "Por favor inicia sesión o registrate para realizar una compra"
    );
  };
  if (!producto) {
    return <p>Cargando</p>;
  } else {
    return (
      // <div className="card-product">
      <div className="card-product col-11 col-sm-6 col-md-4 col-lg-3 p-1 p-md-3  mx-auto">
        {/* <p>{producto._id}</p> */}
        <Link to={`/item/${producto._id}`}>
          {/* <h2>Soy un producto card</h2> */}
          {producto.hasOwnProperty("image") ||
          producto.hasOwnProperty("images") === true ? (
            producto.image ? (
              <div className="img-div">
                <img
                  src={producto.image}
                  alt={producto.product_name}
                  className="image-fluid  "
                />
              </div>
            ) : (
              <div className="img-div  ">
                <img
                  src={producto.images}
                  alt={producto.product_name}
                  className="image-fluid  "
                />
              </div>
            )
          ) : (
            <div className="img-div  ">
              <img
                src={sinImagen}
                alt={producto.product_name}
                className="image-fluid  "
              />
            </div>
          )}
        </Link>
        <div className="d-flex d-row justify-content-between">
          <div>
            <p className="nombre-producto">{producto.product_name}</p>
            <p className="marca-producto">{producto.brand}</p>
          </div>
          <div>
            <p className="precio-producto">${producto.price}</p>
            <button onClick={hayUsuario}>Comprar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardProduct;
