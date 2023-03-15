import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default Navbar;
