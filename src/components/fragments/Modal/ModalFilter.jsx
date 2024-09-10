import Modal from "./Modal";
import Sidebar from "../Product/Sidebar";

const ModalFilter = ({ isVisible, onClose, onOpenSearch }) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Sidebar onClose={onClose} onOpenSearch={onOpenSearch} />
    </Modal>
  );
};

export default ModalFilter;
