import React, { useEffect, useReducer, useContext } from "react";
import { BiDollarCircle } from "react-icons/bi";
import "./HeaderFooter.scss";
import Login from "./Login";
import { loadStore } from "./Store";
import { LoggedIn } from "./_globalContext";

export function Header() {
  const storeName = loadStore("__login")[0]?.storeName;
  const [loginOpener, toggleOpener] = useReducer((opener) => !opener, true);
  const { login } = useContext(LoggedIn);

  useEffect(() => {
    toggleOpener();
  }, [login]);

  return (
    <header>
      <h1>
        <BiDollarCircle />
        Expense Tracker
      </h1>
      <div className="login-container">
        <button className="login-button" onClick={toggleOpener}>
          {storeName ? "Profile" : "Login"}
        </button>
        {loginOpener && <Login />}
      </div>
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
