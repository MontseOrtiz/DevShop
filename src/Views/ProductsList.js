import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "../Components/CardProduct";

function ProductsList() {
  const [productsList, setProductsList] = useState([]);

  const obtainProducts = async () => {
    const baseUrl = "https://ecomerce-master.herokuapp.com/api/v1/item";
    await axios
      .get(baseUrl)
      .then((res) => {
        setProductsList(res.data);
        // console.log("hola", productsList);
        // console.log("hola 2", productsList[0]);
        // console.log("hola 2", productsList[0].product_name);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    obtainProducts();
  }, []);

  return (
    <div>
      <h2>Soy Product page</h2>

      {productsList.length > 0 ? (
        productsList.map((producto) => {
          return <CardProduct producto={producto} key={producto._id} />;
        })
      ) : (
        <h2>Cargando productos...</h2>
      )}
    </div>
  );
}

export default ProductsList;
