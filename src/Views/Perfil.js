import React, { useState } from "react";
import NavbarComponent from "../Components/Navbar";
import "../styles/Profile.scss";
import avatar from "../assets/avatar.png";

// function Perfil({ user }) {
//   console.log("soy el perfil--------------------->>", user);
//   const { first_name, last_name, email } = user;
//   const [user2, setUser2] = useState(user);

//   const role = user.role;
//   let nombre = user.first_name;
//   let admin;
//   if (role === "ADMIN") {
//     admin = true;
//   }

//   return (
//     <div className="profile-container">
//       <NavbarComponent />
//       <div className="profile-content ">
//         <p>Soy el perfil</p>
//         <div>
//           <img src={avatar} alt={"Avatar"} className="img-avatar" />
//           <p>Hola {user2.first_name}</p>
//         </div>
//         <div>
//           <h2>Tus datos</h2>
//           <p>Nombre: {user.first_name}</p>
//           <p>Apellido:{user.last_name}</p>
//           <p>Correo: {user.email}</p>
//           {admin ? <p>Role: {role}</p> : <p>Role:{role}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

import Navbar from "../Components/Navbar";

function Perfil({ user }) {
  console.log("soy el perfil--------------------->>", user);
  // const role = user.role;
  // let admin;
  // if (role === "ADMIN") {
  //   admin = true;
  // }

  return (
    <div className="pt-5 mt-5">
      <Navbar />
      <p>Soy el perfil</p>
      {/* <p>{user.first_name}</p>
      <p>{user.last_name}</p> */}
      {/* {admin ? <p>soy admin</p> : <p>no soy admin</p>} */}
    </div>
  );
}

export default Perfil;
