import { Link } from "react-router-dom";
import "../resources/scss/HeaderFooter.scss";

import Menu from "./Menu";

export function Header() {
  return (
    <header>
      <h1 className="title">
        <Link to="/">Expense Tracker</Link>
      </h1>
      <Menu />
    </header>
  );
}
export function Footer() {
  return <footer></footer>;
}
