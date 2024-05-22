// import { CustomInput, CustomButton, CustomSelect } from "../customs/exports";
// import { tipoUsuario, expediciones } from "../../data/datosSelect";
// import { useState, useContext } from "react";
// import UsersContext from "../../context/UsersContext";
// import "./ModalNuevoRegistro.styles.css";
// const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
//   if (!open) return null;
//   const { updateUserList } = useContext(UsersContext);
//   const personalLocalStorage = JSON.parse(
//     window.localStorage.getItem("user_list") as string
//   );
//   const [selectExpedicion, setSelectExpedicion] = useState("");
//   const [selectRol, setSelectRol] = useState("");
//   const [userInformation, setUserInformation] = useState({
//     imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
//     nombre: "",
//     documento: "",
//     password: "",
//     nombreUsuario: "",
//     correo: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newPersonal = [
//       ...personalLocalStorage,
//       { ...userInformation, rol : selectRol, expedicion: selectExpedicion, id: personalLocalStorage.length + 1,estado: true},
//     ];
//     updateUserList(newPersonal);
//     clearForm();
//     onClose();
//   };

//   const handleChangePersonal = (e) => {
//     setUserInformation({
//       ...userInformation,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCustomSelect = (e, functionSelect) => {
//     functionSelect(e.target.value);
//   };
//   const clearForm = () => {
//     setUserInformation({
//       imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
//       nombre: "",
//       documento: "",
//       expedicion: "",
//       password: "",
//       nombreUsuario: "",

//     });
//     setSelectExpedicion("");
//     setSelectRol("");
//   };

//   return (
//     <div className="overlay ">
//       <div className="modal-nuevo-registro">
//         <h2>Nuevo Registro</h2>
//         <form className="inputs-box" onSubmit={handleSubmit}>
//           <div className="formulario1">
//             <CustomInput
//               type="text"
//               placeholder="Nombre de Usuario"
//               name="nombreUsuario"
//               required
//               value={userInformation.nombreUsuario}
//               onChange={handleChangePersonal}
//             />
//             <CustomInput
//               type="password"
//               placeholder="Contraseña"
//               name="password"
//               required
//               value={userInformation.password}
//               onChange={handleChangePersonal}
//             />
//           </div>
//           <CustomInput
//             type="email"
//             placeholder="Correo"
//             name="correo"
//             required
//             value={userInformation.correo}
//             onChange={handleChangePersonal}
//           />
//           <CustomInput
//             type="text"
//             placeholder="Nombre Completo"
//             name="nombre"
//             required
//             value={userInformation.nombre}
//             onChange={handleChangePersonal}
//           />
//           <div className="expedicionci">
//             <CustomInput
//               type="number"
//               placeholder="Carnet de Identidad"
//               name="documento"
//               required
//               value={userInformation.documento}
//               onChange={handleChangePersonal}
//             />
//             <div className="selectorexpedicion">
//               <CustomSelect
//                 name="expedicion"
//                 arrayOptionsSelect={expediciones}
//                 onChange={(e) => {
//                   handleCustomSelect(e, setSelectExpedicion);
//                 }}
//                 value={selectExpedicion}
//               />
//             </div>
//           </div>
//           <CustomSelect
//             name="rol"
//             arrayOptionsSelect={tipoUsuario}
//             onChange={(e) => {
//               handleCustomSelect(e, setSelectRol);
//             }}
//             value={selectRol}
//           />
//         </form>
//         <div className="buttons-box">
//           <CustomButton
//           content="Cancelar"
//             onClick={() => {
//               clearForm();
//               onClose();
//             }}
//           />
//           <CustomButton content="Guardar" onClick={handleSubmit} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// import { CustomInput, CustomButton, CustomSelect } from "../customs/exports";
// import { tipoUsuario, expediciones } from "../../data/datosSelect";
// import { useState, useContext } from "react";
// import UsersContext from "../../context/UsersContext";
// import "./ModalNuevoRegistro.styles.css";

// const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
//   if (!open) return null;
//   const { updateUserList } = useContext(UsersContext);
//   const personalLocalStorage = JSON.parse(
//     window.localStorage.getItem("user_list") as string,
//   );
//   const [selectExpedicion, setSelectExpedicion] = useState("");
//   const [selectRol, setSelectRol] = useState("");
//   const [userInformation, setUserInformation] = useState({
//     imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
//     nombre: "",
//     documento: "",
//     password: "",
//     nombreUsuario: "",
//     correo: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Crear el payload para enviar al backend
//     const payload = {
//       name: userInformation.nombre,
//       ci: userInformation.documento,
//       expedition: selectExpedicion,
//       role: selectRol,
//       email: userInformation.correo,
//       password: userInformation.password,
//       username: userInformation.nombreUsuario,
//     };

//     try {
//       // Hacer la solicitud POST
//       const response = await fetch(
//         "http://localhost:3000/api/v1/auth/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         },
//       );

//       if (!response.ok) {
//         throw new Error("Error en el registro");
//       }

//       const result = await response.json();

//       // Actualizar la lista de usuarios localmente
//       const newPersonal = [
//         ...personalLocalStorage,
//         {
//           ...userInformation,
//           rol: selectRol,
//           expedicion: selectExpedicion,
//           id: personalLocalStorage.length + 1,
//           estado: true,
//         },
//       ];
//       updateUserList(newPersonal);

//       clearForm();
//       onClose();
//     } catch (error) {
//       console.error("Error registrando usuario:", error);
//     }
//   };

//   const handleChangePersonal = (e) => {
//     setUserInformation({
//       ...userInformation,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCustomSelect = (e, functionSelect) => {
//     functionSelect(e.target.value);
//   };

//   const clearForm = () => {
//     setUserInformation({
//       imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
//       nombre: "",
//       documento: "",
//       expedicion: "",
//       password: "",
//       nombreUsuario: "",
//       correo: "",
//     });
//     setSelectExpedicion("");
//     setSelectRol("");
//   };

//   return (
//     <div className="overlay">
//       <div className="modal-nuevo-registro">
//         <h2>Nuevo Registro</h2>
//         <form className="inputs-box" onSubmit={handleSubmit}>
//           <div className="formulario1">
//             <CustomInput
//               type="text"
//               placeholder="Nombre de Usuario"
//               name="nombreUsuario"
//               required
//               value={userInformation.nombreUsuario}
//               onChange={handleChangePersonal}
//             />
//             <CustomInput
//               type="password"
//               placeholder="Contraseña"
//               name="password"
//               required
//               value={userInformation.password}
//               onChange={handleChangePersonal}
//             />
//           </div>
//           <CustomInput
//             type="email"
//             placeholder="Correo"
//             name="correo"
//             required
//             value={userInformation.correo}
//             onChange={handleChangePersonal}
//           />
//           <CustomInput
//             type="text"
//             placeholder="Nombre Completo"
//             name="nombre"
//             required
//             value={userInformation.nombre}
//             onChange={handleChangePersonal}
//           />
//           <div className="expedicionci">
//             <CustomInput
//               type="number"
//               placeholder="Carnet de Identidad"
//               name="documento"
//               required
//               value={userInformation.documento}
//               onChange={handleChangePersonal}
//             />
//             <div className="selectorexpedicion">
//               <CustomSelect
//                 name="expedicion"
//                 arrayOptionsSelect={expediciones}
//                 onChange={(e) => {
//                   handleCustomSelect(e, setSelectExpedicion);
//                 }}
//                 value={selectExpedicion}
//               />
//             </div>
//           </div>
//           <CustomSelect
//             name="rol"
//             arrayOptionsSelect={tipoUsuario}
//             onChange={(e) => {
//               handleCustomSelect(e, setSelectRol);
//             }}
//             value={selectRol}
//           />
//         </form>
//         <div className="buttons-box">
//           <CustomButton
//             content="Cancelar"
//             onClick={() => {
//               clearForm();
//               onClose();
//             }}
//           />
//           <CustomButton content="Guardar" onClick={handleSubmit} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import { CustomInput, CustomButton, CustomSelect } from "../customs/exports";
import { tipoUsuario, expediciones } from "../../data/datosSelect";
import { useState, useContext } from "react";
import UsersContext from "../../context/UsersContext";
import "./ModalNuevoRegistro.styles.css";

const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  const { updateUserList } = useContext(UsersContext);
  const [selectExpedicion, setSelectExpedicion] = useState("");
  const [selectRol, setSelectRol] = useState("");
  const [userInformation, setUserInformation] = useState({
    imgProfile: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
    name: "",
    ci: "",
    password: "",
    username: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      // imgProfile: userInformation.imgProfile,
      name: userInformation.name,
      ci: userInformation.ci,
      password: userInformation.password,
      username: userInformation.username,
      email: userInformation.email,
      role: selectRol,
      expedition: selectExpedicion,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Error en el registro del usuario");
      }

      const newUser = await response.json();

      // Actualiza la lista de usuarios a través del contexto
      updateUserList((prevUsers) => [...prevUsers, newUser]);

      alert("Usuario registrado exitosamente.");
      clearForm();
      onClose();
    } catch (error) {
      console.error("Error registrando usuario:", error);
      alert("Error al registrar el usuario.");
    }
  };

  const handleChangePersonal = (e) => {
    setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handleCustomSelect = (e, functionSelect) => {
    functionSelect(e.target.value);
  };

  const clearForm = () => {
    setUserInformation({
      imgProfile: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      name: "",
      ci: "",
      password: "",
      username: "",
      email: "",
    });
    setSelectExpedicion("");
    setSelectRol("");
  };

  return (
    <div className="overlay">
      <div className="modal-nuevo-registro">
        <h2>Nuevo Registro</h2>
        <form className="inputs-box" onSubmit={handleSubmit}>
          <div className="formulario1">
            <CustomInput
              type="text"
              placeholder="Nombre de Usuario"
              name="username"
              required
              value={userInformation.username}
              onChange={handleChangePersonal}
            />
            <CustomInput
              type="password"
              placeholder="Contraseña"
              name="password"
              required
              value={userInformation.password}
              onChange={handleChangePersonal}
            />
          </div>
          <CustomInput
            type="email"
            placeholder="Correo"
            name="email"
            required
            value={userInformation.email}
            onChange={handleChangePersonal}
          />
          <CustomInput
            type="text"
            placeholder="Nombre Completo"
            name="name"
            required
            value={userInformation.name}
            onChange={handleChangePersonal}
          />
          <div className="expedicionci">
            <CustomInput
              type="number"
              placeholder="Carnet de Identidad"
              name="ci"
              required
              value={userInformation.ci}
              onChange={handleChangePersonal}
            />
            <div className="selectorexpedicion">
              <CustomSelect
                name="expedition"
                arrayOptionsSelect={expediciones}
                onChange={(e) => handleCustomSelect(e, setSelectExpedicion)}
                value={selectExpedicion}
              />
            </div>
          </div>
          <CustomSelect
            name="role"
            arrayOptionsSelect={tipoUsuario}
            onChange={(e) => handleCustomSelect(e, setSelectRol)}
            value={selectRol}
          />
          <div className="buttons-box">
            <CustomButton
              content="Cancelar"
              onClick={() => {
                clearForm();
                onClose();
              }}
            />
            <CustomButton content="Guardar" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
