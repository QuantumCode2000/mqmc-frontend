import { useEffect, useState, useContext } from "react";
import {
  headersUsuariosAdministrador,
  headersUsuariosCoordinador,
} from "../../data/headersTables";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
import NuevoRegistroPersonal from "../NuevoRegistroPersonal/NuevoRegistroPersonal.tsx";
import UsersContext from "../../context/UsersContext";

const AdministrarPersonal = () => {
  const usersDataContext = useContext(UsersContext);
  const personal = usersDataContext?.users;
  const current_user = JSON.parse(
    window.localStorage.getItem("currentUser") as string
  );
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = JSON.parse(
      window.localStorage.getItem("user_list") as string
    );
    if (data) {
      setUsers(data);
    }
  }, [localStorage, personal]);

  return (
    <main className=" window-content ">
      {users.length > 0 ? (
        <CustomTNR
          headers={
            current_user.rol === "Administrador"
              ? headersUsuariosAdministrador
              : headersUsuariosCoordinador
          }
          users={users}
          placeholder="Buscar por Carnet de Identidad"
        />
      ) : (
        <p>Loading personal...</p>
      )}
      {current_user.rol === "Administrador" ? null : (
        <div className="nuevo-registro">
          <NuevoRegistroPersonal />
        </div>
      )}
    </main>
  );
};

export default AdministrarPersonal;
