import "../resources/scss/Range.scss";

export default function Range({ expense = 0, income = 0 }) {
  const incomeWidth = Math.floor((income / (expense + income)) * 100);
  return (
    <section className="balance-range">
      {!isNaN(incomeWidth) ? (
        <>
          <div className="range-container">
            <span
              className="range-income"
              style={{ width: `${incomeWidth}%` }}
            ></span>
            <span className="range-expense"></span>
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
