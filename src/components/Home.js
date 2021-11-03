import React, { useState, useEffect, useMemo } from "react";

import { loadStore, saveStore } from "./Store";
import "./style.scss";
import Balance from "./Balance";
import Watcher from "./Watcher";
import Transactions from "./Transactions";
import NewTransaction from "./NewTransaction";
import { GlobalTransactions } from "./_globalContext";

export default function Home() {
  const storeName = loadStore("__login")[0]?.storeName;

  const [transactions, setTransactions] = useState(loadStore(storeName));
  const transactionValues = useMemo(
    () => ({ transactions, setTransactions }),
    [transactions]
  );

  useEffect(() => {
    saveStore(storeName, transactions);
    console.log(transactions);
  }, [transactions]);

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
