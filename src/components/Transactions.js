import React, { useReducer, useContext } from "react";
import {
  BiEdit,
  BiListPlus,
  BiSave,
  BiTrash,
  BiTrashAlt,
} from "react-icons/bi";
import style from "../resources/scss/Transactions.module.scss";
import { GlobalTransactions } from "./_globalContext";

export default function Transactions() {
  const [editable, setEditable] = useReducer((editable) => !editable);

  function clearAll() {
    setTransactions([]);
    setEditable();
  }
  const { transactions, setTransactions } = useContext(GlobalTransactions);

  function deleteItem(currentTransaction) {
    const newTransactions = [...transactions].filter(
      (transaction) => transaction !== currentTransaction
    );
    setTransactions([...newTransactions]);
  }
  function openNewTransaction() {}

  return (
    <section className={style.transactions}>
      <div className={style.transactions__header}>
        <p className="section-title">Transactions</p>
        <div className={style.trans_buttons}>
          {transactions.length > 0 &&
            (editable && transactions.length > 0 ? (
              <>
                <button
                  title="Clear All"
                  className={style.trans_save}
                  onClick={clearAll}
                >
                  Clear All <BiTrash />
                </button>
                <button
                  title="Save"
                  className={style.trans_save}
                  onClick={setEditable}
                >
                  Save <BiSave />
                </button>
              </>
            ) : (
              <>
                <button
                  title="Edit"
                  className={style.trans_edit}
                  onClick={setEditable}
                >
                  Edit
                  <BiEdit />
                </button>
                <button
                  title="New"
                  className={style.trans_edit}
                  onClick={openNewTransaction}
                >
                  New
                  <BiListPlus />
                </button>
              </>
            ))}
        </div>
      </div>
      <ul className={style.transactions__list}>
        {transactions.map((transaction) => {
          const date = new Date(transaction.created).toLocaleDateString(
            "en-US"
          );
          return (
            <li
              key={transaction.id}
              className={
                transaction.amount < 0 ? style.negative : style.positive
              }
            >
              <span className={style.trans_date}>{date}</span>
              <span className={style.trans_title}>{transaction.title}</span>
              <span className={style.trans_amount}>{transaction.amount}</span>
              {editable && (
                <>
                  <button
                    className={style.trans_delete}
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
    </section>
  );
}
