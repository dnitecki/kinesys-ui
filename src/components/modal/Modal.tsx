import { ModalProps } from "../../types/ModalTypes";
import "./Modal.scss";
import { ModalContentMapper } from "../../mappers/modalContentMapper";
import CloseIcon from "@mui/icons-material/Close";

const Modal: React.FC<ModalProps> = ({ ModalContentType, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  const { Component, headerText } = ModalContentMapper[ModalContentType];

  return (
    <>
      <div className="modal-container">
        <div className="modal-content-container">
          <header className="modal-header">
            <div className="header-title">
              <h2>{headerText}</h2>
            </div>
            <button className="header-close" onClick={closeModal}>
              <CloseIcon />
            </button>
          </header>
          <div className="modal-content">
            <Component onClose={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
