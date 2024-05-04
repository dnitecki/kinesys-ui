import "./Modal.scss";

const Modal = ({ setShowModal, modalContent }: any) => {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-content-container">
          <h1>{modalContent}</h1>
        </div>
      </div>
    </>
  );
};

export default Modal;
