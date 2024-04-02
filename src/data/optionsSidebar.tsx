import { GrUserAdd, GrUserSettings, GrLogout } from "react-icons/gr";
import { FaFileMedical } from "react-icons/fa";
import { BsFileEarmarkMedical } from "react-icons/bs";
const opcionesAdmin = [
  {
    to: "/administrar-personal",
    icon: <GrUserSettings />,
    text: "Usuarios",
  },
  {
    to: "/preguntas-respuestas",
    icon: <GrUserSettings />,
    text: "Preguntas",
  },
  {
    to: "reportes",
    icon: <GrUserSettings />,
    text: "Reportes",
  },
  {
    to: "/logout",
    icon: <GrLogout />,
    text: "Cerrar sesión",
  },
];

const opcionesInvestigador = [
  {
    to: "/preguntas-respuestas",
    icon: <GrUserAdd />,
    text: "Preguntas",
  },
  {
    to: "/logout",
    icon: <GrLogout />,
    text: "Cerrar sesión",
  },
];

const opcionesCoordinador = [
  {
    to: "/administrar-personal",
    icon: <GrUserAdd />,
    text: "Usuarios",
  },
  {
    to: "/preguntas-respuestas",
    icon: <GrUserSettings />,
    text: "Preguntas",
  },
  {
    to: "/reportes",
    icon: <GrUserSettings />,

    text: "Reportes",
  },
  

  {
    to: "/logout",
    icon: <GrLogout />,
    text: "Cerrar sesión",
  },
];

export { opcionesAdmin, opcionesInvestigador, opcionesCoordinador};
