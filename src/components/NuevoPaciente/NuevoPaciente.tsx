// import CustomInput from "../customs/CustomInput/CustomInput";
// import CustomButton from "../customs/CustomButton/CustomButton";
// import CustomSelect from "../customs/CustomSelect/CustomSelect";
// import { useState, useContext } from "react";
// import UsersContext from "../../context/UsersContext";
// import {
//     grados,
//     especialidades,
//     divisiones_militatees,
// } from "../../data/datosSelect";
// import { extractDivisiones, extractPorUnidades } from "../../services/extractUnidades";

// const NuevoPaciente = () => {
//     const { updateListPacientes } = useContext(UsersContext);
//     const pacientesLocalStorage = JSON.parse(
//         window.localStorage.getItem("listPacientes") as string
//     );
//     const medico = JSON.parse(window.localStorage.getItem("inforUser") as string);
//     const [imageUrl, setImageUrl] = useState("");

//     const [selectDivision, setSelectDivision] = useState("");
//     const [selectUnidad, setSelectUnidad] = useState("");
//     const [selectGrado, setSelectGrado] = useState("");
//     const [selectEspecialidad, setSelectEspecialidad] = useState("");

//     const [infPaciente, setInfPaciente] = useState({
//         fechaRegistro: "",
//         division: "",
//         unidad: "",
//         grado: "",
//         elón: "",
//         nombresApellidos: "",
//         diagnosticoDeIngreso: "",
//         centroHospitalario: "",
//         fechaDeIngreso: "",
//         situacionActual: "",
//         especialidad: "",
//         observaciones: "",
//         documentoMedicoTratante: "",
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newPacientes = [...pacientesLocalStorage, infPaciente];
//         updateListPacientes(newPacientes);
//         clearForm();
//     };
//     const handleChange = (e) => {
//         setInfPaciente({
//             ...infPaciente,
//             [e.target.name]: e.target.value,
//             division: selectDivision,
//             unidad: selectUnidad,
//             grado: selectGrado,
//             especialidad: selectEspecialidad,
//             fechaRegistro: new Date().toLocaleDateString(),
//             documentoMedicoTratante: medico.documento,
//         });
//     };
//     const handleCustomSelect = (e, functionSelect) => {
//         functionSelect(e.target.value);
//     };
//     const clearForm = () => {
//         setInfPaciente({
//             fechaRegistro: "",
//             division: "",
//             unidad: "",
//             grado: "",
//             elón: "",
//             nombresApellidos: "",
//             diagnosticoDeIngreso: "",
//             centroHospitalario: "",
//             fechaDeIngreso: "",
//             situacionActual: "",
//             especialidad: "",
//             observaciones: "",
//         });
//         setSelectDivision("Division");
//         setSelectUnidad("Unidad");
//         setSelectGrado("Grado");
//         setSelectEspecialidad("Especialidad");
//     }
//     return (
//         <main className="window-content">
//             <h2>Inserte la informacion del paciente</h2>
//             <form action="" id="form-nuevo-caso" onSubmit={handleSubmit}>
//                 <CustomSelect
//                     name="division"
//                     label="Division"
//                     arrayOptionsSelect={extractDivisiones(divisiones_militatees)}
//                     onChange={(e) => handleCustomSelect(e, setSelectDivision)}
//                     value={selectDivision}
//                 />
//                 <CustomSelect
//                     name="unidad"
//                     label="Unidad"
//                     arrayOptionsSelect={extractPorUnidades(
//                         divisiones_militatees,
//                         selectDivision
//                     )}
//                     onChange={(e) => handleCustomSelect(e, setSelectUnidad)}
//                     value={selectUnidad}
//                 />
//                 <CustomSelect
//                     name="grado"
//                     label="Grado"
//                     arrayOptionsSelect={grados}
//                     onChange={(e) => handleCustomSelect(e, setSelectGrado)}
//                     value={selectGrado}
//                 />
//                 <CustomInput
//                     name="elon"
//                     type="text"
//                     placeholder="Elon"
//                     required
//                     onChange={handleChange}
//                     value={infPaciente.elon}
//                 />
//                 <CustomInput
//                     name="nombresApellidos"
//                     type="text"
//                     placeholder="Nombre del paciente"
//                     required
//                     onChange={handleChange}
//                     value={infPaciente.nombresApellidos}
//                 />
//                 <CustomInput
//                     name="diagnosticoDeIngreso"
//                     type="text"
//                     placeholder="Diagnostico de Ingreso"
//                     required
//                     onChange={handleChange}
//                     value={infPaciente.diagnosticoDeIngreso}
//                 />
//                 {/* //centroHospitalario */}
//                 <CustomInput
//                     name="centroHospitalario"
//                     type="text"
//                     placeholder="Centro Hospitalario"
//                     required
//                     onChange={handleChange}
//                     value={infPaciente.centroHospitalario}
//                 />
//                 {/* //fecha de Ingreso */}
//                 <CustomInput
//                     name="fechaDeIngreso"
//                     type="date"
//                     placeholder="Fecha de Ingreso"
//                     required
//                     onChange={handleChange}
//                     value={infPaciente.fechaDeIngreso}
//                 />
//                 {/* //situacion actual */}
//                 <CustomInput
//                     name="situacionActual"
//                     type="text"
//                     placeholder="Situacion Actual"
//                     required
//                     onChange={handleChange}
//                     value={infPaciente.situacionActual}
//                 />
//                 {/* //especialidad */}
//                 <CustomSelect
//                     name="especialidad"
//                     label="Especialidad"
//                     arrayOptionsSelect={especialidades}
//                     onChange={(e) => handleCustomSelect(e, setSelectEspecialidad)}
//                     value={selectEspecialidad}
//                 />
//                 {/* //observaciones */}
//                 <CustomInput
//                     name="observaciones"
//                     label="Observaciones"
//                     type="text"
//                     placeholder="Observaciones"
//                     required
//                     onChange={handleChange}
//                     value={infPaciente.observaciones}
//                 />
//                 {/* {imageUrl && <img src={imageUrl} alt="Imagen subida" />} */}
//                 <CustomButton content="Realizar Diagnosticos" type="submit" />
//             </form>
//         </main>
//     );
// };

// export default NuevoPaciente;
