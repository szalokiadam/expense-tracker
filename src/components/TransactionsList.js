import React, { useContext, useEffect } from "react";
import { dateString } from "../Utilities";
import { GlobalTransactions } from "./_globalContext";
import "../resources/scss/TransactionsList.scss";
import { BiTrashAlt } from "react-icons/bi";

export default function TransactionsList({ editable = false, filterFn }) {
  const { transactions, setTransactions } = useContext(GlobalTransactions);

  const newTransactions = filterFn
    ? transactions.filter(eval(filterFn))
    : transactions;
  function deleteItem(currentTransaction) {
    const newTransactions = [...transactions].filter(
      (transaction) => transaction !== currentTransaction
    );
    setTransactions([...newTransactions]);
  }

  return (
    <ul className="transactions__list">
      {filterFn !== null &&
        newTransactions.map((transaction) => {
          const date = dateString(transaction.created);
          return (
            <li
              key={transaction.id}
              className={transaction.amount < 0 ? "negative" : "positive"}
            >
              <span className={"trans_date"}>{date}</span>
              <span className={"trans_title"}>{transaction.title}</span>
              <span className={"trans_amount"}>{transaction.amount}</span>
              {editable && (
                <>
                  <button
                    className={"trans_delete"}
                    onClick={() => deleteItem(transaction)}
                  >
                    Delete <BiTrashAlt />
                  </button>
                </>
              )}
            </li>
          );
        })}
    </ul>
  );
}
