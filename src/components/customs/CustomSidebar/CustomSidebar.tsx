import { useContext,useState } from "react";
import CustomSidebarOptions from "./CustomSidebarOptions";
import "./CustomSidebar.styles.css";
import AuthContext from "../../../context/AuthContext";
import { opcionesAdmin, opcionesCoordinador, opcionesInvestigador } from "../../../data/optionsSidebar";
import { IoMdMenu } from "react-icons/io";

const CustomSidebar = () => {
  const [isSidebarActive,setIsSidebarActive] = useState(false);
  const { currentUserInformation } = useContext(AuthContext);
  const opciones = currentUserInformation.rol === "Administrador" ? opcionesAdmin : currentUserInformation.rol === "Coordinador" ? opcionesCoordinador : opcionesInvestigador;
  return (
    <>
    <header className="header-sidebar">
      <div className="infouser">
      <h1>{currentUserInformation.nombresApellidos}</h1>
        <img src={currentUserInformation.imgPerfil} alt="" className="logo2" />
      </div>
    </header>
    
      <CustomSidebarOptions data_user={currentUserInformation} opciones={opciones} isSidebarActive={isSidebarActive} />
      <div className="menu-icon" onClick={() => setIsSidebarActive(!isSidebarActive)}> 
        <IoMdMenu />
      </div>
    </>
  );
};

export default CustomSidebar;
