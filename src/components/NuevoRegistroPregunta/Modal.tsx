import { CustomInput, CustomButton, CustomSelect } from "../customs/exports";
import { useState, ChangeEvent, FormEvent } from "react";
import "./NuevoRegistroPregunta.styles.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

const Modal = ({ open, onClose, onSaved }: ModalProps) => {
  if (!open) return null;

  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [ageGroup, setAgeGroup] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validación de los campos requeridos excepto 'video'
    if (
      !question ||
      !answer ||
      !category ||
      !ageGroup ||
      (ageGroup === "Jóvenes" && !video)
    ) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

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
      alert("Información guardada correctamente");
      clearForm();
      onClose();
      onSaved();
    } catch (error) {
      console.error("Error al guardar la pregunta:", error);
      alert("No se pudo guardar la información, por favor inténtalo de nuevo.");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
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
            onChange={(e) =>
              handleChange(e as ChangeEvent<HTMLInputElement>, setQuestion)
            }
          />
          <CustomInput
            type="text"
            placeholder="Respuesta"
            name="answer"
            required
            value={answer}
            onChange={(e) =>
              handleChange(e as ChangeEvent<HTMLInputElement>, setAnswer)
            }
          />

          <CustomSelect
            name="ageGroup"
            arrayOptionsSelect={[
              "Seleccione un grupo etario",
              "Adolescentes",
              "Jóvenes",
            ]}
            value={ageGroup}
            onChange={(e) =>
              handleChange(e as ChangeEvent<HTMLSelectElement>, setAgeGroup)
            }
          />
          
          <CustomSelect
            name="category"
            arrayOptionsSelect={
              ageGroup === "Adolescentes"
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
                : ageGroup === "Jóvenes"
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
            value={category}
            onChange={(e) =>
              handleChange(e as ChangeEvent<HTMLSelectElement>, setCategory)
            }
          />
          {ageGroup === "Jóvenes" && (
            <CustomInput
              type="url"
              placeholder="URL del Video"
              name="videoURL"
              value={video}
              onChange={(e) =>
                handleChange(e as ChangeEvent<HTMLInputElement>, setVideo)
              }
            />
          )}
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
