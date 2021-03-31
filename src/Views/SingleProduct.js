import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import sinImagen from "../assets/sin_imagen.jpg";
import Navbar from "../Components/Navbar";

function SingleProduct() {
  const [producto, setProduct] = useState({});
  const { iditem } = useParams();

  const productInfo = async () => {
    const single_product_url = `https://ecomerce-master.herokuapp.com/api/v1/item/${iditem}`;
    await axios
      .get(single_product_url)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    productInfo();
  }, []);

  return (
    <div>
      <Navbar />
      <p>Hola soy un solo producto</p>
      <p>{producto.product_name}</p>
      <p>{producto.description}</p>
      <p>{producto.price}</p>
      <p>{producto.category}</p>
      <p>{producto.brand}</p>
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

      <button>Comprar</button>
      <Link to="/">Todos los productos</Link>
    </div>
  );
}

export default SingleProduct;
