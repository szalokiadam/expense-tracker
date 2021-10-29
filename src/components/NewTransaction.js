import { useState } from "react";
import { uniqueNumber } from "../Utilities";
import style from "./NewTransaction.module.scss";

export default function NewTransaction({ parentCallback }) {
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");

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
    parentCallback(data);
  }

  return (
    <section className={style.addNewItem}>
      <p className="section-title">Add new item</p>
      <form onSubmit={addToTransactions}>
        <label>
          <span>Title:</span>
          <input
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
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </label>
        <button type="submit">Add new item</button>
      </form>
    </section>
  );
}
