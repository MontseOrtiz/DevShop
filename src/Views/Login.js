import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";

function Login() {
  const history = useHistory();
  // const [show, setShow] = useEffect(false);

  const divStyles = {
    display: "none",
  };
  const sendForm = (inputs) => {
    console.log("Ejecuté send form", inputs);

    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/login", inputs)
      .then(({ data, status }) => {
        console.log(data, status);
        const { token } = data;
        // const token = data.token;
        window.localStorage.setItem("token", token);
        history.push("/profile");
        if (status != 200) {
          divStyles = {
            display: "block",
          };
        }
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  // const check =(){

  // }

  // const sendForm = (inputs) => {
  //   console.log("Ejecuté sendForm2Elregresodelosformsasesino", inputs);
  //   if (inputs.password === inputs.password_confirmation) {
  //     delete inputs.password_confirmation;
  //     axios
  //       .post("https://ecomerce-master.herokuapp.com/api/v1/signup", inputs)
  //       .then(({ data, status }) => {
  //         console.log(data, status);
  //         history.push("/");
  //       })
  //       .catch((error) => {
  //         console.error(error.response.data);
  //       });
  //   } else {
  //     alert("Las contraseñas no coinciden, ¿qué pasó ahí? (°_°)/");
  //   }
  // };
  // const { inputs, handleInputs, handleSubmit } = useForm(sendForm, {
  //   email: "mali",
  //   password: "gatitos59",
  // });

  const { inputs, handleInputs, handleSubmit } = useForm(sendForm, {});

  return (
    <div>
      <Navbar />
      <h2>Soy Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            value={inputs.email}
            required
            onChange={handleInputs}
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div>
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="password"
            value={inputs.password}
            required
            onChange={handleInputs}
            className="form-control"
            id="password"
            placeholder="Contraseña"
          />
        </div>

        <div>
          <p style={divStyles}>Algo mal ha salido</p>
          <button type="submit" className="btn btn-info">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
