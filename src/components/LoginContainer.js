import { useReducer } from "react";
import { BiUser as ProfileIcon } from "react-icons/bi";
import { connect } from "react-redux";
import Menu from "./Menu";
import { MenuItem } from "./MenuItem";
import "../resources/scss/LoginContainer.scss";
import Modal from "react-modal";

function LoginContainer({ loggedIn }) {
  const [isOpen, toggleOpener] = useReducer((open) => !open, false);

  return (
    <div className="login-container">
      {loggedIn ? (
        <MenuItem
          action={toggleOpener}
          text="Profile"
          buttonCls="profile-button primary"
          icon={<ProfileIcon />}
        />
      ) : (
        <>
          <MenuItem
            action={() => {}}
            text="Register"
            buttonCls="register-button neutral"
          />
          <MenuItem
            action={() => {}}
            linkTo="/login"
            text="Login"
            buttonCls="login-button primary"
            icon={<ProfileIcon />}
          />
        </>
      )}
      <Modal
        closeTimeoutMS={500}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={toggleOpener}
        className="Menu-Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(238, 238, 238, 0)",
          },
        }}
      >
        <Menu toggle={toggleOpener} />
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(LoginContainer);
