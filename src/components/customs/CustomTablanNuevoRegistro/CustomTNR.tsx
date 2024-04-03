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
  setEditedUserInformation
  
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
    const filtered = users.filter((user) => user.documento === ci);
    setBodyData(filtered);
  };

  const updateUserState = (documento) => {
    let userList = JSON.parse(window.localStorage.getItem("user_list") || "[]");
    userList = userList.map((user) => {
      if (user.documento === documento) {
        return { ...user, estado: !user.estado };
      }
      return user;
    });

    window.localStorage.setItem("user_list", JSON.stringify(userList));
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
              : JSON.parse(window.localStorage.getItem("user_list") || "[]")
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
