import { useReducer } from "react";
import { BiUser as ProfileIcon } from "react-icons/bi";
import { connect } from "react-redux";
import Login from "./Login";

function LoginContainer({ loggedIn }) {
  const [open, toggleOpener] = useReducer((open) => !open, false);

  function handleCallback() {
    toggleOpener();
  }
  return (
    <div className="login-container">
      {loggedIn ? (
        ""
      ) : (
        <button className="register-button neutral">Register</button>
      )}
      <button className="login-button primary" onClick={toggleOpener}>
        <span className="button-icon">
          <ProfileIcon />
        </span>
        {loggedIn ? "Profile" : "Login"}
      </button>
      {open && <Login parentCallback={handleCallback} />}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(LoginContainer);
