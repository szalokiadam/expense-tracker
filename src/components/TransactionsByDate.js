import { useEffect, useState } from "react";
import { dateString } from "../Utilities";
import "../resources/scss/TransactionsByDate.scss";
import TransactionsList from "./TransactionsList";

// REDUX
import { connect } from "react-redux";

function TransactionsByDate({ transactions }) {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  function handleCallback(tr) {
    setFilteredTransactions([...tr]);
  }

  return (
    <div className="expense-tracker">
      <DateRange transactions={transactions} parentCallback={handleCallback} />
      <section className="transactions">
        <TransactionsList filteredTransactions={filteredTransactions} />
      </section>
    </div>
  );
}
function DateRange({ transactions, parentCallback }) {
  const [firstCall, setFirstCall] = useState(false);
  const today = new Date();
  const [startDate, setStartDate] = useState(dateString(today));
  const [endDate, setEndDate] = useState(dateString(today));
  const maxEnd = dateString(today);

  useEffect(() => {
    if (firstCall) {
      const newTransactions = filteredTransactions();
      parentCallback(newTransactions);
    }
  }, [transactions]);

  function datePlusDay(_date, number = 0) {
    const date = new Date(_date);
    date.setDate(date.getDate() + number);
    return date.getTime();
  }

  function selectDateRange(event) {
    event.preventDefault();
    const newTransactions = filteredTransactions();
    setFirstCall(true);
    parentCallback(newTransactions);
  }

  function filteredTransactions() {
    const start = new Date(startDate).setHours(0, 0, 0, 0);
    const end = new Date(datePlusDay(endDate, 1)).setHours(0, 0, 0, 0);
    return transactions.filter((tr) => {
      return start <= tr.created && tr.created < end;
    });
  }

  return (
    <section className="dateRange">
      <p className="section-title">Select Date Range</p>
      <form onSubmit={selectDateRange}>
        <label>
          <span>Start Date:</span>
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

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
  };
}

export default connect(mapStateToProps)(TransactionsByDate);
