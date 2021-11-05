import { useContext, useMemo, useState } from "react";
import { GlobalTransactions } from "./_globalContext";
import { dateString } from "../Utilities";
import "../resources/scss/MonthlyTransactions.scss";
import { DateRangeFn } from "./_globalContext";
import TransactionsList from "./TransactionsList";

export default function MonthlyTransactions() {
  const { transactions } = useContext(GlobalTransactions);

  const [dateRange, setDateRange] = useState(null);

  const dateRangeValue = useMemo(
    () => ({ dateRange, setDateRange }),
    [dateRange]
  );

  return (
    <div className="expense-tracker">
      <DateRangeFn.Provider value={dateRangeValue}>
        <DateRange />
        <section className="transactions">
          <TransactionsList filterFn={dateRange} />
        </section>
      </DateRangeFn.Provider>
    </div>
  );
}
function DateRange() {
  const [startDate, setStartDate] = useState(dateString(todayPlusDay()));
  const [endDate, setEndDate] = useState(dateString(todayPlusDay(1)));
  const maxEnd = dateString(todayPlusDay(1));

  const { setDateRange } = useContext(DateRangeFn);

  function todayPlusDay(number = 0) {
    const date = new Date();
    date.setDate(date.getDate() + number);
    return dateString(date.getTime());
  }

  function selectDateRange(event) {
    event.preventDefault();
    console.log(`start: ${startDate}\nend: ${endDate}`);
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    setDateRange(`(tr) => ${start} < tr.created && tr.created < ${end}`);
  }

  return (
    <section className="dateRange">
      <p>Select Date Range</p>
      <form onSubmit={selectDateRange}>
        <label>
          <span>Star Date:</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            max={endDate}
          />
        </label>
        <label>
          <span>End Date:</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={startDate}
            max={maxEnd}
          />
        </label>
        <button className="primary" type="submit">
          Select Date
        </button>
      </form>
    </section>
  );
}
