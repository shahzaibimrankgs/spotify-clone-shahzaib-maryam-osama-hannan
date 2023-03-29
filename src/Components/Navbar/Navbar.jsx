import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navigation-button">
        <FontAwesomeIcon icon={faChevronLeft} className="fa" />
        <FontAwesomeIcon icon={faChevronRight} className="fa" />
      </div>
      <div className="login-button">
        <Link to="/login">Login</Link>
        <Link to="/Signup">Signup</Link>
      </div>
    </div>
  );
}

export default Navbar;
