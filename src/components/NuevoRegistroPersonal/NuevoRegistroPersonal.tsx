import { useState } from "react";
import Modal from "./Modal";
import ModalEdit from "./ModalEdit";
import "./NuevoRegistroPersonal.styles.css";
import CustomButton from "../customs/CustomButton/CustomButton";

function NuevoRegistroPersonal() {
  const [openModal, setOpenModal] = useState(false);
  

  return (
    <>
      <CustomButton
        content='Nuevo Registro'
        onClick={() => setOpenModal(true)}
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      {/* <ModalEdit open={openModal} onClose={() => setOpenModal(false)} /> */}
    </>
  );
}

export default NuevoRegistroPersonal;
