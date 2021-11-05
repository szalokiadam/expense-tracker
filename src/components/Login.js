import { useState, useContext } from "react";
import { loadStore, saveStore } from "./Store";
import { checkPermission } from "./permissions";
import "../resources/scss/Login.scss";
import { LoggedIn } from "./_globalContext";
import { BiLogOut, BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MenuOpener } from "./_globalContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const { login, setLogin } = useContext(LoggedIn);
  const { setMenuToggle } = useContext(MenuOpener);

  function submitLogin(event) {
    event.preventDefault();
    const isValid = checkPermission({ username, password });
    if (isValid) {
      setValid(true);
      setLogin(false);
      saveStore("__login", [{ userName: username }]);
    } else {
      setValid(false);
    }
  }

  const submitLogout = () => {
    saveStore("__login", []);
    setLogin(true);
  };
  function loginPage() {
    return (
      <div className="loginInner loginBox">
        <h2>Login</h2>
        <span className="error">{!valid && "Username/password invalid"}</span>
        <form onSubmit={submitLogin}>
          <label>
            <span>User name:</span>
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setValid(true);
              }}
              autoFocus={true}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setValid(true);
              }}
            />
          </label>
          <button type="submit" className="primary">
            Login
          </button>
        </form>
      </div>
    );
  }

  function profilePage() {
    const userName = loadStore("__login")[0]?.userName;

    return (
      <div className="loginInner">
        <h2>Profile</h2>
        <p>User: {userName}</p>
        <div className="buttons">
          <Link to="/monthly-transactions" onClick={setMenuToggle}>
            <button type="button" className="neutral">
              <span className="button-icon">
                <BiTimeFive />
              </span>
              Transactions by month
            </button>
          </Link>
          <button type="button" onClick={submitLogout} className="neutral">
            <span className="button-icon">
              <BiLogOut style={{ transform: "rotate(180deg)" }} />
            </span>
            Logout
          </button>
        </div>
      </div>
    );
  }
  return !login ? profilePage() : loginPage();
}
