import { useEffect, useState, useContext } from "react";
import { headersMedico } from "../../data/headersTables";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
import NuevoRegistroPersonal from "../NuevoRegistroPersonal/NuevoRegistroPersonal.tsx";
import UsersContext from "../../context/UsersContext";

const AdministrarPersonal = () => {
  const { personal } = useContext(UsersContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("listPersonal") as string);
    if (data) {
      setUsers(data);
    }
  }, [
    localStorage, personal
  ])

  return (
    <main className=' window-content '>
      {
        users.length > 0 ? (
          <CustomTNR headers={headersMedico} users={users} />
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
