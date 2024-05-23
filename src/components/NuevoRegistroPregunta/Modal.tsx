// import { CustomInput, CustomButton } from "../customs/exports";
// import { useState } from "react";

// const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
//   if (!open) return null;

//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [video, setVideo] = useState("");
//   const [category, setCategory] = useState("");
//   const [ageGroup, setAgeGroup] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/api/v1/qa", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           question,
//           answer,
//           video,
//           category,
//           ageGroup,
//         }),
//       });
//       if (!response.ok) {
//         throw new Error("Error al enviar los datos");
//       }
//       clearForm();
//       onClose();
//     } catch (error) {
//       console.error("Error al guardar la pregunta:", error);
//     }
//   };

//   const handleChange = (e, setState) => {
//     setState(e.target.value);
//   };

//   const clearForm = () => {
//     setQuestion("");
//     setAnswer("");
//     setVideo("");
//     setCategory("");
//     setAgeGroup("");
//   };

//   return (
//     <div className="overlay">
//       <div className="modal-nuevo-registro">
//         <h2>Nuevo Registro</h2>
//         <form className="inputs-box" onSubmit={handleSubmit}>
//           <CustomInput
//             type="text"
//             placeholder="Pregunta"
//             name="question"
//             required
//             value={question}
//             onChange={(e) => handleChange(e, setQuestion)}
//           />
//           <CustomInput
//             type="text"
//             placeholder="Respuesta"
//             name="answer"
//             required
//             value={answer}
//             onChange={(e) => handleChange(e, setAnswer)}
//           />
//           <CustomInput
//             type="url"
//             placeholder="URL del Video"
//             name="videoURL"
//             value={video}
//             onChange={(e) => handleChange(e, setVideo)}
//           />
//           <CustomInput
//             type="text"
//             placeholder="Categoría"
//             name="category"
//             required
//             value={category}
//             onChange={(e) => handleChange(e, setCategory)}
//           />
//           <CustomInput
//             type="text"
//             placeholder="Grupo Etario"
//             name="ageGroup"
//             required
//             value={ageGroup}
//             onChange={(e) => handleChange(e, setAgeGroup)}
//           />

//           <div className="buttons-box">
//             <CustomButton
//               content="Cancelar"
//               onClick={() => {
//                 clearForm();
//                 onClose();
//               }}
//             />
//             <CustomButton content="Guardar" type="submit" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import { CustomInput, CustomButton, CustomSelect } from "../customs/exports";
import { useState } from "react";

const Modal = ({
  open,
  onClose,
  onSaved,
}: {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}) => {
  if (!open) return null;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/v1/qa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          answer,
          video,
          category,
          ageGroup,
        }),
      });
      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }
      alert("Información guardada correctamente"); // Alerta al usuario que la información se ha guardado
      clearForm();
      onClose(); // Cierra el modal
      onSaved(); // Llama al callback para actualizar la vista o datos del padre
    } catch (error) {
      console.error("Error al guardar la pregunta:", error);
      alert("No se pudo guardar la información, por favor inténtalo de nuevo."); // Alerta de error
    }
  };

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const clearForm = () => {
    setQuestion("");
    setAnswer("");
    setVideo("");
    setCategory("");
    setAgeGroup("");
  };

  return (
    <div className="overlay">
      <div className="modal-nuevo-registro">
        <h2>Nuevo Registro</h2>
        <form className="inputs-box" onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            placeholder="Pregunta"
            name="question"
            required
            value={question}
            onChange={(e) => handleChange(e, setQuestion)}
          />
          <CustomInput
            type="text"
            placeholder="Respuesta"
            name="answer"
            required
            value={answer}
            onChange={(e) => handleChange(e, setAnswer)}
          />
          <CustomInput
            type="url"
            placeholder="URL del Video"
            name="videoURL"
            value={video}
            onChange={(e) => handleChange(e, setVideo)}
          />
          <CustomSelect
            name="ageGroup"
            arrayOptionsSelect={[
              "Seleccione un grupo etario",
              "Adolescentes",
              "Jóvenes",
            ]}
            value={ageGroup}
            onChange={(e) => handleChange(e, setAgeGroup)}
          />

          {/* <CustomInput
            type="text"
            placeholder="Categoría"
            name="category"
            required
            value={category}
            onChange={(e) => handleChange(e, setCategory)}
          /> */}
          <CustomSelect
            name="category"
            arrayOptionsSelect={
              ageGroup === "Adolescentes"
                ? [
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
                : ageGroup === "Jóvenes"
                ? [
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
            value={category}
            onChange={(e) => handleChange(e, setCategory)}
          />
          {/* <CustomInput
            type="text"
            placeholder="Grupo Etario"
            name="ageGroup"
            required
            value={ageGroup}
            onChange={(e) => handleChange(e, setAgeGroup)}
          /> */}

          <div className="buttons-box">
            <CustomButton
              content="Cancelar"
              onClick={() => {
                clearForm();
                onClose();
              }}
            />
            <CustomButton content="Guardar" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
