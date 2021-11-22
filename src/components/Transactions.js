import React from "react";
import "../resources/scss/Transactions.scss";
import TransactionsList from "./TransactionsList";

export default function Transactions() {
  const maxTransactions = 5;

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
