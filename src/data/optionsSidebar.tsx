import { GrUserAdd, GrUserSettings } from "react-icons/gr";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import { VscCommentUnresolved } from "react-icons/vsc";
const opcionesAdmin = [
  {
    to: "/perfil",
    icon: <GrUserAdd />,
    text: "Perfil",
  },
  {
    to: "/administrar-personal",
    icon: <GrUserSettings />,
    text: "Usuarios",
  },
  {
    to: "/preguntas-respuestas",
    icon: <FaFileCircleQuestion />,
    text: "Preguntas",
  },
  {
    to: "reportes",
    icon: <HiDocumentReport />,
    text: "Reportes",
  },
  {
    to: "/logout",
    icon: <LuLogOut />,
    text: "Cerrar sesión",
  },
];

const opcionesInvestigador = [
  {
    to: "/perfil",
    icon: <GrUserAdd />,
    text: "Perfil",
  },
  {
    to: "/preguntas-respuestas",
    icon: <FaFileCircleQuestion />,
    text: "Preguntas",
  },
  {
    to: "/responder",
    icon: <VscCommentUnresolved />,
    text: "Responder Usuarios",
  },
  {
    to: "/logout",
    icon: <LuLogOut />,
    text: "Cerrar sesión",
  },
];

const opcionesCoordinador = [
  {
    to: "/perfil",
    icon: <GrUserAdd />,
    text: "Perfil",
  },
  {
    to: "/administrar-personal",
    icon: <GrUserSettings />,
    text: "Usuarios",
  },
  {
    to: "/preguntas-respuestas",
    icon: <FaFileCircleQuestion />,
    text: "Preguntas",
  },
  {
    to: "/reportes",
    icon: <HiDocumentReport />,
    text: "Reportes",
  },

  {
    to: "/logout",
    icon: <LuLogOut />,
    text: "Cerrar sesión",
  },
];

export { opcionesAdmin, opcionesInvestigador, opcionesCoordinador };
