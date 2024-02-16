import { headerTablePaciente } from "../../data/headersTables";
import listUsers from "../../data/listUsers";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
const AdministrarPacientes = () => {
  const data = listUsers.pacientes;
  return (
    <>
      <CustomTNR headerTablesAdminUs={headerTablePaciente} data={data} />
    </>
  );
};
export default AdministrarPacientes;
