// import { headersPreguntasRespuestas } from "../../data/headersTables";
// import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
// import { q_pairs } from "../../data/q_pairs";
// import NuevoRegistroPregunta from "../NuevoRegistroPregunta/NuevoRegistroPregunta";
// import "./Preguntas.styles.css";
// import { useState } from "react";
// const Preguntas = () => {
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   const preguntas = JSON.parse(localStorage.getItem("qa")) || q_pairs;

//   return (
//     <main className=" window-content ">
//       <div className="container-preguntas">
//         <div className="subtitulo">
//           <h1>Preguntas</h1>
//           <hr />
//         </div>

//         {preguntas.length > 0 ? (
//           <CustomTNR
//             headers={headersPreguntasRespuestas}
//             users={preguntas}
//             placeholder="Buscar por ID"
//           />
//         ) : (
//           <p>Loading preguntas...</p>
//         )}
//         {currentUser.rol === "Coordinador" ? <NuevoRegistroPregunta /> : null}
//       </div>
//     </main>
//   );
// };

// export default Preguntas;

// import { headersPreguntasRespuestas } from "../../data/headersTables";
// import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
// import "./Preguntas.styles.css";
// import { useState, useEffect } from "react";
// import NuevoRegistroPregunta from "../NuevoRegistroPregunta/NuevoRegistroPregunta";

// const Preguntas = () => {
//   const [preguntas, setPreguntas] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchQA = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/v1/qa");
//         if (!response.ok) {
//           throw new Error("No se pudo cargar las preguntas y respuestas");
//         }
//         const data = await response.json();
//         setPreguntas(data);
//       } catch (error) {
//         console.error("Error al cargar preguntas y respuestas:", error);
//       }
//       setIsLoading(false);
//     };

//     fetchQA();
//   }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente.

//   const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

//   return (
//     <main className="window-content">
//       <div className="container-preguntas">
//         <div className="subtitulo">
//           <h1>Preguntas</h1>
//           <hr />
//         </div>
//         {isLoading ? (
//           <p>Cargando preguntas...</p>
//         ) : (
//           <CustomTNR
//             headers={headersPreguntasRespuestas}
//             users={preguntas}
//             placeholder="Buscar por ID"
//           />
//         )}
//         {currentUser.role === "Coordinador" ? <NuevoRegistroPregunta /> : null}
//       </div>
//     </main>
//   );
// };

// export default Preguntas;

import { headersPreguntasRespuestas } from "../../data/headersTables";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
import "./Preguntas.styles.css";
import { useState, useEffect } from "react";
import NuevoRegistroPregunta from "../NuevoRegistroPregunta/NuevoRegistroPregunta";

const Preguntas = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQA();
  }, []);

  const fetchQA = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/v1/qa");
      if (!response.ok) {
        throw new Error("No se pudo cargar las preguntas y respuestas");
      }
      const data = await response.json();
      setPreguntas(data);
    } catch (error) {
      console.error("Error al cargar preguntas y respuestas:", error);
    }
    setIsLoading(false);
  };

  const handleNewQuestionAdded = () => {
    fetchQA(); // Recarga las preguntas para incluir la nueva
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <main className="window-content">
      <div className="container-preguntas">
        <div className="subtitulo">
          <h1>Preguntas</h1>
          <hr />
        </div>
        {isLoading ? (
          <p>Cargando preguntas...</p>
        ) : (
          <CustomTNR
            headers={headersPreguntasRespuestas}
            users={preguntas}
            placeholder="Buscar por ID"
          />
        )}
        <NuevoRegistroPregunta onAddQuestion={handleNewQuestionAdded} />
      </div>
    </main>
  );
};

export default Preguntas;
