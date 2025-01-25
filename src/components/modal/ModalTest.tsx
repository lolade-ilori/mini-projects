import React, { useState } from "react";
import Modal from "./Modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <button onClick={handleModalToggle}>Toggle Modal</button>
      {showModal && <Modal />}
    </div>
  );
};

export default ModalTest;
