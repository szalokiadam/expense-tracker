import { toggleTransactionModal } from "../actions";
import "../resources/scss/NewTransaction.scss";
// REDUX
import { connect } from "react-redux";

function NewTransaction({ toggleModal }) {
  function toggleOpener() {
    toggleModal({ open: true, edit: false });
  }

  return (
    <section className="addNewItem">
      <button className="primary" type="submit" onClick={toggleOpener}>
        Add new item
      </button>
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
