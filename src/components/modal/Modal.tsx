import { ModalProps } from "../../types/ModalTypes";
import "./Modal.scss";
import { formMapper } from "../../mappers/formMapper";

const Modal: React.FC<ModalProps> = ({ ContentType, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  const ModalContent = formMapper[ContentType];

  return (
    <>
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-content-container">
          <ModalContent />
        </div>
      </div>
    </>
  );
};

export default Modal;
