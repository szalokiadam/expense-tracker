import { useState, useContext } from "react";
import { loadStore, saveStore } from "./Store";
import { checkPermission } from "./_permissions";
import "./Login.scss";
import { LoggedIn } from "./_globalContext";
import { BiLogOut } from "react-icons/bi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const { login, setLogin } = useContext(LoggedIn);

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
      <div className="loginInner">
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  function profilePage() {
    const userName = loadStore("__login")[0]?.userName;

    return (
      <div className="loginInner">
        <h2>Profile</h2>
        <p>User name: {userName}</p>
        <button type="button" onClick={submitLogout}>
          <span className="button-icon">
            <BiLogOut style={{ transform: "rotate(180deg)" }} />
          </span>
          Logout
        </button>
      </div>
    );
  }
  return !login ? profilePage() : loginPage();
}
