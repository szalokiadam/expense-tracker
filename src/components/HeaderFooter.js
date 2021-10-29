import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import "./HeaderFooter.scss";

export function Header() {
  return (
    <header>
      <h1>
        <BiDollarCircle />
        Expense Tracker
      </h1>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <p>Copyright: szalokia</p>
    </footer>
  );
}
