import { uniqueNumber } from "../Utilities";
import { dateTimeString } from "../Utilities";

// REDUX
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  newTransaction,
  toggleTransactionModal,
  updateTransaction,
  deleteTransaction,
} from "../actions";

function EditTransaction({
  newTransactionAction,
  edit,
  toggleModal,
  deleteTransaction,
  updateTransaction,
}) {
  const today = new Date();
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");
  let [date, setDate] = useState(dateTimeString(today).join("T"));

  useEffect(() => {
    if (edit) {
      const created = new Date(edit.created);

      setTitle(edit.title);
      setAmount(edit.amount);
      setDate(dateTimeString(created).join("T"));
    }
  }, [edit]);

  function setItem(event) {
    itemActions(event, newTransactionAction);
  }

  function updateItem(event) {
    itemActions(event, updateTransaction, edit.id);
  }

  function itemActions(event, callback, id = false) {
    event.preventDefault();
    const data = getData(id);
    if (data) {
      callback(data);
      toggleModal({ open: false });
    }
  }

  function deleteItem() {
    deleteTransaction(edit);
    toggleModal({ open: false });
  }

  function getData(id) {
    if (title && amount && date) {
      const _amount = parseInt(amount, 10);
      const _date = new Date(date).getTime();
      return {
        id: id || uniqueNumber(),
        title,
        amount: _amount,
        created: _date,
      };
    }
  }

  return (
    <>
      <p className="section-title">{edit ? "Edit item" : "Add new item"}</p>
      <form onSubmit={edit ? updateItem : setItem}>
        <label>
          <span>Date:</span>
          <input
            autoFocus={false}
            placeholder="Date"
            name="title"
            type="datetime-local"
            value={date}
            max={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Title:</span>
          <input
            autoFocus={!edit}
            placeholder="Item name"
            name="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Amount:</span>
          <input
            placeholder="Item cost"
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            min={-999999}
            max={999999}
          />
        </label>
        <div className="buttons-container">
          {edit ? (
            <>
              <button className="primary" type="submit">
                Save
              </button>

              <button className="neutral" type="button" onClick={deleteItem}>
                Delete
              </button>
            </>
          ) : (
            <button className="primary" type="submit">
              Add to list
            </button>
          )}
        </div>
      </form>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (opener) => dispatch(toggleTransactionModal(opener)),
    newTransactionAction: (tr) => dispatch(newTransaction(tr)),
    updateTransaction: (tr) => dispatch(updateTransaction(tr)),
    deleteTransaction: (tr) => dispatch(deleteTransaction(tr)),
  };
};

export default connect(null, mapDispatchToProps)(EditTransaction);
