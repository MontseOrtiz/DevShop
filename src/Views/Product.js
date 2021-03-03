import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "../Components/CardProduct";

function Product() {
  const [productsList, setProductsList] = useState([]);

  async function obtainProducts() {
    const baseUrl = "https://ecomerce-master.herokuapp.com/api/v1/item";
    await axios
      .get(baseUrl)
      .then((res) => {
        console.log(res.data);
        setProductsList(res.data);
        // console.log("hola", productsList);
        // console.log("hola 2", productsList[0]);
        // console.log("hola 2", productsList[0].product_name);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    obtainProducts();
  }, []);

  return (
    <div>
      <h2>Soy Product page</h2>
      {productsList.map((producto) => {
        return <CardProduct producto={producto} key={producto._id} />;
      })}
    </div>
  );
}

export default Product;
