import style from "../resources/scss/Balance.module.scss";

// REDUX
import { connect } from "react-redux";

function Balance({ transactions }) {
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

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
  };
}

export default connect(mapStateToProps)(Balance);
