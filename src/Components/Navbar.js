// import React from "react";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Buscador from "./Buscador";
import payload from "../utils/payload";
import axios from "axios";
import "../styles/Navbar.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function NavbarComponent() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const token = window.localStorage.getItem("token");
  const [user, setUser] = useState({});
  const obtenerDatos = () => {
    if (token) {
      console.log("sin token ");
      const user2 = payload();
      let idUser = user2.id;
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };

      const obtenerUser = async () => {
        await axios
          .get(
            `https://ecomerce-master.herokuapp.com/api/v1/user/${idUser}`,
            config
          )
          .then((res) => {
            console.log("obteniendo data de usuario", res.data, res.status);
            setUser(res.data);

            console.log("soy user", user);
          })

          .catch((error) => {
            console.error(error.response.data);
          });
      };
      obtenerUser();
      console.log("soy user aslkdjasdlasjdlaks", user);
      console.log("soy el user activo", user.first_name);
    }
  };
  console.log("soy el perfil--------------------->>", user);
  const role = user.role;
  let admin;
  if (role === "ADMIN") {
    admin = true;
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const Logout = () => {
    window.localStorage.removeItem("token");
    return <Redirect to="/" />;
  };

  useEffect(() => {
    // console.log("itemSearch   ", itemsSearch);
    // obtenerUser();
    obtenerDatos();
  }, [token]);

  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        className="fixed-top nav-container"
      >
        <NavbarBrand href="/">DEVSHOP</NavbarBrand>
        {/* <Link to="/">
          <h2>DEVSHOP</h2>
        </Link> */}

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Buscador />
            </NavItem>
            {token ? (
              admin ? (
                <>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Hola {user.first_name}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/profile">Perfil</DropdownItem>
                      <DropdownItem>Crear Producto</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href="/logout">Cerrar sesion</NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink href="/profile">
                      Bienvenido!! {user.first_name}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/logout" onClick={Logout}>
                      Cerrar sesion
                    </NavLink>
                  </NavItem>
                </>
              )
            ) : (
              <>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Signup</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
