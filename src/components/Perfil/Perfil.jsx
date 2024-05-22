// import { useState } from "react";
// import "./Perfil.styles.css";
// import CustomInput from "../customs/CustomInput/CustomInput";
// import CustomButton from "../customs/CustomButton/CustomButton";

// const Perfil = () => {
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   const [imagenPerfil, setImagenPerfil] = useState(currentUser.imgProfile);
//   const [nombre, setNombre] = useState(currentUser.name);
//   const [rol, setRol] = useState(currentUser.role);
//   const [correo, setCorreo] = useState(currentUser.email);
//   const [nombreUsuario, setNombreUsuario] = useState(currentUser.username);
//   const [password, setPassword] = useState(currentUser.password);
//   let user_list = JSON.parse(localStorage.getItem("user_list"));

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagenPerfil(reader.result); // Convertir la imagen a Base64 y guardarla
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       imgPerfil: imagenPerfil,
//       nombre: nombre,
//       rol: rol,
//       correo: correo,
//       nombreUsuario: nombreUsuario,
//       password: password,
//     };
//     const updatedUserList = user_list.map((user) => {
//       if (user.nombreUsuario === currentUser.nombreUsuario) {
//         return {
//           ...user,
//           ...newUser,
//         };
//       }
//       return user;
//     });
//     localStorage.setItem("user_list", JSON.stringify(updatedUserList));
//     alert("Cambios guardados");
//   };

//   return (
//     <main className=" window-content ">
//       <div className="container-perfil">
//         <div className="subtitulo">
//           <h1>Perfil</h1>
//           <hr />
//         </div>
//         <div className="body-perfil">
//           <div className="img-perfil">
//             <img
//               src={imagenPerfil}
//               className="avatar img-circle img-thumbnail"
//               alt="avatar"
//             />

//             <input type="file" onChange={handleImageChange} />
//           </div>

//           <div>
//             <h3>Informacion Personal</h3>

//             <form role="form" onSubmit={handleSubmit}>
//               <div>
//                 <label>Nombre:</label>
//                 <div>
//                   <CustomInput
//                     type="text"
//                     value={nombre}
//                     onChange={(e) => setNombre(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label>Rol</label>
//                 <div>
//                   <CustomInput
//                     type="text"
//                     value={rol}
//                     onChange={(e) => setRol(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label>Correo:</label>
//                 <div>
//                   <CustomInput
//                     type="text"
//                     value={correo}
//                     onChange={(e) => setCorreo(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label>Nombre de Usuario:</label>
//                 <div>
//                   <CustomInput
//                     type="text"
//                     value={nombreUsuario}
//                     onChange={(e) => setNombreUsuario(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label>Contraseña:</label>
//                 <div>
//                   <CustomInput
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//               </div>
//             </form>
//             <CustomButton content="Guardar Cambios" onClick={handleSubmit} />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };
// export default Perfil;

// import { useState } from "react";
// import "./Perfil.styles.css";
// import CustomInput from "../customs/CustomInput/CustomInput";
// import CustomButton from "../customs/CustomButton/CustomButton";

// const Perfil = () => {
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   const [imagenPerfil, setImagenPerfil] = useState(currentUser.imgProfile);
//   const [nombre, setNombre] = useState(currentUser.name);
//   const [rol, setRol] = useState(currentUser.role);
//   const [correo, setCorreo] = useState(currentUser.email);
//   const [nombreUsuario, setNombreUsuario] = useState(currentUser.username);
//   // const [password, setPassword] = useState(currentUser.password);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagenPerfil(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newUser = {
//       imgProfile: imagenPerfil,
//       name: nombre,
//       role: rol,
//       email: correo,
//       username: nombreUsuario,
//       // password: password,
//     };

//     console.log(newUser);

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/v1/users/email/${currentUser.email}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("my-auth-app")}`,
//           },
//           body: JSON.stringify(newUser),
//         },
//       );

//       if (response.ok) {
//         alertChanges(currentUser, newUser);
//         alert("Cambios guardados con éxito.");
//       } else {
//         throw new Error("Error al actualizar el perfil.");
//       }
//     } catch (error) {
//       alert(`Error: ${error.message}`);
//     }
//   };

//   function alertChanges(oldUser, newUser) {
//     const changes = [];
//     if (oldUser.imgProfile !== newUser.imgProfile)
//       changes.push("imagen de perfil");
//     if (oldUser.name !== newUser.name) changes.push("nombre");
//     if (oldUser.role !== newUser.role) changes.push("rol");
//     if (oldUser.email !== newUser.email) changes.push("correo electrónico");
//     if (oldUser.username !== newUser.username)
//       changes.push("nombre de usuario");
//     if (oldUser.password !== newUser.password) changes.push("contraseña");

//     if (changes.length > 0) {
//       alert("Se cambiaron los siguientes campos: " + changes.join(", ") + ".");
//     } else {
//       alert("No se hicieron cambios.");
//     }
//   }

//   return (
//     <main className="window-content">
//       <div className="container-perfil">
//         <div className="subtitulo">
//           <h1>Perfil</h1>
//           <hr />
//         </div>
//         <div className="body-perfil">
//           <div className="img-perfil">
//             <img
//               src={imagenPerfil}
//               className="avatar img-circle img-thumbnail"
//               alt="avatar"
//             />
//             <input type="file" onChange={handleImageChange} />
//           </div>
//           <div>
//             <h3>Información Personal</h3>
//             <form role="form" onSubmit={handleSubmit}>
//               <CustomInput
//                 label="Nombre:"
//                 value={nombre}
//                 onChange={(e) => setNombre(e.target.value)}
//               />
//               <CustomInput
//                 label="Rol:"
//                 value={rol}
//                 onChange={(e) => setRol(e.target.value)}
//               />
//               <CustomInput
//                 label="Correo:"
//                 value={correo}
//                 onChange={(e) => setCorreo(e.target.value)}
//               />
//               <CustomInput
//                 label="Nombre de Usuario:"
//                 value={nombreUsuario}
//                 onChange={(e) => setNombreUsuario(e.target.value)}
//               />
//               {/* <CustomInput
//                 label="Contraseña:"
//                 type="password"
//                 // quiero ver la contrasena desencriptada en el frontend usando bcrypt
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               /> */}
//               <CustomButton content="Guardar Cambios" onClick={handleSubmit} />
//             </form>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Perfil;

import { useState } from "react";
import "./Perfil.styles.css";
import CustomInput from "../customs/CustomInput/CustomInput";
import CustomButton from "../customs/CustomButton/CustomButton";

const Perfil = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [imagenPerfil, setImagenPerfil] = useState(currentUser.imgProfile);
  const [nombre, setNombre] = useState(currentUser.name);
  const [rol, setRol] = useState(currentUser.role);
  const [correo, setCorreo] = useState(currentUser.email);
  const [nombreUsuario, setNombreUsuario] = useState(currentUser.username);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagenPerfil(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const constructUpdatedFields = () => {
    const fields = {};
    if (imagenPerfil !== currentUser.imgProfile)
      fields.imgProfile = imagenPerfil;
    if (nombre !== currentUser.name) fields.name = nombre;
    if (rol !== currentUser.role) fields.role = rol;
    if (correo !== currentUser.email) fields.email = correo;
    if (nombreUsuario !== currentUser.username) fields.username = nombreUsuario;
    return fields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFields = constructUpdatedFields();

    if (Object.keys(updatedFields).length === 0) {
      alert("No se han detectado cambios.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/users/email/${currentUser.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFields),
        },
      );

      if (response.ok) {
        alert("Cambios guardados con éxito.");
        // Actualiza los datos actuales en localStorage si es necesario
        const newUser = { ...currentUser, ...updatedFields };
        localStorage.setItem("currentUser", JSON.stringify(newUser));
      } else {
        const errorData = await response.json();
        alert(`Error al actualizar: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <main className="window-content">
      <div className="container-perfil">
        <div className="subtitulo">
          <h1>Perfil</h1>
          <hr />
        </div>
        <div className="body-perfil">
          <div className="img-perfil">
            <img
              src={imagenPerfil}
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <input type="file" onChange={handleImageChange} />
          </div>
          <div>
            <h3>Información Personal</h3>
            <form onSubmit={handleSubmit}>
              <CustomInput
                label="Nombre:"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <CustomInput
                label="Rol:"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              />
              <CustomInput
                label="Correo:"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <CustomInput
                label="Nombre de Usuario:"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
              />
              <CustomButton content="Guardar Cambios" onClick={handleSubmit} />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Perfil;
