import React, { useState } from "react";
import NavbarComponent from "../Components/Navbar";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";
import "../styles/Auth.scss";

function Signup() {
  const history = useHistory();
  const [mensaje, setMensaje] = useState();

  const sendForm = (inputs) => {
    if (inputs.password === inputs.password_confirmation) {
      delete inputs.password_confirmation;
      axios
        .post("https://ecomerce-master.herokuapp.com/api/v1/signup", inputs)
        .then(({ data, status }) => {
          console.log(data, status);
          history.push("/");
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    } else {
      setMensaje("Las contraseñas no coinciden");
    }
  };

  const { inputs, handleInputs, handleSubmit } = useForm(sendForm, {});

  return (
    <div className="signup-container">
      <NavbarComponent />
      <div className="signup-content">
        <h2 className="texto-bienvenida">Soy signup</h2>
        <p className="text-validacion">{mensaje}</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group flex-nowrap">
            <input
              type="text"
              required
              value={inputs.email}
              onChange={handleInputs}
              className="form-control"
              id="email"
              placeholder="Email"
              aria-label="email"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div className="input-group flex-nowrap">
            <input
              type="text"
              required
              value={inputs.first_name}
              onChange={handleInputs}
              className="form-control"
              id="first_name"
              placeholder="Primer Nombre"
              aria-label="first_name"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div className="input-group flex-nowrap">
            <input
              type="text"
              required
              value={inputs.last_name}
              onChange={handleInputs}
              className="form-control"
              id="last_name"
              placeholder="Apellido"
              aria-label="last_name"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div className="input-group flex-nowrap">
            <input
              type="password"
              required
              value={inputs.password}
              onChange={handleInputs}
              className="form-control"
              id="password"
              placeholder="Contraseña"
              aria-label="password"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div className="input-group flex-nowrap">
            <input
              type="password"
              required
              value={inputs.password_confirmation}
              onChange={handleInputs}
              className="form-control"
              id="password_confirmation"
              placeholder="Confirmación de contraseña"
              aria-label="password_confirmation"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div
          // className="col-6 mt-4"
          >
            <button type="submit" className="btn btn-primary sign-up-btn">
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
