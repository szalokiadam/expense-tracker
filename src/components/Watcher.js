import React, { useContext } from "react";
import { GlobalTransactions } from "./_globalContext";
import "./Watcher.scss";

export default function Watcher() {
  const { transactions } = useContext(GlobalTransactions);

  const income = transactions
    .filter((tr) => tr.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);
  const expense = transactions
    .filter((tr) => tr.amount < 0)
    .reduce((total, transaction) => total - transaction.amount, 0);

  return (
    <section className="watcher">
      <div className="watcher__container">
        <div>
          <span>Income</span>
          <span className="amount income">{income}</span>
        </div>
        <div>
          <span>Expense</span>
          <span className="amount expense">{expense}</span>
        </div>
      </div>
    </section>
  );
}
