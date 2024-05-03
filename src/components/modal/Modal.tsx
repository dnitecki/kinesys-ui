import "./Modal.scss";

const Modal = ({ setShowClientModal }: any) => {
  const closeModal = () => {
    setShowClientModal(false);
  };
  return (
    <>
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-content-container">
          <h1>Modal</h1>
        </div>
      </div>
    </>
  );
};

export default Modal;
