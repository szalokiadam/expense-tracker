import React, { useEffect } from "react";
import { dateString } from "../Utilities";
import "../resources/scss/TransactionsList.scss";
import { BiTrashAlt } from "react-icons/bi";

// REDUX
import { connect } from "react-redux";
import { deleteTransaction } from "../actions";

function TransactionsList({
  editable = false,
  filteredTransactions = null,
  maxElements = null,
  transactions,
  deleteTransaction,
}) {
  let newTransactions = filteredTransactions || transactions;

  newTransactions = maxElements
    ? newTransactions.slice(-maxElements)
    : newTransactions;
  const endElement = React.createRef();

  useEffect(() => {
    endElement.current.scrollIntoView();
  }, [endElement]);

  function deleteItem(currentTransaction) {
    deleteTransaction(currentTransaction);
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
            <div>
              <span className={"trans_date"}>{date}</span>
              <span className={"trans_title"}>{transaction.title}</span>
            </div>
            <span className={"trans_amount"}>{transaction.amount}</span>
            {editable && (
              <>
                <button
                  title="Delete"
                  className={"trans_delete"}
                  onClick={() => deleteItem(transaction)}
                >
                  <BiTrashAlt />
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
function mapStateToProps(state) {
  return {
    transactions: state.transactions,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTransaction: (tr) => dispatch(deleteTransaction(tr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
