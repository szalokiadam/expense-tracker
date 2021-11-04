import React, { useState, useEffect, useMemo } from "react";

import { loadStore, saveStore } from "./Store";
import Balance from "./Balance";
import Watcher from "./Watcher";
import Transactions from "./Transactions";
import NewTransaction from "./NewTransaction";
import { GlobalTransactions } from "./_globalContext";
import "./Home.scss";

export default function Home() {
  const userName = loadStore("__login")[0]?.userName;

  const [transactions, setTransactions] = useState(loadStore(userName));
  const transactionValues = useMemo(
    () => ({ transactions, setTransactions }),
    [transactions]
  );

  useEffect(() => {
    saveStore(userName, transactions);
  }, [transactions, userName]);

  return (
    <div className="expense-tracker">
      <GlobalTransactions.Provider value={transactionValues}>
        <Balance />
        <Watcher />
        <Transactions />
        <NewTransaction />
      </GlobalTransactions.Provider>
    </div>
  );
}
