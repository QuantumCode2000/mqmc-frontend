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

// import Row from "./Row";

// const CustomTableRow = ({
//   users,
//   bodyData,
//   actualizarEstado,
//   openModalEdit,
//   setOpenModalEdit,
//   editedUserInformation,
//   setEditedUserInformation,
// }) => {
//   const keys = Object.keys(bodyData[0] || {}); // Asegúrate de que bodyData[0] exista.

//   return (
//     <tbody>
//       {bodyData.map((user) => (
//         <Row
//           key={user.id || user.ci} // Usar un identificador único del usuario
//           user={user}
//           keys={keys}
//           users={users}
//           actualizarEstado={actualizarEstado}
//           openModalEdit={openModalEdit}
//           setOpenModalEdit={setOpenModalEdit}
//           editedUserInformation={editedUserInformation}
//           setEditedUserInformation={setEditedUserInformation}
//         />
//       ))}
//     </tbody>
//   );
// };

// export default CustomTableRow;
