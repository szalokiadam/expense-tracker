import { MenuItem } from "./MenuItem";
import { BiLogOut, BiMoney, BiTimeFive, BiX } from "react-icons/bi";
import "../resources/scss/Menu.scss";
import { setLoggedIn } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Menu({ toggle, setLogin }) {
  const history = useHistory();

  function setMenuToggle() {
    toggle();
  }
  function submitLogout() {
    setLogin(false);
    toggle();
    history.push("/");
  }

  return (
    <div className="menuInner">
      <div className="close">
        <span onClick={setMenuToggle}>
          <BiX />
        </span>
      </div>
      <div className="buttons">
        <MenuItem
          linkTo="/"
          action={setMenuToggle}
          text="Latest Transactions"
          icon={<BiMoney />}
          buttonCls="neutral"
        />
        <MenuItem
          linkTo="/monthly-transactions"
          action={setMenuToggle}
          text="Transactions by Date"
          icon={<BiTimeFive />}
          buttonCls="neutral"
        />
        <MenuItem
          linkTo="/"
          action={submitLogout}
          text="Logout"
          icon={<BiLogOut style={{ transform: "rotate(180deg)" }} />}
          buttonCls="neutral"
        />
      </div>
      <span className="version">
        version: [{process.env.REACT_APP_VERSION}]
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (login) => dispatch(setLoggedIn(login)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
