import { Link } from "react-router-dom";
import "../resources/scss/MenuItem.scss";

export function MenuItem({
  linkTo,
  action,
  text,
  icon,
  buttonCls,
  disabled = false,
}) {
  function setAction() {
    action();
  }
  return (
    <button type="button" className={buttonCls} onClick={setAction}>
      {linkTo ? (
        <Link to={linkTo} disabled={disabled} className="button">
          {icon && <span className="button-icon">{icon}</span>}
          {text}
        </Link>
      ) : (
        <>
          {icon && <span className="button-icon">{icon}</span>}
          {text}
        </>
      )}
    </button>
  );
}
