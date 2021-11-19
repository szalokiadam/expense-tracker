import React from "react";
import "../resources/scss/Transactions.scss";
import TransactionsList from "./TransactionsList";
// REDUX
import { connect } from "react-redux";
import { deleteTransactions } from "../actions";

function Transactions({ transactions, deleteAll }) {
  const editable = true;
  const maxTransactions = 8;

  return (
    <section className="transactions">
      <div className="transactions__header">
        <p className="section-title">
          Transactions (last {maxTransactions} elements)
        </p>
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
