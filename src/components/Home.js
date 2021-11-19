import React from "react";
import Watcher from "./Watcher";
import Transactions from "./Transactions";
import NewTransaction from "./NewTransaction";
import "../resources/scss/Home.scss";

export default function Home() {
  return (
    <div className="expense-tracker">
      <Watcher />
      <Transactions />
      <NewTransaction />
    </div>
  );
}
