import { useState } from "react";
import { tipoUsuario } from "../../data/datosSelect";
import { CustomButton, CustomInput, CustomSelect } from "../customs/exports";

import "./ModalNuevoRegistro.styles.css";
const ModalEdit = ({
  open,
  onClose,
  editedUserInformation,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  const [userData, setUserData] = useState(editedUserInformation);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userList = JSON.parse(
      window.localStorage.getItem("user_list") as string
    );
    const updatedUserList = userList.map((user) => {
      if (user.documento === userData.documento) {
        return {
          ...user,
          nombreUsuario: userData.nombreUsuario,
          password: userData.password,
          correo: userData.correo,
          rol: userData.rol,
        };
      }
      return user;
    });
    window.localStorage.setItem("user_list", JSON.stringify(updatedUserList));
    onClose();
  };

  return (
    <div className="overlay ">
      <div className="modal-nuevo-registro">
        <h2>Editar informacion </h2>
        <form className="inputs-box" onSubmit={handleFormSubmit}>
          <CustomInput
            type="text"
            placeholder="Nombre de Usuario"
            name="nombreUsuario"
            required
            value={userData.nombreUsuario}
            onChange={(e) => {
              setUserData({ ...userData, nombreUsuario: e.target.value });
            }}
          />
          <CustomInput
            type="password"
            placeholder="Contraseña"
            name="password"
            required
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
          <CustomInput
            type="email"
            placeholder="Correo Institucional"
            name="correo"
            required
            value={userData.correo}
            onChange={(e) => {
              setUserData({ ...userData, correo: e.target.value });
            }}
          />
          <CustomSelect
            name="rol"
            arrayOptionsSelect={tipoUsuario}
            value={userData.rol}
            onChange={(e) => {
              setUserData({ ...userData, rol: e.target.value });
            }}
          />
        </form>
        <div className="buttons-box">
          <CustomButton
            content="Cancelar"
            onClick={() => {
              onClose();
            }}
          />
          <CustomButton content="Editar" onClick={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
