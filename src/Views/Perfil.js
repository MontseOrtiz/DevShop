import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import payload from "../utils/payload";
// import axios from "axios";
import NavbarComponent from "../Components/Navbar";

function Perfil({ user }) {
  console.log("soy el perfil--------------------->>", user);
  const role = user.role;
  let admin;
  if (role === "ADMIN") {
    admin = true;
  }

  return (
    <div>
      <NavbarComponent user={user} />
      <p>Soy el perfil</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      {admin ? <p>soy admin</p> : <p>no soy admin</p>}
    </div>
  );
}

export default Perfil;
