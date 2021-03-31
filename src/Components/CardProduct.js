import React from "react";
import { Link } from "react-router-dom";
import sinImagen from "../assets/sin_imagen.jpg";

function CardProduct({ producto }) {
  return (
    <div>
      <p>{producto._id}</p>
      <Link to={`/item/${producto._id}`}>
        <h2>Soy un producto card</h2>
        {producto.hasOwnProperty("image") ||
        producto.hasOwnProperty("images") === true ? (
          producto.image ? (
            <img src={producto.image} alt={producto.product_name} />
          ) : (
            <img src={producto.images} alt={producto.product_name} />
          )
        ) : (
          <div>
            <h4>sinImgen</h4>
            <img src={sinImagen} alt={producto.product_name} />
          </div>
        )}

        <h4>{producto.product_name}</h4>
        <p>Precio $ {producto.price}</p>
      </Link>
    </div>
  );
}

export default CardProduct;