import "./Modal.scss";

const Modal = ({
  header,
  content,
  footer,
  onClose,
}: {
  header: string;
  content: string;
  footer: string;
  onClose: () => void;
}) => {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-header">
          <span className="close-modal-btn" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "This is the header"}</h2>
        </div>

        <div className="modal-content">
          <p>{content ? content : "This is the content area"}</p>
        </div>

        <div className="footer">
          <p>{footer ? footer : "This is the footer section"}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
