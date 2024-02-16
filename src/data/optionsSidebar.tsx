import { GrUserAdd, GrUserSettings, GrLogout } from "react-icons/gr";

const opciones = [
  // {
  //   to: "/administrar-personal/crear-usuarios",
  //   icon: <GrUserAdd />,
  //   text: "Nuevo Personal",
  // },
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

export default opciones;
