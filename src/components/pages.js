import React, { useState, useEffect } from "react";

import { loadStore, saveStore } from "./Store";
import "./style.scss";
import Balance from "./Balance";
import Watcher from "./Watcher";
import Transactions from "./Transactions";
import NewTransaction from "./NewTransaction";

export function Home() {
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState(loadStore());

  useEffect(() => {
    let sum = 0;
    let sumIncome = 0;
    let sumExpense = 0;

    transactions.forEach((transaction) => {
      let _amount = transaction.amount;
      sum += _amount;
      if (_amount < 0) {
        sumExpense -= _amount;
      } else {
        sumIncome += _amount;
      }
    });
    setTotal(sum);
    setIncome(sumIncome);
    setExpense(sumExpense);
    saveStore(transactions);
    console.log(transactions);
  }, [transactions]);

  function handleNewItem(data) {
    setTotal(total + data.amount);
    setTransactions((oldValues, newValue) => [...oldValues, data]);
  }
  function handleTransactions(newTransactions) {
    setTransactions(newTransactions);
  }

  return (
    <div className="expense-tracker">
      <Balance total={total} />
      <Watcher income={income} expense={expense} />
      <Transactions
        parentCallback={handleTransactions}
        transactions={transactions}
      />
      <NewTransaction parentCallback={handleNewItem} />
    </div>
  );
}

export function Error404() {
  return (
    <div className="error-404">
      <div>
        <h2>Error 404</h2>
        <p>The page does not exist!</p>
      </div>
    </div>
  );
}
