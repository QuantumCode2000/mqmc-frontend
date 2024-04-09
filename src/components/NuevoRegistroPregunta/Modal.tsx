const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay ">
      <div className="modal-nuevo-registro">
        
      </div>
    </div>
  );
};

export default Modal;
