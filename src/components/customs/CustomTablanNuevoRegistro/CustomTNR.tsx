import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import CustomTable from "../CustomTable/CustomTable";
import NuevoRegistro from "../../NuevoRegistro/NuevoRegistro";
import "./CustomTNR.styles.css";
const CustomTNR = (props) => {
  return (
    <main className=' window-content '>
      <div className='centerTRN'>
        <div className='buscar'>
          <CustomInput
            placeholder='Inserte Numero de Identificacion'
            type='number'
          />
        </div>
        <div className='boton-buscar'>
          <CustomButton content='Buscar' />
        </div>
        <div className='tabla'>
          <CustomTable
            headerData={props.headerTablesAdminUs}
            bodyData={props.data}
          />
        </div>
        <div className='nuevo-registro'>
          <NuevoRegistro />
        </div>
      </div>
    </main>
  );
};

export default CustomTNR;
