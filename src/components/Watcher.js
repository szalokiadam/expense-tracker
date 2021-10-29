import "./Watcher.scss";

export default function Watcher({ income, expense }) {
  return (
    <section className="watcher">
      <div className="watcher__container">
        <div>
          <span>Income</span>
          <span className="amount income">{income}</span>
        </div>
        <div>
          <span>Expense</span>
          <span className="amount expense">{expense}</span>
        </div>
      </div>
    </section>
  );
}
