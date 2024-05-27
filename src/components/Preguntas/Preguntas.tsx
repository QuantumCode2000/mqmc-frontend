// // import { headersPreguntasRespuestas } from "../../data/headersTables";
// // import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
// // import { q_pairs } from "../../data/q_pairs";
// // import NuevoRegistroPregunta from "../NuevoRegistroPregunta/NuevoRegistroPregunta";
// // import "./Preguntas.styles.css";
// // import { useState } from "react";
// // const Preguntas = () => {
// //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// //   const preguntas = JSON.parse(localStorage.getItem("qa")) || q_pairs;

// //   return (
// //     <main className=" window-content ">
// //       <div className="container-preguntas">
// //         <div className="subtitulo">
// //           <h1>Preguntas</h1>
// //           <hr />
// //         </div>

// //         {preguntas.length > 0 ? (
// //           <CustomTNR
// //             headers={headersPreguntasRespuestas}
// //             users={preguntas}
// //             placeholder="Buscar por ID"
// //           />
// //         ) : (
// //           <p>Loading preguntas...</p>
// //         )}
// //         {currentUser.rol === "Coordinador" ? <NuevoRegistroPregunta /> : null}
// //       </div>
// //     </main>
// //   );
// // };

// // export default Preguntas;

// // import { headersPreguntasRespuestas } from "../../data/headersTables";
// // import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
// // import "./Preguntas.styles.css";
// // import { useState, useEffect } from "react";
// // import NuevoRegistroPregunta from "../NuevoRegistroPregunta/NuevoRegistroPregunta";

// // const Preguntas = () => {
// //   const [preguntas, setPreguntas] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchQA = async () => {
// //       try {
// //         const response = await fetch("http://localhost:3000/api/v1/qa");
// //         if (!response.ok) {
// //           throw new Error("No se pudo cargar las preguntas y respuestas");
// //         }
// //         const data = await response.json();
// //         setPreguntas(data);
// //       } catch (error) {
// //         console.error("Error al cargar preguntas y respuestas:", error);
// //       }
// //       setIsLoading(false);
// //     };

// //     fetchQA();
// //   }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente.

// //   const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

// //   return (
// //     <main className="window-content">
// //       <div className="container-preguntas">
// //         <div className="subtitulo">
// //           <h1>Preguntas</h1>
// //           <hr />
// //         </div>
// //         {isLoading ? (
// //           <p>Cargando preguntas...</p>
// //         ) : (
// //           <CustomTNR
// //             headers={headersPreguntasRespuestas}
// //             users={preguntas}
// //             placeholder="Buscar por ID"
// //           />
// //         )}
// //         {currentUser.role === "Coordinador" ? <NuevoRegistroPregunta /> : null}
// //       </div>
// //     </main>
// //   );
// // };

// // export default Preguntas;

// import { headersPreguntasRespuestas } from "../../data/headersTables";
// import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
// import "./Preguntas.styles.css";
// import { useState, useEffect } from "react";
// import NuevoRegistroPregunta from "../NuevoRegistroPregunta/NuevoRegistroPregunta";

// const Preguntas = () => {
//   const [preguntas, setPreguntas] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchQA();
//   }, []);

//   const fetchQA = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:3000/api/v1/qa");
//       if (!response.ok) {
//         throw new Error("No se pudo cargar las preguntas y respuestas");
//       }
//       const data = await response.json();
//       setPreguntas(data);
//     } catch (error) {
//       console.error("Error al cargar preguntas y respuestas:", error);
//     }
//     setIsLoading(false);
//   };

//   const handleNewQuestionAdded = () => {
//     fetchQA();
//   };

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
//             activo={false}
//           />
//         )}
//         <NuevoRegistroPregunta onAddQuestion={handleNewQuestionAdded} />
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
import CustomButton from "../customs/CustomButton/CustomButton"; // Asegúrate de que este componente exista.
import { CustomSelect } from "../customs/exports";

const Preguntas = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtro, setFiltro] = useState(""); // Valor del filtro actual
  const [tipoFiltro, setTipoFiltro] = useState(""); // 'ageGroup' o 'categoria'
  const [preguntasFiltradas, setPreguntasFiltradas] = useState([]);
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

  const handleFilterChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleTipoFiltroChange = (e) => {
    setTipoFiltro(e.target.value);
  };

  const applyFilter = () => {
    if (tipoFiltro == "Jóvenes" && filtro == "Todas las categorías") {
      const filtered = preguntas.filter(
        (pregunta) => pregunta.ageGroup === "Jóvenes",
      );
      if (filtered.length === 0) {
        alert("No hay preguntas para mostrar");
      } else {
        console.log(filtered);
        setPreguntasFiltradas(filtered);
      }
    }
    if (tipoFiltro == "Jóvenes" && filtro != "Todas las categorías") {
      const filtered = preguntas.filter(
        (pregunta) =>
          pregunta.ageGroup === "Jóvenes" && pregunta.category === filtro,
      );
      if (filtered.length === 0) {
        alert("No hay preguntas para mostrar");
      } else {
        console.log(filtered);
        setPreguntasFiltradas(filtered);
      }
    }
    if (tipoFiltro == "Adolescentes" && filtro == "Todas las categorías") {
      const filtered = preguntas.filter(
        (pregunta) => pregunta.ageGroup === "Adolescentes",
      );
      if (filtered.length === 0) {
        alert("No hay preguntas para mostrar");
      } else {
        console.log(filtered);
        setPreguntasFiltradas(filtered);
      }
    }
    if (tipoFiltro == "Adolescentes" && filtro != "Todas las categorías") {
      const filtered = preguntas.filter(
        (pregunta) =>
          pregunta.ageGroup === "Adolescentes" && pregunta.category === filtro,
      );
      if (filtered.length === 0) {
        alert("No hay preguntas para mostrar");
      } else {
        console.log(filtered);
        setPreguntasFiltradas(filtered);
      }
    }
  };

  return (
    <main className="window-content">
      <div className="container-preguntas">
        <div className="subtitulo">
          <h1>Preguntas</h1>
          <hr />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <CustomSelect
            arrayOptionsSelect={[
              "Seleccion el grupo etario",
              "Adolescentes",
              "Jóvenes",
            ]}
            onChange={handleTipoFiltroChange}
            value={tipoFiltro}
          />
          <CustomSelect
            arrayOptionsSelect={
              tipoFiltro === "Adolescentes"
                ? [
                    "Seleccione una categoría",
                    "Todas las categorías",
                    "Educación sobre la sexualidad",
                    "prevencion de embarazos no deseados emabarzo adolescente y segundo embarazo",
                    "prevencion de enfermedades de transmision sexual (ETS)",
                    "Consentimiento y relaciones saludables",
                    "Derechos sexuales y reproductivos",
                    "Salud mental y emocional",
                    "Tecnología y medios digitales Asociados con el sexting",
                    "Maternidad y paternidad responsables",
                    "Diversidad y inclusión",
                    "Prevención del abuso sexual",
                    "Sexualidad y autocuidado",
                    "equidad de genero",
                    "identidad y conocimiento personal",
                  ]
                : tipoFiltro === "Jóvenes"
                ? [
                    "Seleccione una categoría",
                    "Todas las categorías",
                    "Educación sobre la sexualidad",
                    "Prevención de embarazos no deseados",
                    "Prevención de enfermedades de transmisión sexual (ETS)",
                    "Consentimiento y relaciones saludables",
                    "Derechos sexuales y reproductivos",
                    "Salud mental y emocional",
                    "Tecnología y medios digitales Asociados con el sexting",
                    "Maternidad y paternidad responsables",
                    "Diversidad y inclusión",
                    "Prevención del abuso sexual",
                    "RELACIONES COITALES",
                    "EQUIDAD DE GENERO",
                    "MI SEXUALIDAD Y AUTOCUIDADO",
                  ]
                : ["Seleccione grupo etario primero"]
            }
            onChange={handleFilterChange}
            value={filtro}
          />
          <CustomButton content="Filtrar" onClick={applyFilter} />
          <CustomButton
            content="Ver todo"
            onClick={() => {
              setPreguntasFiltradas([]);
              setFiltro("");
              setTipoFiltro("");
            }}
          />
        </div>
        {isLoading ? (
          <p>Cargando preguntas...</p>
        ) : (
          // <CustomTNR
          //   headers={headersPreguntasRespuestas}
          //   users={
          //     preguntasFiltradas.length > 0 ? preguntasFiltradas : preguntas
          //   }
          //   activo={false}
          // />
          <CustomTNR
            key={preguntasFiltradas.length} // Cambia cada vez que cambia el número de preguntas filtradas
            headers={headersPreguntasRespuestas}
            users={
              preguntasFiltradas.length > 0 ? preguntasFiltradas : preguntas
            }
            activo={false}
          />
        )}
        <NuevoRegistroPregunta onAddQuestion={fetchQA} />
      </div>
    </main>
  );
};

export default Preguntas;
