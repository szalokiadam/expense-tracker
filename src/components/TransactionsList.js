import React, { useContext, useEffect } from "react";
import { dateString } from "../Utilities";
import { GlobalTransactions } from "./_globalContext";
import "../resources/scss/TransactionsList.scss";
import { BiTrashAlt } from "react-icons/bi";

export default function TransactionsList({
  editable = false,
  filteredTransactions = null,
  maxElements = null,
}) {
  const { transactions, setTransactions } = useContext(GlobalTransactions);
  let newTransactions = filteredTransactions || transactions;
  newTransactions = maxElements
    ? newTransactions.slice(
        newTransactions.length - maxElements,
        newTransactions.length
      )
    : newTransactions;
  const endElement = React.createRef();

  useEffect(() => {
    endElement.current.scrollIntoView();
  }, [endElement]);

  function deleteItem(currentTransaction) {
    const newTransactions = [...transactions].filter(
      (transaction) => transaction !== currentTransaction
    );
    setTransactions([...newTransactions]);
  }

  return (
    <ul className="transactions__list">
      {newTransactions.map((transaction) => {
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
      <li className="dummy" ref={endElement}></li>
    </ul>
  );
}
