import React, { useEffect, useReducer, useContext } from "react";
import { BiDollarCircle, BiUser as ProfileIcon } from "react-icons/bi";
import "./HeaderFooter.scss";
import Login from "./Login";
import { LoggedIn } from "./_globalContext";

export function Header() {
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
          <span className="button-icon">
            <ProfileIcon />
          </span>
          {login ? "Login" : "Profile"}
        </button>
        {loginOpener && <Login />}
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <p>Copyright: szalokia [{process.env.REACT_APP_VERSION}]</p>
    </footer>
  );
}
