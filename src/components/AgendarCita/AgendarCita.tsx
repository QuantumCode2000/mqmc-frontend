import { CustomInput, CustomButton } from "../customs/exports";
import { useState } from "react";

const listCitas = [
  {
    nombreEncargado: "Juan",
    nombrePaciente: "Pedro",
    motivo: "Dolor de cabeza",
    fecha: "2021-08-01",
  },
  {
    nombreEncargado: "Maria",
    nombrePaciente: "Luis",
    motivo: "Dolor de estomago",
    fecha: "2021-08-02",
  },
  {
    nombreEncargado: "Ana",
    nombrePaciente: "Carlos",
    motivo: "Dolor de espalda",
    fecha: "2021-08-03",
  },
];

const AgendarCita = () => {
  const [citas, setCitas] = useState(() => {
    const citasLS = JSON.parse(window.localStorage.getItem("listCitas"));
    return citasLS || listCitas;
  });

  const [cita, setCita] = useState({
    nombreEncargado: "",
    nombrePaciente: "",
    motivo: "",
    fecha: "",
    contacto: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
 

    setCitas([...citas, cita]);
    localStorage.setItem("listCitas", JSON.stringify([...citas, cita]));
    alert("Cita agendada correctamente!");
    clearForm();
  };

  const handleChange = (e) => {
      setCita({
        ...cita,
        [e.target.name]: e.target.value,
      });
    
    
  };

  const clearForm = () => {
    setCita({
      nombreEncargado: "",
      nombrePaciente: "",
      motivo: "",
      fecha: "",
      contacto: "",
    });
  };

  return (
    <main className="container-without_sidebar">
      <div>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        className="login-container"
      >
        <CustomInput
          label="Nombre Encargado"
          type="text"
          placeholder="Nombre Encargado"
          onChange={handleChange}
          name="nombreEncargado"
          value={cita.nombreEncargado}
        />
        <CustomInput
          label="Nombre del Paciente"
          type="text"
          placeholder="Nombre del Paciente"
          onChange={handleChange}
          name="nombrePaciente"
          value={cita.nombrePaciente}
        />
        <CustomInput
          label="Motivo de la Cita"
          type="text"
          placeholder="Motivo de la Cita"
          onChange={handleChange}
          name="motivo"
          value={cita.motivo}
        />
        <CustomInput
          label="Fecha de la Cita"
          type="date"
          placeholder="Fecha de la Cita"
          onChange={handleChange}
          name="fecha"
          value={cita.fecha}
        />
        <CustomInput
          label="Contacto"
          type="text"
          placeholder="Contacto"
          onChange={handleChange}
          name="contacto"
          value={cita.contacto}
          
/>
        <CustomButton content="Agendar Cita" type="submit" />
      </form>
      </div>
    </main>
  );
};

export default AgendarCita;
