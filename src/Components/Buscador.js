import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Buscador() {
  const history = useHistory();
  const [palabra, setPalabra] = useState("");

  const buscador = () => {
    palabra.toLocaleLowerCase();
    palabra.length === 0
      ? history.push("/")
      : history.push(`/search/${palabra}`);
  };

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
