import Row from "./Row";

const CustomTableRow = ({
  users,
  bodyData,
  actualizarEstado,
  openModalEdit,
  setOpenModalEdit,
  editedUserInformation,
  setEditedUserInformation,
}) => {
  const keys = Object.keys(bodyData[0]);
  return (
    <>
      {bodyData.map((user) => (
        <Row
          user={user}
          keys={keys}
          users={users}
          actualizarEstado={actualizarEstado}
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
          editedUserInformation={editedUserInformation}
          setEditedUserInformation={setEditedUserInformation}

        />
      ))}
    </>
  );
};

export default CustomTableRow;
