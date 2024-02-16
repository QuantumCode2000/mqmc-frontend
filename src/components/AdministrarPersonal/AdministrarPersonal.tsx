import { headerTablesAdminUs } from "../../data/headersTables";
import listUsers from "../../data/listUsers.ts";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
const AdministrarPersonal = () => {
  const data = listUsers.personal;

  return (
    <>
      <CustomTNR headerTablesAdminUs={headerTablesAdminUs} data={data} />
    </>
  );
};

export default AdministrarPersonal;
