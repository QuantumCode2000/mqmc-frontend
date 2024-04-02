import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo_principal from "../../../assets/images/LOGO_principal.png";
const CustomSidebarOptions = ({ data_user, opciones, isSidebarActive }) => {
  return (
    <aside className={isSidebarActive ? "sidebar active" : "sidebar"}>
      <div className="icon-sidebar perfil-usuario">
        <img src={Logo_principal} alt="" />
        <h1>{data_user.rol}</h1>
      </div>
      <div className="line"></div>

      <div className="opciones-sidebar ">
        {opciones.map((opcion, index) => {
          return (
            <Link to={opcion.to} key={index}>
              <div className="opcion-sidebar">
                <div className="icon">{opcion.icon}</div>
                <div className="text-opcion">{opcion.text}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

CustomSidebarOptions.propTypes = {
  data_user: PropTypes.object,
  opciones: PropTypes.array,
};

export default CustomSidebarOptions;
