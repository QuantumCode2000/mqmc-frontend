import { GrUserAdd, GrUserSettings, GrLogout } from "react-icons/gr";
import { FaFileMedical } from "react-icons/fa";
import { BsFileEarmarkMedical } from "react-icons/bs";
const opcionesAdmin = [
  {
    to: "/administrar-pacientes",
    icon: <GrUserAdd />,
    text: "Administrar Paciente",
  },
  {
    to: "/administrar-personal",
    icon: <GrUserSettings />,
    text: "Administrar Personal",
  },
  {
    to: "/logout",
    icon: <GrLogout />,
    text: "Cerrar sesión",
  },
];
const opcionesMedico = [
  {
    to: "/nuevo-paciente",
    icon: <GrUserAdd />,
    text: "Nuevo Paciente",
  },
  {
    to: "/pacientes",
    icon: <GrUserSettings />,
    text: "Pacientes",
  },
  {
    to: "/citas-agendadas",
    icon: <BsFileEarmarkMedical />,
    text: "Citas Agendadas",
  },
  {
    to: "/agendar-especialista",
    icon: <FaFileMedical />,
    text: "Agendar Especialista",
  },
  {
    to: "/logout",
    icon: <GrLogout />,
    text: "Cerrar sesión",
  },


];

const opcionesSoldado = [
  {
    to: "/nuevo-caso",
    icon: <GrUserAdd />,
    text: "Nuevo Caso",
  },
  {
    to: "/casos",
    icon: <GrUserSettings />,
    text: "Casos",
  },
  {
    to: "/logout",
    icon: <GrLogout />,
    text: "Cerrar sesión",
  },
];



export { opcionesAdmin, opcionesMedico, opcionesSoldado};
