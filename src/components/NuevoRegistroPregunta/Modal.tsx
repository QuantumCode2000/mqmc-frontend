import { CustomInput, CustomButton } from "../customs/exports";
import { useState } from "react";

const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [videoURL, setVideoURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar los datos del formulario como desees
    console.log("Pregunta:", question);
    console.log("Respuesta:", answer);
    console.log("URL del video:", videoURL);
    // Luego de manejar los datos, puedes limpiar los inputs y cerrar el modal
    clearForm();
    onClose();
  };

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const clearForm = () => {
    setQuestion("");
    setAnswer("");
    setVideoURL("");
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
            value={videoURL}
            onChange={(e) => handleChange(e, setVideoURL)}
          />
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
