import PropTypes from "prop-types";
import CustomTableRow from "./CustomTableRow";
import "./CustomTable.styles.css";
const CustomTable = ({ headerData, bodyData, actualizarEstado ,
openModalEdit, setOpenModalEdit
}) => {
  const headers = Object.values(headerData);
  const newbodyData = bodyData.map((user) => {
    const newUsers = {};
    Object.keys(headerData).forEach((key) => {
      newUsers[key] = user[key] !== undefined ? user[key] : "";
    });
    return newUsers;
  });
  return (
    <div className="outer-wrapper">
      <div className="table-wrapper">
        <table>
          <thead className="table-head">
            {headers.map((header, index) => (
              <td key={index}>{header}</td>
            ))}
          </thead>

          <tbody className="table-body">
            <CustomTableRow
              bodyData={newbodyData}
              users={bodyData}
              actualizarEstado={actualizarEstado}
              openModalEdit={openModalEdit}
              setOpenModalEdit={setOpenModalEdit}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

CustomTable.propTypes = {
  headerData: PropTypes.object,
  bodyData: PropTypes.array,
};

export default CustomTable;
