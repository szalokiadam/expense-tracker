import { toggleTransactionModal } from "../actions";
import "../resources/scss/NewTransaction.scss";
// REDUX
import { connect } from "react-redux";
import { useEffect } from "react";
import EditTransactionModal from "./EditTransactionModal";

function NewTransaction({ transactionModal, toggleModal }) {
  function toggleOpener() {
    toggleModal({ open: true, edit: false });
  }

  useEffect(() => {
    toggleModal({ open: false });
  }, [toggleModal]);

  return (
    <section className="addNewItem">
      <button className="primary" type="submit" onClick={toggleOpener}>
        Add new item
      </button>
      <EditTransactionModal
        open={transactionModal.open}
        edit={transactionModal.edit}
      />
    </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
