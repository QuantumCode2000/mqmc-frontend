import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Logout,Home } from "./views/exports";
import {
  PrivateRoute,
  PublicRoute,
  AdministrarPersonal,
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
        path: "/administrar-personal",
        element: <AdministrarPersonal />,
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
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
