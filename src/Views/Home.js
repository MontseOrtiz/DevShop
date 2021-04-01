import React from "react";
import CardProduct from "../Components/CardProduct";
import NavbarComponent from "../Components/Navbar";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <h2>Soy Home</h2>
      <CardProduct></CardProduct>
    </div>
  );
}

export default Home;
