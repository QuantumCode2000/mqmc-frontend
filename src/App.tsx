import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Logout,Home } from "./views/exports";
import {
  NuevoPaciente,
  PrivateRoute,
  PublicRoute,
  AdministrarPersonal,
  AgendarCita,
  Casos,
  Preguntas
} from "./components/exports";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <h1></h1>,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/administrar-pacientes",
        // element: <AdministrarPacientes />,
      },
      {
        path: "/administrar-personal",
        element: <AdministrarPersonal />,
      },
      {
        path: "/nuevo-paciente",
        element: <NuevoPaciente />,
      },
      {
        path: "/pacientes",
        element: <Casos />,
      },
      {
        path:"/preguntas-respuestas",
        element:<Preguntas/>
      }
      

    ],
  },
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <h1>Public</h1>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/agendar-cita",
        element: <AgendarCita />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
