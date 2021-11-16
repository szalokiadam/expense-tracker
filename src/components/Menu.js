import { MenuItem } from "./MenuItem";
import { BiLogOut, BiMoney, BiTimeFive } from "react-icons/bi";

export default function Menu({ toggle, logout }) {
  function setMenuToggle() {
    toggle();
  }
  function submitLogout() {
    logout();
  }

  return (
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
  );
}
