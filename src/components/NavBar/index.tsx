import "./NavBar.css";
import EndlessLogo from "../../assets/logo-endless.svg";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="container">
        <img src={EndlessLogo} />
      </div>
    </div>
  );
}
