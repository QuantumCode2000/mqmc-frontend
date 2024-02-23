import CustomInput from "../customs/CustomInput/CustomInput";
import CustomButton from "../customs/CustomButton/CustomButton";
import CustomSelect from "../customs/CustomSelect/CustomSelect";
import {
  divisiones_militatees,
  especialidades,
  expediciones,
} from "../../data/datosSelect";
import {
  extractPorUnidades,
  extractDivisiones,
} from "../../services/extractUnidades";
import { useState, useContext } from "react";
import UsersContext from "../../context/UsersContext";
const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { updateListPersonal } = useContext(UsersContext);
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
      <div className="modalContainer">
        <h2>Informacion Personal</h2>
        <form className="inputs-box" onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            placeholder="Nombre Completo"
            name="nombresApellidos"
            required
            value={inforPersonal.nombresApellidos}
            onChange={handleChangePersonal}
          />
          <CustomInput
            type="number"
            placeholder="Carnet de Identidad"
            name="documento"
            required
            value={inforPersonal.documento}
            onChange={handleChangePersonal}
          />
          <CustomSelect
            name="expedicion"
            arrayOptionsSelect={expediciones}
            onChange={(e) => {
              handleCustomSelect(e, setSelectExpedicion);
            }}
            value={selectExpedicion}
          />
          <CustomSelect
            name="division"
            arrayOptionsSelect={extractDivisiones(divisiones_militatees)}
            onChange={(e) => {
              handleCustomSelect(e, setSelectDivision);
            }}
            value={selectDivision}
          />

          <CustomSelect
            name="unidad"
            arrayOptionsSelect={extractPorUnidades(
              divisiones_militatees,
              selectDivision
            )}
            onChange={(e) => {
              handleCustomSelect(e, setSelectUnidad);
            }}
            value={selectUnidad}
          />
          <CustomSelect
            name="expedicion"
            arrayOptionsSelect={especialidades}
            onChange={(e) => {
              handleCustomSelect(e, setSelectEspecialidad);
            }}
            value={selectEspecialidad}
          />

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
