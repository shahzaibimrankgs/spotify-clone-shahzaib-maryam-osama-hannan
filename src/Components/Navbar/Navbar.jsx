import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useDataLayerValue } from "../../DataLayer";

function Navbar() {
  const location = useLocation();
  const [value, setValue] = useState("");
  const [{ search }, dispatch] = useDataLayerValue();

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value) {
      dispatch({
        type: "SET_SEARCH",
        search: value,
      });
    }
  }, [value, dispatch]);
  const userLoggedIn = localStorage.getItem("token");
  return (
    <div className="navbar">
      <div className="navigation-button">
        <FontAwesomeIcon icon={faChevronLeft} className="fa" />
        <FontAwesomeIcon icon={faChevronRight} className="fa" />
      </div>

      {location?.pathname == "/search" ? (
        <div>
          <form className="searchStyle">
            <input
              placeholder="What do you want to listen to?"
              value={value}
              onChange={handleSearch}
            />
          </form>
        </div>
      ) : (
        <div></div>
      )}
      <div className="login-button">
        {userLoggedIn && (
          <Link
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Logout
          </Link>
        )}
        {!userLoggedIn && <Link to="/login">Login</Link>}
        <Link to="/Signup">Signup</Link>
      </div>
    </div>
  );
}

export default Navbar;
