import React, { useReducer } from "react";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import "../resources/scss/Transactions.scss";
import TransactionsList from "./TransactionsList";
// REDUX
import { connect } from "react-redux";
import { deleteTransactions } from "../actions";

function Transactions({ transactions, deleteAll }) {
  const [editable, setEditable] = useReducer((editable) => !editable);
  const maxTransactions = 8;
  function clearAll() {
    deleteAll();
  }

  return (
    <section className="transactions">
      <div className="transactions__header">
        <p className="section-title">
          Transactions (last {maxTransactions} elements)
        </p>
        <div className="trans_buttons">
          {transactions.length > 0 &&
            (editable && transactions.length > 0 ? (
              <>
                <button
                  title="Clear All"
                  className="trans_save"
                  onClick={clearAll}
                >
                  Clear All <BiTrash />
                </button>
                <button
                  title="Save"
                  className="trans_save"
                  onClick={setEditable}
                >
                  Save <BiSave />
                </button>
              </>
            ) : (
              <>
                <button
                  title="Edit"
                  className="trans_edit"
                  onClick={setEditable}
                >
                  Edit
                  <BiEdit />
                </button>
              </>
            ))}
        </div>
      </div>
      <TransactionsList editable={editable} maxElements={maxTransactions} />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    maxTransactions: state.maxTransactions,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteAll: (tr) => dispatch(deleteTransactions(tr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
