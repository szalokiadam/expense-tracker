import "../resources/scss/Range.scss";

export default function Range({ expense = 0, income = 0 }) {
  const incomeWidth = Math.floor((income / (expense + income)) * 100) || 0;
  //   const expenseWidth = Math.floor((expense / (expense + income)) * 100);
  console.log("income:", income);
  console.log("incomeWidth:", incomeWidth);
  return (
    <section className="balance-range">
      {incomeWidth ? (
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
