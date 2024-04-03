import { useEffect, useState, useContext } from "react";
import {
  headersUsuariosAdministrador,
  headersUsuariosCoordinador,
} from "../../data/headersTables";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
import NuevoRegistroPersonal from "../NuevoRegistroPersonal/NuevoRegistroPersonal.tsx";
import UsersContext from "../../context/UsersContext";

const AdministrarPersonal = () => {
  const {users} = useContext(UsersContext);
  
  const current_user = JSON.parse(
    window.localStorage.getItem("currentUser") as string
  );
  const [usersList, setUsersList] = useState([]);
  const [openModalEdit,setOpenModalEdit] = useState(false);
  useEffect(() => {
    const data = JSON.parse(
      window.localStorage.getItem("user_list") as string
    );
    if (data) {
      setUsersList(data);
    }
  }, [users]);

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
        />
      ) : (
        <p>Loading personal...</p>
      )}
      {current_user.rol === "Administrador" ? null : (
        <div className="nuevo-registro">
          <NuevoRegistroPersonal 
            openModalEdit={openModalEdit} 
            setOpenModalEdit={setOpenModalEdit}          />
        </div>
      )}
    </main>
  );
};

export default AdministrarPersonal;
