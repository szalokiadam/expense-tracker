import { useState } from "react";
import { checkPermission } from "./permissions";
import "../resources/scss/Login.scss";
import { BiLogOut, BiMoney, BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import { setLoggedIn, setUserName } from "../actions";
import { connect } from "react-redux";

function Login({ parentCallback, loggedIn, setLogin, user, setUserName }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  function submitLogin(event) {
    event.preventDefault();
    const isValid = checkPermission({ username, password });
    if (isValid) {
      setValid(true);
      setLogin(true);
      setMenuToggle();
      setUserName(username);
    } else {
      setValid(false);
    }
  }

  function setMenuToggle() {
    parentCallback();
  }
  const submitLogout = () => {
    setMenuToggle();
    setLogin(false);
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
    return (
      <div className="loginInner">
        <h2>Profile</h2>
        <p>User: {user}</p>
        <div className="buttons">
          <Link to="/" onClick={setMenuToggle}>
            <button type="button" className="neutral">
              <span className="button-icon">
                <BiMoney />
              </span>
              Latest Transactions
            </button>
          </Link>
          <Link to="/monthly-transactions" onClick={setMenuToggle}>
            <button type="button" className="neutral">
              <span className="button-icon">
                <BiTimeFive />
              </span>
              Transactions by Date
            </button>
          </Link>
          <button type="button" onClick={submitLogout} className="neutral">
            <span className="button-icon">
              <BiLogOut style={{ transform: "rotate(180deg)" }} />
            </span>
            Logout
          </button>
        </div>
        <span className="version">
          version: {process.env.REACT_APP_VERSION}
        </span>
      </div>
    );
  }
  return loggedIn ? profilePage() : loginPage();
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (login) => dispatch(setLoggedIn(login)),
    setUserName: (user) => dispatch(setUserName(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
