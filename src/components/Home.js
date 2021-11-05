import React, { useEffect, useContext } from "react";

import { loadStore, saveStore } from "./Store";
import Balance from "./Balance";
import Watcher from "./Watcher";
import Transactions from "./Transactions";
import NewTransaction from "./NewTransaction";
import { GlobalTransactions } from "./_globalContext";
import "../resources/scss/Home.scss";

export default function Home() {
  const userName = loadStore("__login")[0]?.userName;

  const { transactions } = useContext(GlobalTransactions);

  useEffect(() => {
    saveStore(userName, transactions);
  }, [transactions, userName]);

  return (
    <div className="expense-tracker">
      <Balance />
      <Watcher />
      <Transactions />
      <NewTransaction />
    </div>
  );
}
