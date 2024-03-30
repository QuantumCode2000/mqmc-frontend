import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo_principal from "../../../assets/images/LOGO_principal.png";
const CustomSidebarOptions = ({ data_user, opciones ,sidActive}) => {
  return (
    <aside className={
      sidActive ? "sidebar active" : "sidebar"
    }>
      {/* <div className='perfil-usuario'>
        <img src={data_user.imgPerfil} alt='' className='foto-usuario' />
        {data_user.informacionLaboral.nivelJerarquico ===
          "Super Administrador" ? null : (
          <div className='text-perfil nome-usuario'>
            {data_user.nombre}
          </div>
        )}
        <div className='text-perfil rol-usuario'>
          {data_user.informacionLaboral.nivelJerarquico}
        </div>
      </div> */}
      <div className="icon-sidebar perfil-usuario">
        <img src={Logo_principal} alt="" />
        <h1>{data_user.informacionLaboral.nivelJerarquico}</h1>
      </div>
      <div className="divider">
      
      </div>
      <div className='opciones-sidebar '>
        {opciones.map((opcion, index) => {
          return (
            <Link to={opcion.to} key={index}>
              <div className='opcion-sidebar'>
                <div className='icon'>{opcion.icon}</div>
                <div className='text-opcion'>{opcion.text}</div>
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
