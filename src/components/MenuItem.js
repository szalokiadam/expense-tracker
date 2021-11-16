import { Link } from "react-router-dom";

export function MenuItem({ linkTo, action, text, icon, buttonCls }) {
  function setMenuToggle() {
    action();
  }
  return (
    <Link to={linkTo} onClick={setMenuToggle}>
      <button type="button" className={buttonCls}>
        <span className="button-icon">{icon}</span>
        {text}
      </button>
    </Link>
  );
}
