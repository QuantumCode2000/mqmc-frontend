import { useState, useContext } from "react";
import {
    CustomButton,
    CustomInput,
    CustomSelect
} from "../customs/exports";
import { tipoUsuario,expediciones } from "../../data/datosSelect";
import UsersContext from "../../context/UsersContext";
import "./ModalNuevoRegistro.styles.css"
const ModalEdit = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { updateUserList } = useContext(UsersContext);
  const personalLocalStorage = JSON.parse(
    window.localStorage.getItem("listPersonal") as string
  );
  const [selectExpedicion, setSelectExpedicion] = useState("Expedicion CI");
  const [selectEspecialidad, setSelectEspecialidad] =
    useState("Especialiad Medica");
  const [selectDivision, setSelectDivision] = useState("Division");
  const [selectUnidad, setSelectUnidad] = useState("RA - 3 'PISAGUA'");
  const [inforPersonal, setInforPersonal] = useState({
    imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
    nombresApellidos: "",
    documento: "",
    expedicion: "",
    password: "",
    nombreUsuario: "",
    especialidadMedico: "",
    division: "",
    unidad: "",
    correoInstitucional: "",
  });
  const [inforLaboral, setInforLaboral] = useState({
    tipoLaboral: "Medico",
    estado: "Activo",
    nivelJerarquico: "Medico",
  });
  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPersonal = [
      ...personalLocalStorage,
      { ...inforPersonal, informacionLaboral: inforLaboral },
    ];
    updateListPersonal(newPersonal);
    console.log(newPersonal);
    clearForm();
    onClose();
  };

  const handleChangePersonal = (e) => {
    setInforPersonal({
      ...inforPersonal,
      [e.target.name]: e.target.value,
      expedicion: selectExpedicion,
      especialidadMedico: selectEspecialidad,
      division: selectDivision,
      unidad: selectUnidad,
    });
  };
  const handleChangeLaboral = (e) => {
    setInforLaboral({
      ...inforLaboral,
      [e.target.name]: e.target.value,
    });
  };
  const handleCustomSelect = (e, functionSelect) => {
    functionSelect(e.target.value);
  };
  const clearForm = () => {
    setInforPersonal({
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      nombresApellidos: "",
      documento: "",
      expedicion: "",
      password: "",
      nombreUsuario: "",
      especialidadMedico: "",
      division: "",
      unidad: "",
      correoInstitucional: "",
    });
    setInforLaboral({
      tipoLaboral: "Medico",
      estado: "Activo",
      nivelJerarquico: "Medico",
    });
    setSelectExpedicion("Expedicion CI");
    setSelectEspecialidad("Especialiad Medica");
    setSelectDivision("Division");
  };

  return (
    <div className="overlay ">
      <div className="modal-nuevo-registro">
        <h2>Editar informacion </h2>
        <form className="inputs-box" onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            placeholder="Nombre de Usuario"
            name="nombreUsuario"
            required
            value={inforPersonal.nombreUsuario}
            onChange={handleChangePersonal}
          />
          <CustomInput
            type="password"
            placeholder="Contraseña"
            name="password"
            required
            value={inforPersonal.password}
            onChange={handleChangePersonal}
          />
          <CustomInput
            type="email"
            placeholder="Correo Institucional"
            name="correoInstitucional"
            required
            value={inforPersonal.correoInstitucional}
            onChange={handleChangePersonal}
          />
          <CustomSelect
            name="rol"
            arrayOptionsSelect={especialidades}
            onChange={(e) => {
              handleCustomSelect(e, setSelectEspecialidad);
            }}
            value={selectEspecialidad}
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
          <CustomButton content="Editar" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
