import { CustomInput, CustomButton, CustomSelect } from "../customs/exports";
import { tipoUsuario, expediciones } from "../../data/datosSelect";
import { useState, useContext } from "react";
import UsersContext from "../../context/UsersContext";
import "./ModalNuevoRegistro.styles.css";
const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  const { updateUserList } = useContext(UsersContext);
  const personalLocalStorage = JSON.parse(
    window.localStorage.getItem("user_list") as string
  );
  const [selectExpedicion, setSelectExpedicion] = useState("");
  const [selectRol, setSelectRol] = useState("");
  const [userInformation, setUserInformation] = useState({
    imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
    nombre: "",
    documento: "",
    password: "",
    nombreUsuario: "",
    correo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPersonal = [
      ...personalLocalStorage,
      { ...userInformation, rol : selectRol, expedicion: selectExpedicion, id: personalLocalStorage.length + 1,estado: true},
    ];
    updateUserList(newPersonal);
    clearForm();
    onClose();
  };

  const handleChangePersonal = (e) => {
    setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handleCustomSelect = (e, functionSelect) => {
    functionSelect(e.target.value);
  };
  const clearForm = () => {
    setUserInformation({
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      nombre: "",
      documento: "",
      expedicion: "",
      password: "",
      nombreUsuario: "",
  
    });
    setSelectExpedicion("");
    setSelectRol("");
  };

  return (
    <div className="overlay ">
      <div className="modal-nuevo-registro">
        <h2>Nuevo Registro</h2>
        <form className="inputs-box" onSubmit={handleSubmit}>
          <div className="formulario1">
            <CustomInput
              type="text"
              placeholder="Nombre de Usuario"
              name="nombreUsuario"
              required
              value={userInformation.nombreUsuario}
              onChange={handleChangePersonal}
            />
            <CustomInput
              type="password"
              placeholder="Contraseña"
              name="password"
              required
              value={userInformation.password}
              onChange={handleChangePersonal}
            />
          </div>
          <CustomInput
            type="email"
            placeholder="Correo"
            name="correo"
            required
            value={userInformation.correo}
            onChange={handleChangePersonal}
          />
          <CustomInput
            type="text"
            placeholder="Nombre Completo"
            name="nombre"
            required
            value={userInformation.nombre}
            onChange={handleChangePersonal}
          />
          <div className="expedicionci">
            <CustomInput
              type="number"
              placeholder="Carnet de Identidad"
              name="documento"
              required
              value={userInformation.documento}
              onChange={handleChangePersonal}
            />
            <div className="selectorexpedicion">
              <CustomSelect
                name="expedicion"
                arrayOptionsSelect={expediciones}
                onChange={(e) => {
                  handleCustomSelect(e, setSelectExpedicion);
                }}
                value={selectExpedicion}
              />
            </div>
          </div>
          <CustomSelect
            name="rol"
            arrayOptionsSelect={tipoUsuario}
            onChange={(e) => {
              handleCustomSelect(e, setSelectRol);
            }}
            value={selectRol}
          />
        </form>
        <div className="buttons-box">
          <CustomButton
          content="Cancelar"
            onClick={() => {
              clearForm();
              onClose();
            }}
          />
          <CustomButton content="Guardar" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
