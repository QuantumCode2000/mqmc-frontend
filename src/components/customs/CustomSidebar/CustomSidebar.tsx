import { useContext } from "react";
import CustomSidebarOptions from "./CustomSidebarOptions";
import "./CustomSidebar.styles.css";
import AuthContext from "../../../context/AuthContext";
import { opcionesAdmin, opcionesMedico } from "../../../data/optionsSidebar";

const CustomSidebar = () => {
  const { inforUser } = useContext(AuthContext);
  const userData = inforUser;
  const data_user = userData;
  const opciones = data_user.nombreUsuario !== "admin" ? opcionesMedico : opcionesAdmin;
  return (
    <>
      <CustomSidebarOptions data_user={data_user} opciones={opciones} />
    </>
  );
};

export default CustomSidebar;
