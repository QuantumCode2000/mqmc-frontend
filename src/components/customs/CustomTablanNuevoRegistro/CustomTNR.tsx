import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import CustomTable from "../CustomTable/CustomTable";
import "./CustomTNR.styles.css";
import { filtrarPorDocumento } from "../../../services/filtrados"
import { useState, useContext } from "react";
import UsersContext from "../../../context/UsersContext";
const CustomTNR = ({headers,users}) => {
  const { personal } = useContext(UsersContext);
  const [personalFilter, setPersonalFilter] = useState(
    typeof (personal) === "string" ?
      JSON.parse(personal)
      : personal
  );
  const [valorDocumento, setValorDocumento] = useState('');

  const [activarFiltro, setActivarFiltro] = useState(false);

  const handleChange = (e) => {
    setValorDocumento(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const personalFiltrado = filtrarPorDocumento(personalFilter, valorDocumento);
    setPersonalFilter(personalFiltrado);

  }
  const actualizarEstado = (documento) => {
    const personalActualizado = personalFilter.map((user) => {
      if (user.documento === documento) {
        return {
          ...user,
          estado: !user.estado
        }
      }
      return user;
    });
    setPersonalFilter(personalActualizado);
  }

  return (

    <div className='centerTRN'>
      {
        activarFiltro === false ? (
          <div className='boton-filtro'>
            <CustomButton
              content='Filtrar'
              onClick={() => setActivarFiltro(true)}
            />
          </div>
        ) : (
          <>
            <div className='boton-filtro'>
              <CustomButton
                content='Ocultar Filtro'
                onClick={() => {
                  setActivarFiltro(false);
                  setPersonalFilter(
                    typeof (personal) === "string" ?
                      JSON.parse(personal)
                      : personal
                  )
                  setValorDocumento('');
                }}
              />
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className='buscar'>
                <CustomInput
                  value={valorDocumento}
                  placeholder='Inserte Numero de Identificacion'
                  type='number'
                  onChange={handleChange}
                />
              </div>
              <div className='boton-buscar'>
                <CustomButton content='Buscar' />
              </div>
            </form>

          </>
        )
      }
      {
        activarFiltro === true ? (
          <div className='tabla'>
            <CustomTable
              headerData={headers}
              bodyData={
                personalFilter
              }
            />
          </div>
        ) : (
          <div className='tabla'>
            <CustomTable
              headerData={headers}
              bodyData={users}
              actualizarEstado={actualizarEstado}
            />
          </div>
        )
      }
    </div>
  );
};

export default CustomTNR;
