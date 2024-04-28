import { useState } from "react";
import "./Perfil.styles.css";
import CustomInput from "../customs/CustomInput/CustomInput";
import CustomButton from "../customs/CustomButton/CustomButton";

const Perfil = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [imagenPerfil, setImagenPerfil] = useState(currentUser.imgPerfil);
  const [nombre, setNombre] = useState(currentUser.nombre);
  const [rol, setRol] = useState(currentUser.rol);
  const [correo, setCorreo] = useState(currentUser.correo);
  const [nombreUsuario, setNombreUsuario] = useState(currentUser.nombreUsuario);
  const [password, setPassword] = useState(currentUser.password);
  let user_list = JSON.parse(localStorage.getItem("user_list"));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagenPerfil(reader.result); // Convertir la imagen a Base64 y guardarla
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      imgPerfil: imagenPerfil,
      nombre: nombre,
      rol: rol,
      correo: correo,
      nombreUsuario: nombreUsuario,
      password: password,
    };
    const updatedUserList = user_list.map((user) => {
      if (user.nombreUsuario === currentUser.nombreUsuario) {
        return {
          ...user,
          ...newUser,
        };
      }
      return user;
    });
    localStorage.setItem("user_list", JSON.stringify(updatedUserList));
    alert("Cambios guardados");
  };

  return (
    <main className=" window-content ">
      <div className="container-perfil">
        <div className="subtitulo">
          <h1>Perfil</h1>
          <hr />
        </div>
        <div className="body-perfil">
          <div className="img-perfil">
            <img
              src={imagenPerfil}
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />

            <input type="file" onChange={handleImageChange} />
          </div>

          <div>
            <h3>Informacion Personal</h3>

            <form role="form" onSubmit={handleSubmit}>
              <div>
                <label>Nombre:</label>
                <div>
                  <CustomInput
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label>Rol</label>
                <div>
                  <CustomInput
                    type="text"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label>Correo:</label>
                <div>
                  <CustomInput
                    type="text"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label>Nombre de Usuario:</label>
                <div>
                  <CustomInput
                    type="text"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label>Contraseña:</label>
                <div>
                  <CustomInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <CustomButton content="Guardar Cambios" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Perfil;
