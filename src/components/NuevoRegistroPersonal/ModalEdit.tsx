// import { useState } from "react";
// import { tipoUsuario } from "../../data/datosSelect";
// import { CustomButton, CustomInput, CustomSelect } from "../customs/exports";

// import "./ModalNuevoRegistro.styles.css";
// const ModalEdit = ({
//   open,
//   onClose,
//   editedUserInformation,
// }: {
//   open: boolean;
//   onClose: () => void;
// }) => {
//   if (!open) return null;
//   const [userData, setUserData] = useState(editedUserInformation);
//   console.log(userData);
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const userList = JSON.parse(
//       window.localStorage.getItem("user_list") as string,
//     );
//     const updatedUserList = userList.map((user) => {
//       if (user.ci === userData.ci) {
//         return {
//           ...user,
//           nombreUsuario: userData.nombreUsuario,
//           password: userData.password,
//           correo: userData.correo,
//           rol: userData.rol,
//         };
//       }
//       return user;
//     });
//     window.localStorage.setItem("user_list", JSON.stringify(updatedUserList));
//     onClose();
//   };

//   return (
//     <div className="overlay ">
//       <div className="modal-nuevo-registro">
//         <h2>Editar informacion </h2>
//         <form className="inputs-box" onSubmit={handleFormSubmit}>
//           <CustomInput
//             type="text"
//             placeholder="Nombre de Usuario"
//             name="nombreUsuario"
//             required
//             value={userData.username}
//             onChange={(e) => {
//               setUserData({ ...userData, nombreUsuario: e.target.value });
//             }}
//           />
//           <CustomInput
//             type="password"
//             placeholder="Contraseña"
//             name="password"
//             required
//             value={userData.password}
//             onChange={(e) => {
//               setUserData({ ...userData, password: e.target.value });
//             }}
//           />
//           <CustomInput
//             type="email"
//             placeholder="Correo Institucional"
//             name="correo"
//             required
//             value={userData.email}
//             onChange={(e) => {
//               setUserData({ ...userData, correo: e.target.value });
//             }}
//           />
//           <CustomSelect
//             name="rol"
//             arrayOptionsSelect={tipoUsuario}
//             value={userData.role}
//             onChange={(e) => {
//               setUserData({ ...userData, rol: e.target.value });
//             }}
//           />
//         </form>
//         <div className="buttons-box">
//           <CustomButton
//             content="Cancelar"
//             onClick={() => {
//               onClose();
//             }}
//           />
//           <CustomButton content="Editar" onClick={handleFormSubmit} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalEdit;

// import { useState } from "react";
// import { tipoUsuario } from "../../data/datosSelect";
// import { CustomButton, CustomInput, CustomSelect } from "../customs/exports";

// import "./ModalNuevoRegistro.styles.css";

// const ModalEdit = ({
//   open,
//   onClose,
//   editedUserInformation,
// }: {
//   open: boolean;
//   onClose: () => void;
// }) => {
//   if (!open) return null;
//   const [userData, setUserData] = useState(editedUserInformation);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/v1/users/${userData.ci}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: userData.username,
//             password: userData.password,
//             correo: userData.correo,
//             rol: userData.rol,
//           }),
//         },
//       );

//       if (response.ok) {
//         alert("Información actualizada correctamente");
//         onClose(); // Cierra el modal después de actualizar
//       } else {
//         const errorData = await response.json();
//         alert(`Error al actualizar: ${errorData.message}`);
//       }
//     } catch (error) {
//       alert(`Error al realizar la solicitud: ${error.message}`);
//     }
//   };

//   return (
//     <div className="overlay ">
//       <div className="modal-nuevo-registro">
//         <h2>Editar información</h2>
//         <form className="inputs-box" onSubmit={handleFormSubmit}>
//           <CustomInput
//             type="text"
//             placeholder="Nombre de Usuario"
//             name="nombreUsuario"
//             required
//             value={userData.username}
//             onChange={(e) => {
//               setUserData({ ...userData, nombreUsuario: e.target.value });
//             }}
//           />
//           <CustomInput
//             type="password"
//             placeholder="Contraseña"
//             name="password"
//             required
//             value={userData.password}
//             onChange={(e) => {
//               setUserData({ ...userData, password: e.target.value });
//             }}
//           />
//           <CustomInput
//             type="email"
//             placeholder="Correo Institucional"
//             name="correo"
//             required
//             value={userData.email}
//             onChange={(e) => {
//               setUserData({ ...userData, correo: e.target.value });
//             }}
//           />
//           <CustomSelect
//             name="rol"
//             arrayOptionsSelect={tipoUsuario}
//             value={userData.role}
//             onChange={(e) => {
//               setUserData({ ...userData, rol: e.target.value });
//             }}
//           />
//           <div className="buttons-box">
//             <CustomButton content="Cancelar" onClick={onClose} />
//             <CustomButton type="submit" content="Editar" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalEdit;

import { useState, useEffect } from "react";
import { tipoUsuario } from "../../data/datosSelect";
import { CustomButton, CustomInput, CustomSelect } from "../customs/exports";
import "./ModalNuevoRegistro.styles.css";

const ModalEdit = ({
  open,
  onClose,
  editedUserInformation,

  onUserUpdated,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;

  const [userData, setUserData] = useState(editedUserInformation);
  const [changes, setChanges] = useState({});

  useEffect(() => {
    setUserData(editedUserInformation);
    setChanges({});
  }, [editedUserInformation]);

  const handleChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
    if (editedUserInformation[field] !== value) {
      setChanges((prev) => ({ ...prev, [field]: value }));
    } else {
      const currentChanges = { ...changes };
      delete currentChanges[field];
      setChanges(currentChanges);
    }
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   if (Object.keys(changes).length === 0) {
  //     alert("No se detectaron cambios para actualizar.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       `http://localhost:3000/api/v1/users/${editedUserInformation.id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(changes),
  //       },
  //     );

  //     if (response.ok) {
  //       alert(
  //         `Información actualizada correctamente. Campos modificados: ${Object.keys(
  //           changes,
  //         ).join(", ")}`,
  //       );
  //       onClose(); // Cierra el modal después de actualizar
  //     } else {
  //       const errorData = await response.json();
  //       alert(`Error al actualizar: ${errorData.message}`);
  //     }
  //   } catch (error) {
  //     alert(`Error al realizar la solicitud: ${error.message}`);
  //   }
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(changes).length === 0) {
      alert("No se detectaron cambios para actualizar.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/users/${editedUserInformation.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(changes),
        },
      );

      if (response.ok) {
        const updatedUserInfo = await response.json(); // Asumiendo que el backend devuelve la info actualizada del usuario
        onUserUpdated(updatedUserInfo); // Actualizar el contexto
        alert(
          `Información actualizada correctamente. Campos modificados: ${Object.keys(
            changes,
          ).join(", ")}`,
        );
        onClose();
      } else {
        const errorData = await response.json();
        alert(`Error al actualizar: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error al realizar la solicitud: ${error.message}`);
    }
  };

  return (
    <div className="overlay">
      <div className="modal-nuevo-registro">
        <h2>Editar información</h2>
        <form className="inputs-box" onSubmit={handleFormSubmit}>
          <CustomInput
            type="text"
            placeholder="Nombre de Usuario"
            name="username"
            required
            value={userData.username || ""}
            onChange={(e) => handleChange("username", e.target.value)}
          />
          <CustomInput
            type="password"
            placeholder="Contraseña"
            name="password"
            required
            value={userData.password || ""}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <CustomInput
            type="email"
            placeholder="Correo Institucional"
            name="email"
            required
            value={userData.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <CustomSelect
            name="role"
            arrayOptionsSelect={tipoUsuario}
            value={userData.role || ""}
            onChange={(e) => handleChange("role", e.target.value)}
          />
          <div className="buttons-box">
            <CustomButton content="Cancelar" onClick={onClose} />
            <CustomButton type="submit" content="Editar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
