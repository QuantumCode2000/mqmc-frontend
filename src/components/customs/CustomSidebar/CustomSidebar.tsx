import { useContext, useState } from "react";
import CustomSidebarOptions from "./CustomSidebarOptions";
import "./CustomSidebar.styles.css";
import AuthContext from "../../../context/AuthContext";
import {
  opcionesAdmin,
  opcionesCoordinador,
  opcionesInvestigador,
} from "../../../data/optionsSidebar";
import { IoMdMenu } from "react-icons/io";

const CustomSidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const opciones =
    currentUser.role === "Administrador"
      ? opcionesAdmin
      : currentUser.role === "Coordinador"
      ? opcionesCoordinador
      : opcionesInvestigador;
  return (
    <>
      <header className="header-sidebar">
        <div className="infouser">
          <h1>{currentUser.name}</h1>
          <img src={currentUser.imgProfile} alt="" className="logo2" />
        </div>
      </header>

      <CustomSidebarOptions
        data_user={currentUser}
        opciones={opciones}
        isSidebarActive={isSidebarActive}
      />
      <div
        className="menu-icon"
        onClick={() => setIsSidebarActive(!isSidebarActive)}
      >
        <IoMdMenu />
      </div>
    </>
  );
};

export default CustomSidebar;
