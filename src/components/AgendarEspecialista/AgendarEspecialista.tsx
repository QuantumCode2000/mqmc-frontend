import "./AgendarEspecialista.styles.css";
import { CustomInput, CustomSelect,CustomButton } from "../customs/exports";
import { especialidades } from "../../data/datosSelect";
import { useState } from "react";
import CustomTable from "../customs/CustomTable/CustomTable";
import {headersEspecialidad} from "../../data/headersTables"

const AgendarEspecialista = () => {
    let especialidadesReg = []
  const [data, setData] = useState({
    especialidad: "",
    soldado: "",
    fecha: "",
    meetEnlace : ""
  });
  const [selectEspecialidad, setSelectEspecialidad] = useState(
    "Especialidad Medica"
  );
  const [selectSoldado, setSelectSoldado] = useState("Soldado");

  const listPacientes = JSON.parse(
    window.localStorage.getItem("listPacientes") as string
  );
  console.log(listPacientes);

  const extraerNombrePaciente = () => {
    const nombresPacientes = listPacientes.map((paciente) => {
      return paciente.nombresApellidos;
    });
    return nombresPacientes;
  };
  const handleCustomSelect = (e, functionSelect) => {
    functionSelect(e.target.value);
  };
  const handleSubmit = () => {
    const listEspecialidades = JSON.parse(
      window.localStorage.getItem("listEspecialidades") as string
    );
    const newEspecialidad = [
      ...listEspecialidades,
      { ...data },
    ];
    localStorage.setItem("listEspecialidades", JSON.stringify(newEspecialidad));
    setData({
      especialidad: "",
      soldado: "",
      fecha: "",
      meetEnlace : ""
    });
  }
  return (
    <main className="window-content">
      <div className="agendar-especialista">
        <div className="agendar-especialista__form ">
          {/* dame unos inputs */}
          <h1
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "20px",
            }}
          >
            Informacion para agendar la especialidad
          </h1>
          <form action="" onSubmit={
            handleSubmit
          }>
            <div className="especialidad-input">
              <label htmlFor="">Seleccine la especialidad</label>
              <CustomSelect
                name="especialidad"
                arrayOptionsSelect={especialidades}
                onChange={(e) => handleCustomSelect(e, setSelectEspecialidad)}
                value={selectEspecialidad}
              />
            </div>
            <label htmlFor="">Seleccione al soldado</label>
            <CustomSelect
              name="soldado"
              arrayOptionsSelect={extraerNombrePaciente()}
              onChange={(e) => handleCustomSelect(e, setSelectSoldado)}
              value={selectSoldado}
            />

            <CustomInput
              label="Fecha de la Cita"
              type="date"
              placeholder="Fecha de la Cita"
                name="fecha"
                required
                value={data.fecha}
                onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                    especialidad: selectEspecialidad,
                    soldado: selectSoldado,
                    meetEnlace : `https://meet.google.com/${Math.random().toString(36).substring(7)}`
                  });
                }}
            />
            <CustomButton
            type="submit"
            content="Agendar Especialidad"/>
          </form>
        </div>

        <div className="agendar-especialista_table">
            <CustomTable 
            headerData={headersEspecialidad}
            bodyData={JSON.parse(localStorage.getItem("listEspecialidades") as string)}
            />
        </div>
      </div>
    </main>
  );
};

export default AgendarEspecialista;

