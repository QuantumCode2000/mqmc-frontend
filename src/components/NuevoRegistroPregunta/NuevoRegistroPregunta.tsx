// import { CustomButton } from "../customs/exports";
// import { useState } from "react";
// import Modal from "./Modal.tsx";
// const NuevoRegistroPregunta = () => {
//     const [openModal, setOpenModal] = useState(false);
//   return (
//     <>
//       <CustomButton
//         content="Nuevo Registro"
//         onClick={() => setOpenModal(true)}
//       />
//       <Modal open={openModal} onClose={() => setOpenModal(false)} />
//     </>
//   );
// };

// export default NuevoRegistroPregunta;
import { CustomButton } from "../customs/exports";
import { useState } from "react";
import Modal from "./Modal.tsx";

const NuevoRegistroPregunta = ({ onAddQuestion }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <CustomButton
        content="Nuevo Registro"
        onClick={() => setOpenModal(true)}
      />
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSaved={onAddQuestion}
      />
    </>
  );
};

export default NuevoRegistroPregunta;
