import React from "react";
import "../resources/scss/Transactions.scss";
import TransactionsList from "./TransactionsList";
// REDUX
import { connect } from "react-redux";

function Transactions({ maxTransactions }) {
  return (
    <section className="transactions">
      <div className="transactions__header">
        <p className="section-title">
          Transactions (last {maxTransactions} elements)
        </p>
      </div>
      <TransactionsList maxElements={maxTransactions} />
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    maxTransactions: state.settings?.maxTransactions,
  };
};

export default connect(mapStateToProps)(Transactions);
