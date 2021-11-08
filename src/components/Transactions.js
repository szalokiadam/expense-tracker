import React, { useReducer, useContext } from "react";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import "../resources/scss/Transactions.scss";
import { GlobalTransactions } from "./_globalContext";
import TransactionsList from "./TransactionsList";

const MAX_TRANSACTIONS = 8;

export default function Transactions() {
  const [editable, setEditable] = useReducer((editable) => !editable);
  const maxElements = MAX_TRANSACTIONS;

  function clearAll() {
    setTransactions([]);
    setEditable();
  }
  const { transactions, setTransactions } = useContext(GlobalTransactions);

  return (
    <section className="transactions">
      <div className="transactions__header">
        <p className="section-title">
          Transactions (last {maxElements} elements)
        </p>
        <div className="trans_buttons">
          {transactions.length > 0 &&
            (editable && transactions.length > 0 ? (
              <>
                <button
                  title="Clear All"
                  className="trans_save"
                  onClick={clearAll}
                >
                  Clear All <BiTrash />
                </button>
                <button
                  title="Save"
                  className="trans_save"
                  onClick={setEditable}
                >
                  Save <BiSave />
                </button>
              </>
            ) : (
              <>
                <button
                  title="Edit"
                  className="trans_edit"
                  onClick={setEditable}
                >
                  Edit
                  <BiEdit />
                </button>
              </>
            ))}
        </div>
      </div>
      <TransactionsList editable={editable} maxElements={maxElements} />
    </section>
  );
}
