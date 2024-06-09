import { useState } from "react";
import "./Perfil.styles.css";
import CustomInput from "../customs/CustomInput/CustomInput";
import CustomButton from "../customs/CustomButton/CustomButton";

const Perfil = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [imagenPerfil, setImagenPerfil] = useState(currentUser.imgProfile);
  const [nombre, setNombre] = useState(currentUser.name);
  const [rol, setRol] = useState(currentUser.role);
  const [correo, setCorreo] = useState(currentUser.email);
  const [nombreUsuario, setNombreUsuario] = useState(currentUser.username);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagenPerfil(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const constructUpdatedFields = () => {
    const fields = {};
    if (imagenPerfil !== currentUser.imgProfile)
      fields.imgProfile = imagenPerfil;
    if (nombre !== currentUser.name) fields.name = nombre;
    if (rol !== currentUser.role) fields.role = rol;
    if (correo !== currentUser.email) fields.email = correo;
    if (nombreUsuario !== currentUser.username) fields.username = nombreUsuario;
    return fields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFields = constructUpdatedFields();

    if (Object.keys(updatedFields).length === 0) {
      alert("No se han detectado cambios.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/users/email/${currentUser.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFields),
        },
      );

      if (response.ok) {
        alert("Cambios guardados con éxito.");
        // Actualiza los datos actuales en localStorage si es necesario
        const newUser = { ...currentUser, ...updatedFields };
        localStorage.setItem("currentUser", JSON.stringify(newUser));
      } else {
        const errorData = await response.json();
        alert(`Error al actualizar: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="window-content">
      <div className="container-perfil">
        <div className="img-perfil">
          <img
            src={imagenPerfil}
            className="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="w-full p-24">
          <form onSubmit={handleSubmit}>
            <CustomInput
              label="Nombre:"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <CustomInput
              label="Rol:"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            />
            <CustomInput
              label="Correo:"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <CustomInput
              label="Nombre de Usuario:"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
            <CustomButton content="Guardar Cambios" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
