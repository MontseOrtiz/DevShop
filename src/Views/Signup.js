import React from "react";
import Navbar from "../Components/Navbar";

function Signup() {
  return (
    <>
      <Navbar />
      <p>Soy signup</p>
      {/* <form onSubmit={handleSubmit}>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
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
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
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
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
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
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
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
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
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

        <div className="col-6 mt-4">
          <button type="submit" className="btn btn-info">
            Crear Cuenta
          </button>
        </div>
      </form> */}
    </>
  );
}
export default Signup;
