import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <Link to="/">
        <h1 className="header">NC Games</h1>
      </Link>
    </div>
  );
}
