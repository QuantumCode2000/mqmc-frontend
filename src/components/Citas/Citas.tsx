import { headersCita } from "../../data/headersTables"
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR"

const Citas = () => {
    const citas = JSON.parse(window.localStorage.getItem("listCitas") as string);
    console.log(citas);
  return (
<main className="window-content">
    {citas !== null ? (
            <CustomTNR headerTablesAdminUs={headersCita} data={citas} />
        ) : (
            <p>No tiene citas</p>
        )}
    </main>
  )
}

export default Citas