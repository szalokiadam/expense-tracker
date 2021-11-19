import React, { useEffect } from "react";
import { dateString } from "../Utilities";
import "../resources/scss/TransactionsList.scss";
import { BiChevronRight } from "react-icons/bi";

// REDUX
import { connect } from "react-redux";
import { toggleTransactionModal } from "../actions";

function TransactionsList({
  editable = false,
  filteredTransactions = null,
  maxElements = null,
  transactions,
  toggleModal,
}) {
  let newTransactions = filteredTransactions || transactions;

  newTransactions = maxElements
    ? newTransactions.slice(-maxElements)
    : newTransactions;
  const endElement = React.createRef();

  useEffect(() => {
    endElement.current.scrollIntoView();
  }, [endElement]);

  function toggleOpener(currentTransaction) {
    toggleModal({ open: true, edit: currentTransaction });
  }

  return (
    <>
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
                    title="Edit"
                    className={"trans_show-more"}
                    onClick={() => toggleOpener(transaction)}
                  >
                    <BiChevronRight />
                  </button>
                </>
              )}
            </li>
          );
        })}
        <li className="dummy" ref={endElement}></li>
      </ul>
    </>
  );
}
function mapStateToProps(state) {
  return {
    transactions: state.transactions,
    transactionModal: state.transactionModal,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (opener) => dispatch(toggleTransactionModal(opener)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
