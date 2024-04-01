import PropTypes from "prop-types";
import Row from "./Row";

const CustomTableRow = ({ users, bodyData,actualizarEstado  }) => {
  const keys = Object.keys(bodyData[0]);
  return (
    <>
      {bodyData.map((user) => (
        <Row user={user} keys={keys} users={users} actualizarEstado={actualizarEstado} />
      ))}
    </>
  );
};

// CustomTableRow.propTypes = {
//   data: PropTypes.array
// };

export default CustomTableRow;
