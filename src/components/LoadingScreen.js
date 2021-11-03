import "./LoadingScreen.scss";
import { BiDollarCircle } from "react-icons/bi";

export default function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <span className="icon">
        <BiDollarCircle />
      </span>
      <h2>Loading</h2>
    </div>
  );
}
