import { useEffect, useState, useContext } from "react";
import {
  headersUsuariosAdministrador,
  headersUsuariosCoordinador,
} from "../../data/headersTables";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
import NuevoRegistroPersonal from "../NuevoRegistroPersonal/NuevoRegistroPersonal.tsx";
import UsersContext from "../../context/UsersContext";

const AdministrarPersonal = () => {
  const { users } = useContext(UsersContext);
  const current_user = JSON.parse(
    window.localStorage.getItem("currentUser") as string
  );
  const [usersList, setUsersList] = useState([]);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [editedUserInformation, 
    setEditedUserInformation
  ] = useState(null);
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("user_list") as string);
    if (data) {
      setUsersList(data);
    }
  }, [users]);

  const updatedUserInformation = (newUserInformation) => {
    let userList = JSON.parse(
      window.localStorage.getItem("user_list") as string
    );
    userList = userList.map((user) => {
      if (user.documento === newUserInformation.documento) {
        return {
          ...user,
          nombreUsuario: newUserInformation.nombreUsuario,
          password: newUserInformation.password,
          correo: newUserInformation.correo,
          rol: newUserInformation.rol,
        };
      }
      return user;
    });
  };
  console.log(editedUserInformation);

  return (
    <main className=" window-content ">
      {users.length > 0 ? (
        <CustomTNR
          headers={
            current_user.rol === "Administrador"
              ? headersUsuariosAdministrador
              : headersUsuariosCoordinador
          }
          users={usersList}
          placeholder="Buscar por Carnet de Identidad"
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
          editedUserInformation={editedUserInformation}
          updatedUserInformation={updatedUserInformation}
          setEditedUserInformation={setEditedUserInformation}
        />
      ) : (
        <p>Loading personal...</p>
      )}
      {current_user.rol === "Administrador" ? null : (
        <div className="nuevo-registro">
          <NuevoRegistroPersonal
            openModalEdit={openModalEdit}
            setOpenModalEdit={setOpenModalEdit}
            editedUserInformation={editedUserInformation}
            updatedUserInformation={updatedUserInformation}
            setEditedUserInformation={setEditedUserInformation}
          />
        </div>
      )}
    </main>
  );
};

export default AdministrarPersonal;
