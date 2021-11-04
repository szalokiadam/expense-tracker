import style from "../resources/scss/Balance.module.scss";
import { useContext } from "react";
import { GlobalTransactions } from "./_globalContext";

export default function Balance() {
  const { transactions } = useContext(GlobalTransactions);
  const total = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  return (
    <section className={style.total}>
      <p className="section-title">Total balance:</p>
      <p className={style.total__amount}>{total}</p>
    </section>
  );
}
