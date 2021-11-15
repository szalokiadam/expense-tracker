import React from "react";
import "../resources/scss/Watcher.scss";

// REDUX
import { connect } from "react-redux";

function Watcher({ transactions }) {
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

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
  };
}

export default connect(mapStateToProps)(Watcher);
