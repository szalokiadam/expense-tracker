import React from "react";
import Balance from "./Balance";
import Watcher from "./Watcher";
import Transactions from "./Transactions";
import NewTransaction from "./NewTransaction";
import "../resources/scss/Home.scss";

export default function Home() {
  return (
    <div className="expense-tracker">
      <Balance />
      <Watcher />
      <Transactions />
      <NewTransaction />
    </div>
  );
}
