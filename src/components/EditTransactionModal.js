import Modal from "react-modal";
import EditTransaction from "./EditTransaction";
// REDUX
import { connect } from "react-redux";
import { toggleTransactionModal } from "../actions";

function EditTransactionModal({ toggleModal, open, edit }) {
  function toggleOpener() {
    toggleModal({ open: false });
  }
  return (
    <Modal
      // closeTimeoutMS={500}
      isOpen={open}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={toggleOpener}
      className="NewItem-Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(238, 238, 238, 0.7)",
        },
      }}
    >
      <EditTransaction edit={edit} />
    </Modal>
  );
}
const mapStateToProps = (state) => {
  return {
    transactionModal: state.transactionModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (opener) => dispatch(toggleTransactionModal(opener)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTransactionModal);
