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
      className="addNewItem"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(238, 238, 238, 0.7)",
        },
        content: {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "#282828",
          borderRadius: "5px",
          border: "1px solid #424242",
          outline: "none",
          padding: "20px",
          width: "calc(100% - 30px)",
          maxWidth: "400px",
          boxSizing: "border-box",
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
