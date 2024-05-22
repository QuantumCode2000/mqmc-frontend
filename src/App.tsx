import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Logout, Home } from "./views/exports";
import {
  PrivateRoute,
  PublicRoute,
  AdministrarPersonal,
  Preguntas,
  Reportes,
  Perfil,
} from "./components/exports";
import ResponderUsuarios from "./components/ResponderUsuarios/ResponderUsuarios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <h1>Bienvenido al Sistema de MQMC</h1>,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "administrar-personal",
        element: <AdministrarPersonal />,
      },
      {
        path: "preguntas-respuestas",
        element: <Preguntas />,
      },
      {
        path: "responder",
        element: <ResponderUsuarios />,
      },
      {
        path: "reportes",
        element: <Reportes />,
      },
      {
        path: "perfil",
        element: <Perfil />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <h1>Página Pública</h1>,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
