import React, { useEffect, useReducer, useContext, useMemo } from "react";
import { BiUser as ProfileIcon } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../resources/scss/HeaderFooter.scss";
import Login from "./Login";
import { LoggedIn } from "./_globalContext";
import { MenuOpener } from "./_globalContext";

export function Header() {
  const { login } = useContext(LoggedIn);

  const [menuOpened, setMenuToggle] = useReducer((opener) => !opener, true);
  const menuOpenerValues = useMemo(
    () => ({ menuOpened, setMenuToggle }),
    [menuOpened]
  );

  useEffect(() => {
    setMenuToggle();
  }, [login]);

  return (
    <header>
      <h1 className="title">
        <Link to="/">Expense Tracker</Link>
      </h1>
      <div className="login-container">
        {login && <button className="register-button neutral">Register</button>}
        <button className="login-button primary" onClick={setMenuToggle}>
          <span className="button-icon">
            <ProfileIcon />
          </span>
          {login ? "Login" : "Profile"}
        </button>
        <MenuOpener.Provider value={menuOpenerValues}>
          {menuOpened && <Login />}
        </MenuOpener.Provider>
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
