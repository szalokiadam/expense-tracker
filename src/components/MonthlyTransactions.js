import { useContext, useMemo, useState } from "react";
import { dateString } from "../Utilities";
import "../resources/scss/MonthlyTransactions.scss";
import { DateRangeFn } from "./_globalContext";
import TransactionsList from "./TransactionsList";

export default function MonthlyTransactions() {
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
  const today = new Date();
  const [startDate, setStartDate] = useState(dateString(today));
  const [endDate, setEndDate] = useState(dateString(today));
  const maxEnd = dateString(today);

  const { setDateRange } = useContext(DateRangeFn);

  function datePlusDay(_date, number = 0) {
    const date = new Date(_date);
    date.setDate(date.getDate() + number);
    return date.getTime();
  }

  function selectDateRange(event) {
    event.preventDefault();
    const start = new Date(startDate).getTime();
    const end = new Date(datePlusDay(endDate, 1)).getTime();
    console.log(`start: ${startDate}\nend: ${endDate}`);
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
