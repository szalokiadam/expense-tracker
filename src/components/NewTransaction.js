import { useState, useContext, useReducer } from "react";
import Modal from "react-modal";
import { uniqueNumber } from "../Utilities";
import style from "../resources/scss/NewTransaction.module.scss";
import { GlobalTransactions } from "./_globalContext";

export default function NewTransaction() {
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");

  const { transactions, setTransactions } = useContext(GlobalTransactions);
  const [isOpen, toggleOpener] = useReducer((open) => !open, false);

  function addToTransactions(event) {
    event.preventDefault();
    if (!title || !amount) return;
    const _amount = parseInt(amount, 10);
    const data = {
      id: uniqueNumber(),
      title,
      amount: _amount,
      created: new Date().getTime(),
    };

    setTitle("");
    setAmount("");
    setTransactions([...transactions, data]);
    toggleOpener();
  }

  return (
    <section className={style.addNewItem}>
      <button className="primary" type="submit" onClick={toggleOpener}>
        Add new item
      </button>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={toggleOpener}
        className={style.addNewItem}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(238, 238, 238, 0.7)",
          },
          content: {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "#282828",
            borderRadius: "5px",
            border: "1px solid #424242",
            outline: "none",
            padding: "20px",
            width: "calc(100% - 30px)",
            maxWidth: "400px",
            boxSizing: "border-box",
          },
        }}
      >
        <p className="section-title">Add new item</p>
        <form onSubmit={addToTransactions}>
          <label>
            <span>Title:</span>
            <input
              autoFocus={true}
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
            />
          </label>
          <button className="primary" type="submit">
            Add to list
          </button>
        </form>
      </Modal>
    </section>
  );
}
