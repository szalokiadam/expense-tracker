import React, { useReducer } from "react";
import { BiEdit, BiSave, BiTrash, BiTrashAlt } from "react-icons/bi";
import style from "./Transactions.module.scss";

export default function Transactions({ transactions, parentCallback }) {
  const [editable, setEditable] = useReducer((editable) => !editable);

  function clearAll() {
    parentCallback([]);
    setEditable();
  }
  function deleteItem(currentTransaction) {
    const newTransactions = [...transactions].filter(
      (transaction) => transaction !== currentTransaction
    );
    parentCallback([...newTransactions]);
  }

  return (
    <section className={style.transactions}>
      <div className={style.transactions__header}>
        <p className="section-title">Transactions</p>
        {transactions.length > 0 &&
          (editable && transactions.length > 0 ? (
            <div className={style.trans_buttons}>
              <button className={style.trans_save} onClick={clearAll}>
                Clear All <BiTrash />
              </button>
              <button className={style.trans_save} onClick={setEditable}>
                Save <BiSave />
              </button>
            </div>
          ) : (
            <button className={style.trans_edit} onClick={setEditable}>
              Edit
              <BiEdit />
            </button>
          ))}
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
