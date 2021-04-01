import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import sinImagen from "../assets/sin_imagen.jpg";
import NavbarComponent from "../Components/Navbar";
import "../styles/SingleProduct.scss";

function SingleProduct() {
  const token = window.localStorage.getItem("token");
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

  const hayUsuario = () => {
    if (token) {
      console.log("tenemos token yeiiiii -------->", token);
      return alert("Agregado a tu carrito");
    }
    console.log("no hay token");
    return alert(
      "Por favor inicia sesión o registrate para realizar una compra"
    );
  };

  useEffect(() => {
    productInfo();
  }, []);

  return (
    <div className="div-contenedor">
      <NavbarComponent />

      <div className="container div-contenido ">
        <div className="row ">
          <div className="col-11 col-md-7 my-auto m-auto">
            {producto.hasOwnProperty("image") ||
            producto.hasOwnProperty("images") === true ? (
              producto.image ? (
                <img
                  src={producto.image}
                  alt={producto.product_name}
                  className="img-single image-fluid"
                />
              ) : (
                <img
                  src={producto.images}
                  alt={producto.product_name}
                  className="img-single image-fluid"
                />
              )
            ) : (
              <div>
                <h4>sinImgen</h4>
                <img
                  src={sinImagen}
                  alt={producto.product_name}
                  className="img-single image-fluid"
                />
              </div>
            )}
          </div>
          <div className="col-11 col-md-5 mx-auto">
            <p className="nombre-producto">{producto.product_name}</p>
            <p className="marca-producto">{producto.brand}</p>
            <p className="categoria-producto">Categoria: {producto.category}</p>
            <p className="precio-producto">${producto.price}</p>

            <button className="btn-comprar" onClick={hayUsuario}>
              Comprar
            </button>
            <p className="descripcion-producto">{producto.description}</p>
            {/* <Link to="/">Todos los productos</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
