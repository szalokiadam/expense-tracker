import { useState, useContext } from "react";
import { loadStore, saveStore } from "./Store";
import { checkPermission } from "./_permissions";
import "./Login.scss";
import { LoggedIn } from "./_globalContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, setLogin } = useContext(LoggedIn);

  function submitLogin(event) {
    event.preventDefault();
    const isValid = checkPermission({ username, password });
    if (isValid) {
      saveStore("__login", [{ storeName: username }]);
      setLogin(false);
    }
  }

  const submitLogout = () => {
    saveStore("__login", []);
    setLogin(true);
  };
  function loginPage() {
    return (
      <div className="loginInner">
        <h2>Login</h2>
        <form onSubmit={submitLogin}>
          <label>
            <span>User name:</span>
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              }}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  function profilePage() {
    const userName = loadStore("__login")[0]?.storeName;

    return (
      <div className="loginInner">
        <h2>Profile</h2>
        <p>{userName}</p>
        <button type="button" onClick={submitLogout}>
          Logout
        </button>
      </div>
    );
  }
  return !login ? profilePage() : loginPage();
}
