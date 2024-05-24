import { useState, useContext } from "react";
import {
  headersUsuariosAdministrador,
  headersUsuariosCoordinador,
} from "../../data/headersTables";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
import NuevoRegistroPersonal from "../NuevoRegistroPersonal/NuevoRegistroPersonal.tsx";
import UsersContext from "../../context/UsersContext";
import "./AdministrarPersonal.styles.css";

const AdministrarPersonal = () => {
  const { users, updateUserList } = useContext(UsersContext);
  const currentUser = JSON.parse(
    window.localStorage.getItem("currentUser") || "{}",
  );
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [editedUserInformation, setEditedUserInformation] = useState(null);

  // Eliminada la lógica de cargar datos del localStorage.

  const updatedUserInformation = (newUserInformation) => {
    // Actualiza la información de los usuarios utilizando el contexto
    const updatedUsers = users.map((user) =>
      user.documento === newUserInformation.documento
        ? {
            ...user,
            nombreUsuario: newUserInformation.nombreUsuario,
            password: newUserInformation.password,
            correo: newUserInformation.correo,
            rol: newUserInformation.rol,
          }
        : user,
    );
    updateUserList(updatedUsers);
  };
  const handleUserUpdated = (updatedUserInfo) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUserInfo.id ? { ...user, ...updatedUserInfo } : user,
    );
    updateUserList(updatedUsers);
  };
  const handleNewUserAdded = (newUser) => {
    updateUserList([...users, newUser]);
  };

  return (
    <main className="window-content">
      <div className="container-usuarios">
        <div className="subtitulo">
          <h1>Usuarios</h1>
          <hr />
        </div>
        {users.length > 0 ? (
          <CustomTNR
            headers={
              currentUser.role === "Administrador"
                ? headersUsuariosAdministrador
                : headersUsuariosCoordinador
            }
            users={users}
            placeholder="Buscar por Carnet de Identidad"
            openModalEdit={openModalEdit}
            setOpenModalEdit={setOpenModalEdit}
            editedUserInformation={editedUserInformation}
            updatedUserInformation={updatedUserInformation}
            setEditedUserInformation={setEditedUserInformation}
            activo={true}
          />
        ) : (
          <p>Loading personal...</p>
        )}
        {currentUser.rol === "Administrador" ? null : (
          <div className="nuevo-registro">
            <NuevoRegistroPersonal
              openModalEdit={openModalEdit}
              setOpenModalEdit={setOpenModalEdit}
              editedUserInformation={editedUserInformation}
              updatedUserInformation={updatedUserInformation}
              setEditedUserInformation={setEditedUserInformation}
              onUserUpdated={handleUserUpdated}
              onAddUser={handleNewUserAdded}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default AdministrarPersonal;
