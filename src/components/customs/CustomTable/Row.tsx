import { useState } from "react";
import { BiEdit } from "react-icons/bi";
const Row = ({ user, keys, users , actualizarEstado}) => {
  const userCurrent = users.find(
    (userCurrent) => userCurrent.documento === user.documento
  );
  const [isChecked, setIsChecked] = useState(userCurrent.estado);

  console.log("userCurrent", userCurrent.estado);

  return (
    <tr key={user.id}>
      {keys.map((key) =>
        key === "status" ? (
          <div className="estado">
            <input
              type="checkbox"
              className="switch"
              id="checkbox"
              checked={isChecked}
              
                
            />
            <label htmlFor="checkbox" onClick={() => {
                actualizarEstado(userCurrent.documento);
                setIsChecked(!isChecked);
              }}></label>
          </div>
        ) : key === "editar" ? (
          <BiEdit />
        ) : (
          <td key={key}>{user[key]}</td>
        )
      )}
    </tr>
  );
};

export default Row;
