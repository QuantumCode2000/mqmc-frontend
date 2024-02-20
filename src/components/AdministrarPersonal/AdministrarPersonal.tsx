import { useEffect, useState } from "react";
import { headerTablesAdminUs } from "../../data/headersTables";
import listUsers from "../../data/listUsers.ts";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
import NuevoRegistroPersonal from "../NuevoRegistroPersonal/NuevoRegistroPersonal.tsx";
const AdministrarPersonal = () => {
  const [personal, setPersonal] = useState([]);
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("listPersonal") as string);
    if (data) {
      setPersonal(data);
    }
  })

  return (
    <main className=' window-content '>
      {
        personal.length > 0 ? (
          <CustomTNR headerTablesAdminUs={headerTablesAdminUs} data={personal} />
        ) : (
          <p>Loading personal...</p>
        )
      }
      <div className='nuevo-registro'>
        <NuevoRegistroPersonal />
      </div>
    </main>
  );
};

export default AdministrarPersonal;
