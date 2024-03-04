import { headersCita } from "../../data/headersTables"
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR"

const Citas = () => {
    const citas = JSON.parse(window.localStorage.getItem("listCitas") as string);
    console.log(citas);
  return (
<main className="window-content">
    {citas.length > 0 ? (
            <CustomTNR headerTablesAdminUs={headersCita} data={citas} />
        ) : (
            <p>Loading citas...</p>
        )}
    </main>
  )
}

export default Citas