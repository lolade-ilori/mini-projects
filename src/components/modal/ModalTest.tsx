import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.scss";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div className="modal-page">
      <button onClick={handleModalToggle}>Toggle Modal</button>
      {showModal && <Modal header="" content="" footer="" onClose={onClose} />}
    </div>
  );
};

export default ModalTest;
