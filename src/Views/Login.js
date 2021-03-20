import React from "react";
import Navbar from "../Components/Navbar";

function Login() {
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
          <button type="submit" className="btn btn-info">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
