import { useContext,useState } from "react";
import CustomSidebarOptions from "./CustomSidebarOptions";
import "./CustomSidebar.styles.css";
import AuthContext from "../../../context/AuthContext";
import { opcionesAdmin, opcionesMedico } from "../../../data/optionsSidebar";
import { IoMdMenu } from "react-icons/io";

const CustomSidebar = () => {
  const [sidActive, setSidActive] = useState(false);
  const { inforUser } = useContext(AuthContext);
  const userData = inforUser;
  const data_user = userData;
  const opciones = data_user.nombreUsuario !== "admin" ? opcionesMedico : opcionesAdmin;
  return (
    <>
      <CustomSidebarOptions data_user={data_user} opciones={opciones} sidActive={sidActive} />
      <div className="menu-icon" onClick={() => setSidActive(!sidActive)}> 
        <IoMdMenu />
      </div>
    </>
  );
};

export default CustomSidebar;
