import style from "./Balance.module.scss";

export default function Balance({ total }) {
  return (
    <section className={style.total}>
      <p className="section-title">Total balance:</p>
      <p className={style.total__amount}>{total}</p>
    </section>
  );
}
