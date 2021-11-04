import React, { useContext } from "react";
import { GlobalTransactions } from "./_globalContext";
import "./Watcher.scss";

export default function Watcher() {
  const { transactions } = useContext(GlobalTransactions);

  function getIncomeExpense() {
    let income = 0;
    let expense = 0;
    transactions.forEach((tr) => {
      if (tr.amount > 0) {
        income += tr.amount;
      } else {
        expense -= tr.amount;
      }
    });
    return [income, expense];
  }

  const [income, expense] = getIncomeExpense();

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
