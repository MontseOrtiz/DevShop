import React, { useEffect, useState } from "react";
import NavbarComponent from "../Components/Navbar";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import "../styles/Auth.scss";

import payload from "../utils/payload";

function Login({ setUser3 }) {
  const history = useHistory();
  const [mensaje, setMensaje] = useState();

  const sendForm = (inputs) => {
    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/login", inputs)
      .then(({ data, status }) => {
        // const token = data.token;
        const { token } = data;

        window.localStorage.setItem("token", token);

        history.push("/profile");
      })
      .catch((error) => {
        const errorStatus = error.response.data.status;
        if (errorStatus === "fail") {
          setMensaje("Algo no coincide, por favor intentalo de nuevo");
        }
      });
  };

  const { inputs, handleInputs, handleSubmit } = useForm(sendForm, {});

  return (
    <div className="login-container">
      <NavbarComponent />
      <div className="login-content">
        <h2 className="texto-bienvenida">Bienvenido de nuevo</h2>
        <p className="text-validacion">{mensaje}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={inputs.email}
              required
              onChange={handleInputs}
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={inputs.password}
              required
              onChange={handleInputs}
              className="form-control"
              id="password"
              placeholder="Contraseña"
              required
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
        </form>
        <p className="text-registro">
          Si no tienes una cuenta puedes registrarte
        </p>
        <button className="btn btn-primary signup-btn">
          <Link to="/signup"> Sign up</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
