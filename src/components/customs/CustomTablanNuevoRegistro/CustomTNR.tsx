import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import CustomTable from "../CustomTable/CustomTable";
import "./CustomTNR.styles.css";
import { useState } from "react";
const CustomTNR = ({
  headers,
  users,
  placeholder,
  openModalEdit,
  setOpenModalEdit,
  editedUserInformation,
  updatedUserInformation,
  setEditedUserInformation,
}) => {
  const [ci, setCI] = useState("");
  const [bodyData, setBodyData] = useState(users);
  const handleCIChange = (event) => {
    setCI(event.target.value);
    if (event.target.value === "") {
      setBodyData(users);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const filtered = users.filter((user) => user.ci === ci);
    setBodyData(filtered);
  };

  const updateUserState = async (documento, currentStatus) => {
    // const userToUpdate = users.find((user) => user.documento === documento);
    // if (!userToUpdate) return;
    console.log(documento, currentStatus);

    // const updatedStatus = !userToUpdate.estado;

    try {
      const token = window.localStorage.getItem("my-auth-app");
      const response = await fetch(
        `http://localhost:3000/api/v1/users/status/${documento}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: !currentStatus }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update user status");
      }

      // Actualiza el estado en el contexto si la API devuelve éxito
      // const updatedUsers = users.map((user) =>
      // user.documento === documento
      // ? { ...user, estado: updatedStatus }
      // : user,
      // );
      // updateUserList(updatedUsers);
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  return (
    <div className="centerTRN">
      <form
        action=""
        className="search-for__customtnr"
        onSubmit={handleFormSubmit}
      >
        <div className="buscar">
          <CustomInput
            placeholder={placeholder}
            type="number"
            onChange={handleCIChange}
            value={ci}
          />
        </div>
        <div className="boton-buscar">
          <CustomButton content="Buscar" />
        </div>
      </form>
      <div className="tabla">
        <CustomTable
          headerData={headers}
          bodyData={
            bodyData.length > 0
              ? bodyData
              : [{ nombreUsuario: "No hay resultados" }]
          }
          actualizarEstado={updateUserState}
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
          editedUserInformation={editedUserInformation}
          setEditedUserInformation={setEditedUserInformation}
        />
      </div>
    </div>
  );
};

export default CustomTNR;
